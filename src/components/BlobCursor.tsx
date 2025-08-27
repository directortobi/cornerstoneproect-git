import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface BlobCursorProps {
  blobType?: 'circle' | 'blob';
  fillColor?: string;
  trailCount?: number;
  sizes?: number[];
  innerSizes?: number[];
  innerColor?: string;
  opacities?: number[];
  shadowColor?: string;
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  filterStdDeviation?: number;
  useFilter?: boolean;
  fastDuration?: number;
  slowDuration?: number;
  zIndex?: number;
}

const BlobCursor: React.FC<BlobCursorProps> = ({
  blobType = 'circle',
  fillColor = '#5227FF',
  trailCount = 3,
  sizes = [20, 40, 60],
  innerSizes = [8, 16, 24],
  innerColor = 'rgba(255,255,255,0.8)',
  opacities = [0.8, 0.6, 0.4],
  shadowColor = 'rgba(82, 39, 255, 0.3)',
  shadowBlur = 5,
  shadowOffsetX = 2,
  shadowOffsetY = 2,
  useFilter = true,
  zIndex = 100
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const blobsRef = useRef<HTMLDivElement[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const blobs = blobsRef.current;
    let isDestroyed = false;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (isDestroyed) return;
      
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      // Use requestAnimationFrame for better performance
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      animationFrameRef.current = requestAnimationFrame(() => {
        if (isDestroyed) return;
        
        // Move main blob (first one) instantly to exact cursor position
        if (blobs[0]) {
          gsap.set(blobs[0], {
            x: e.clientX,
            y: e.clientY,
          });
        }

        // Trail blobs follow with smooth delay
        blobs.slice(1).forEach((blob, index) => {
          if (isDestroyed) return;
          
          const trailIndex = index + 1;
          const delay = trailIndex * 0.08;
          const speed = 0.2 + (trailIndex * 0.1);
          
          gsap.to(blob, {
            x: e.clientX,
            y: e.clientY,
            duration: speed,
            ease: "power2.out",
            delay: delay,
            overwrite: true
          });
        });
      });
    };

    const handleMouseDown = () => {
      if (isDestroyed) return;
      
      blobs.forEach((blob) => {
        if (blob) {
          gsap.to(blob, { 
            scale: 0.7, 
            duration: 0.15,
            ease: "power2.out",
            overwrite: true
          });
        }
      });
    };

    const handleMouseUp = () => {
      if (isDestroyed) return;
      
      blobs.forEach((blob) => {
        if (blob) {
          gsap.to(blob, { 
            scale: 1, 
            duration: 0.4,
            ease: "elastic.out(1, 0.3)",
            overwrite: true
          });
        }
      });
    };

    // Set initial position for all blobs with error handling
    try {
      gsap.set(blobs.filter(Boolean), { 
        xPercent: -50, 
        yPercent: -50,
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
      });
    } catch (error) {
      console.warn('GSAP initialization error:', error);
    }

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mousedown', handleMouseDown, { passive: true });
    document.addEventListener('mouseup', handleMouseUp, { passive: true });

    return () => {
      isDestroyed = true;
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      // Kill all GSAP animations for these elements
      blobs.forEach(blob => {
        if (blob) {
          gsap.killTweensOf(blob);
        }
      });
    };
  }, []);

  return (
    <div ref={cursorRef} className="fixed pointer-events-none top-0 left-0 w-full h-full" style={{ zIndex }}>
      {Array.from({ length: trailCount }).map((_, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) blobsRef.current[index] = el;
          }}
          className="absolute"
          style={{
            width: sizes[index],
            height: sizes[index],
            borderRadius: blobType === 'blob' 
              ? `${35 + Math.random() * 25}% ${65 + Math.random() * 15}% ${40 + Math.random() * 20}% ${60 + Math.random() * 20}% / ${50 + Math.random() * 20}% ${35 + Math.random() * 25}% ${65 + Math.random() * 15}% ${50 + Math.random() * 15}%`
              : '50%',
            background: index === 0 
              ? `radial-gradient(circle, ${fillColor}, ${fillColor}ee)` 
              : `radial-gradient(circle, ${fillColor}aa, ${fillColor}77)`,
            opacity: opacities[index],
            filter: useFilter && index > 0
              ? `blur(${Math.max(1, index * 2)}px)` 
              : 'none',
            boxShadow: index === 0 
              ? `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur * 3}px ${shadowColor}`
              : `${shadowOffsetX / 2}px ${shadowOffsetY / 2}px ${shadowBlur}px ${shadowColor}77`,
            mixBlendMode: index === 0 ? 'normal' : 'multiply'
          }}
        >
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: innerSizes[index],
              height: innerSizes[index],
              borderRadius: '50%',
              background: `radial-gradient(circle, ${innerColor}, transparent 70%)`,
              filter: 'blur(0.5px)'
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default BlobCursor;
