import InteractiveHero from '../components/InteractiveHero';
import { motion } from 'framer-motion';
import { Building2, Leaf, Zap, Globe } from 'lucide-react';

const HomePage: React.FC<{setCurrentPage: (page: 'contact' | 'services') => void}> = ({ setCurrentPage }) => {
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
      icon: Globe,
      title: "Commercial Brokerage",
      description: "Mediating commercial operations and facilitating strategic business partnerships.",
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <InteractiveHero />

      <section className="py-20 bg-background">
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
              and strategic commercial brokerage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-primary p-8 rounded-lg border border-border hover:border-accent transition-all duration-300 shadow-sm hover:shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4">
                  <service.icon className="h-10 w-10 text-brand" />
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

      <section className="py-20 bg-primary">
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
            <p className="text-lg text-text-secondary max-w-4xl mx-auto mb-8">
              Founded on principles of trust, transparency, and performance, 
              CIE Holding stands as a reliable partner 
              for investors, stakeholders, and industry leaders seeking 
              sustainable returns and responsible growth.
            </p>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-brand text-white font-bold py-3 px-8 rounded-lg hover:bg-brand-hover transition-colors duration-300"
            >
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
