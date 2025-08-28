import { motion } from 'framer-motion';

const InteractiveHero: React.FC = () => {
  return (
    <section className="relative h-[85vh] flex items-center justify-center text-center overflow-hidden">
      {/* Dubai Skyline Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(42, 74, 92, 0.85), rgba(42, 74, 92, 0.85)), url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')`,
        }}
      />
      
      {/* Geometric overlay inspired by logo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-accent/30 rounded-lg transform rotate-12"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-accent/20 rounded-lg transform -rotate-12"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-accent/10 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-brand/10 rounded-full"></div>
      </div>

      <div className="relative z-20 px-4 max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white uppercase tracking-tight mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          CORNERSTONE ETHMAN INVESTMENTS
        </motion.h1>
        
        <motion.p
          className="text-lg md:text-xl font-light text-accent max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          Delivers operational excellence and sustainable value by transforming insights into Strategic Investments & Management Excellence across the world.
        </motion.p>
        
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center px-6 py-3 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30">
            <span className="text-accent font-medium">Dubai, UAE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveHero;
