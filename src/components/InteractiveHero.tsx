import { motion } from 'framer-motion';

const InteractiveHero: React.FC = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden bg-primary">
      <div className="relative z-20 px-4 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-brand uppercase tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          CORNERSTONE ETHMAN INVESTMENT HOLDING
        </motion.h1>
        <motion.p
          className="mt-6 text-lg md:text-xl font-light text-accent"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          Delivers operational excellence and sustainable value by transforming insights into Strategic Investments & Management Excellence across the world.
        </motion.p>
      </div>
    </section>
  );
};

export default InteractiveHero;
