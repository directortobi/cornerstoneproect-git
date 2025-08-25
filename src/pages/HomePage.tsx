import InteractiveHero from '../components/InteractiveHero';
import { motion } from 'framer-motion';
import { Building2, Leaf, Zap, TrendingUp, Globe } from 'lucide-react';

const HomePage: React.FC<{setCurrentPage: (page: 'contact') => void}> = () => {
  const services = [
    {
      icon: Building2,
      title: "Commercial Enterprises",
      description: "Investment and management in transportation, contracting, finance, and diverse commercial activities.",
    },
    {
      icon: Leaf,
      title: "Agricultural Ventures",
      description: "Land reclamation, livestock farms, crop marketing, and marine resource exploitation.",
    },
    {
      icon: Zap,
      title: "Energy Projects",
      description: "Investment in oil and natural gas projects with operational control and management.",
    },
    {
      icon: TrendingUp,
      title: "Business Incubation",
      description: "Supporting innovative startups with facilities, technical support, and strategic guidance.",
    },
    {
      icon: Globe,
      title: "Commercial Brokerage",
      description: "Mediating commercial operations and facilitating strategic business partnerships.",
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <InteractiveHero />

      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Our Investment Focus
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Licensed activities spanning commercial enterprises, agriculture, energy, 
              and innovative business incubation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-secondary p-8 rounded-lg border border-border hover:border-accent transition-colors duration-300 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4">
                  <service.icon className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-text-secondary">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Driving Profitable & Purposeful Investments
            </h2>
            <p className="text-lg text-text-secondary max-w-4xl mx-auto">
              Founded on principles of trust, transparency, and performance, 
              Cornerstone Ethman Investment Holding stands as a reliable partner 
              for investors, stakeholders, and industry leaders seeking 
              sustainable returns and responsible growth.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
