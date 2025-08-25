import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import InteractiveText from './InteractiveText';

const InteractiveHero: React.FC = () => {
  const [spawnedImages, setSpawnedImages] = useState<Array<{
    id: string;
    x: number;
    y: number;
    src: string;
    rotation: number;
  }>>([]);
  const heroRef = useRef<HTMLDivElement>(null);

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
            text="CORNERSTONE ETHMIA" 
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4"
          />
          <InteractiveText 
            text="INVESTMENT HOLDING" 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
          />
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Strategic Investment & Management Excellence across Commercial Enterprises, Agriculture, Oil & Gas, and Management Consultancy. 
          <br />
          <span className="text-blue-900 font-semibold">Click anywhere to explore our global network!</span>
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-900 to-green-700 hover:from-blue-800 hover:to-green-600 rounded-full text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Explore Our Services
          </button>
          <button className="px-8 py-4 border-2 border-blue-900/30 hover:border-blue-900/60 rounded-full text-blue-900 font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
            Contact Us Today
          </button>
        </motion.div>

        {/* Clear button when images are present */}
        {spawnedImages.length > 0 && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={(e) => {
              e.stopPropagation();
              setSpawnedImages([]);
            }}
            className="mt-8 px-6 py-3 border-2 border-gray-800 hover:bg-gray-800 hover:text-white rounded-full font-semibold transition-all duration-300"
          >
            Clear Images ({spawnedImages.length})
          </motion.button>
        )}
      </div>
      
      {/* Spawned images */}
      <AnimatePresence>
        {spawnedImages.map((image) => (
          <motion.img
            key={image.id}
            src={image.src}
            className="absolute rounded-lg shadow-2xl pointer-events-none"
            style={{
              left: image.x,
              top: image.y,
              width: 150,
              height: 150,
              transform: `rotate(${image.rotation}deg)`,
              objectFit: 'cover'
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ 
              opacity: 0, 
              scale: 0,
              transition: { duration: 0.5 }
            }}
            transition={{ 
              type: 'spring', 
              stiffness: 400, 
              damping: 25 
            }}
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
        <p className="text-gray-600 text-sm mb-2">Hover over letters for interactive text • Click anywhere to spawn global imagery</p>
        <div className="flex items-center justify-center space-x-4 text-gray-500 text-xs">
          <span>🏢 Commercial</span>
          <span>🌱 Agriculture</span>
          <span>⚡ Energy</span>
          <span>📈 Investment</span>
        </div>
      </motion.div>
    </div>
  );
};

export default InteractiveHero;
