import { motion } from 'framer-motion';

const InteractiveHero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        poster="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop"
      >
        <source src="https://videos.pexels.com/video-files/3254011/3254011-hd_1920_1080_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 px-4">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-text-primary uppercase tracking-wider"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          CORNERSTONE ETHMAN
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-2xl font-light text-accent tracking-widest"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          Strategic Investment & Management Excellence
        </motion.p>
      </div>
    </section>
  );
};

export default InteractiveHero;
