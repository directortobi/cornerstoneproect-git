import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import InteractiveText from './InteractiveText';
import ImageSpawner from './ImageSpawner';

const InteractiveHero: React.FC = () => {
  const [spawnedImages, setSpawnedImages] = useState<Array<{
    id: string;
    x: number;
    y: number;
    src: string;
    rotation: number;
  }>>([]);
  const heroRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<Record<string, number>>({});

  // Add useEffect to clean up timers when the component unmounts
  useEffect(() => {
    return () => {
      // Clear all active timers to prevent memory leaks
      Object.values(timersRef.current).forEach(clearTimeout);
    };
  }, []);

  const handleCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const unsplashImages = [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150&h=150&fit=crop',
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=150&h=150&fit=crop',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=150&h=150&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150&h=150&fit=crop',
      'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=150&h=150&fit=crop',
      'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=150&h=150&fit=crop',
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=150&h=150&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150&h=150&fit=crop',
      'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=150&h=150&fit=crop',
      'https://images.unsplash.com/photo-1444927714506-8492d94b5ba0?w=150&h=150&fit=crop',
      'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=150&h=150&fit=crop',
      'https://images.unsplash.com/photo-1464822759844-d150baec013c?w=150&h=150&fit=crop',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=150&h=150&fit=crop',
      'https://images.unsplash.com/photo-1418489098061-ce87b5dc3aee?w=150&h=150&fit=crop',
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=150&h=150&fit=crop'
    ];
    
    const randomImage = unsplashImages[Math.floor(Math.random() * unsplashImages.length)];
    const rotation = Math.random() * 360 - 180;
    
    const newImage = {
      id: `image-${Date.now()}-${Math.random()}`,
      x: x - 75, // Center the image
      y: y - 75,
      src: randomImage,
      rotation
    };
    
    setSpawnedImages(prev => [...prev, newImage]);
    
    // Remove image after 5 seconds
    const timerId = setTimeout(() => {
      setSpawnedImages(prev => prev.filter(img => img.id !== newImage.id));
      delete timersRef.current[newImage.id];
    }, 5000);

    // Store the timer ID to be cleaned up on unmount
    timersRef.current[newImage.id] = timerId as unknown as number;
  };

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 cursor-crosshair overflow-hidden"
      onClick={handleCanvasClick}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse" />
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <InteractiveText 
            text="CREATIVE MAGIC" 
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4"
          />
          <InteractiveText 
            text="UNLEASHED" 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8"
          />
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Hover over letters to see the magic unfold. Click anywhere to spawn beautiful images from around the world.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Start Exploring
          </button>
          <button className="px-8 py-4 border-2 border-white/30 hover:border-white/60 rounded-full text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
            Learn More
          </button>
        </motion.div>
      </div>
      
      {/* Spawned images */}
      <AnimatePresence>
        {spawnedImages.map((image) => (
          <ImageSpawner 
            key={image.id}
            x={image.x}
            y={image.y}
            src={image.src}
            rotation={image.rotation}
          />
        ))}
      </AnimatePresence>
      
      {/* Instructions */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
      >
        <p className="text-gray-400 text-sm mb-2">Hover over letters • Click anywhere to spawn images</p>
        <div className="flex items-center justify-center space-x-4 text-gray-500 text-xs">
          <span>✨ Interactive Text</span>
          <span>🖼️ Random Images</span>
          <span>🎨 Creative Magic</span>
        </div>
      </motion.div>
    </div>
  );
};

export default InteractiveHero;
