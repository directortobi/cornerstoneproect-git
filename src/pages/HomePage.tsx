import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Globe, Shield, Users } from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Expertise across high-growth sectors',
      description: 'Deep knowledge in commercial, agricultural, and energy investments'
    },
    {
      icon: Shield,
      title: 'Proven track record in investment and management',
      description: 'Consistent returns and successful project delivery'
    },
    {
      icon: Globe,
      title: 'Transparent, ethical, and results-driven approach',
      description: 'Building trust through accountability and performance'
    },
    {
      icon: Users,
      title: 'Global reach with local insight',
      description: 'International perspective with regional expertise'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Strategic Investment & <br />
              <span className="text-green-400">Management</span> <br />
              Across Key Industries
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-blue-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Cornerstone Ethmia delivers expert investment solutions and operational excellence 
              in commercial enterprises, agriculture, oil & gas, and management consultancy. 
              We build sustainable value through strategic partnerships and long-term vision.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button 
                className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 
                         text-white font-semibold rounded-lg text-lg transition-all duration-300 
                         transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore Our Services 
                <ArrowRight className="ml-2" size={20} />
              </button>
            </motion.div>
          </div>
        </div>
        
        {/* Hero Background Image */}
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop" 
            alt="Business meeting with investment team" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
              Why Choose Cornerstone Ethmia?
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                  <feature.icon className="text-blue-900" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Invest in Your Future?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Partner with us to unlock opportunities in high-growth sectors and 
              achieve sustainable returns through strategic investment and expert management.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 
                             text-white font-semibold rounded-lg text-lg transition-all duration-300 
                             transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get Started Today
              <ArrowRight className="ml-2" size={20} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
