import InteractiveHero from '../components/InteractiveHero';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Leaf, Zap, TrendingUp, Globe } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Interactive Hero Section */}
      <InteractiveHero />

      {/* Core Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Investment Focus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Licensed activities spanning commercial enterprises, agriculture, energy, 
              and innovative business incubation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Commercial Enterprises",
                description: "Investment and management in transportation, contracting, finance, and diverse commercial activities.",
                color: "bg-blue-100 text-blue-900"
              },
              {
                icon: Leaf,
                title: "Agricultural Ventures",
                description: "Land reclamation, livestock farms, crop marketing, and marine resource exploitation.",
                color: "bg-green-100 text-green-700"
              },
              {
                icon: Zap,
                title: "Energy Projects",
                description: "Investment in oil and natural gas projects with operational control and management.",
                color: "bg-yellow-100 text-yellow-800"
              },
              {
                icon: TrendingUp,
                title: "Business Incubation",
                description: "Supporting innovative startups with facilities, technical support, and strategic guidance.",
                color: "bg-purple-100 text-purple-700"
              },
              {
                icon: Globe,
                title: "Commercial Brokerage",
                description: "Mediating commercial operations and facilitating strategic business partnerships.",
                color: "bg-indigo-100 text-indigo-700"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`inline-flex p-3 rounded-lg ${service.color} mb-4`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Driving Profitable & Purposeful Investments
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Founded on principles of trust, transparency, and performance, 
              Cornerstone Ethmia Investment Holding stands as a reliable partner 
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
