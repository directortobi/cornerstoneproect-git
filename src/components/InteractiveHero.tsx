import { motion } from 'framer-motion';

const InteractiveHero: React.FC = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
      <div className="relative z-20 px-4 max-w-4xl mx-auto">
        <motion.h2
          className="text-2xl md:text-3xl font-light text-gold uppercase tracking-widest"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          His Excellency: Forging a New Era of Global Investment.
        </motion.h2>
        <motion.h1
          className="mt-4 text-4xl md:text-6xl lg:text-7xl font-extrabold text-text-primary uppercase tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          CORNERSTONE ETHMAN INVESTMENT HOLDING
        </motion.h1>
        <motion.p
          className="mt-6 text-lg md:text-xl font-light text-gold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          Delivers operational excellence and sustainable value by transforming insights into Strategic Investments & Management Excellence across the world.
        </motion.p>
      </div>
    </section>
  );
};

export default InteractiveHero;
