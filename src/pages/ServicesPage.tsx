import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Wheat, 
  Fuel, 
  Handshake, 
  TrendingUp, 
  ArrowRight,
  CheckCircle 
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Building2,
      title: 'Investment in Commercial Enterprises & Management',
      description: 'Strategic capital deployment and operational management for commercial businesses across diverse sectors.',
      features: [
        'Growth capital investment',
        'Operational management oversight',
        'Strategic business planning',
        'Market expansion strategies'
      ],
      image: 'https://images.unsplash.com/photo-1560472355-109703aa3edc?w=500&h=300&fit=crop'
    },
    {
      icon: Wheat,
      title: 'Investment in Agricultural Enterprises & Management',
      description: 'Comprehensive agricultural investment solutions focused on sustainable farming and food security initiatives.',
      features: [
        'Sustainable farming projects',
        'Agricultural technology integration',
        'Supply chain optimization',
        'Food security initiatives'
      ],
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&h=300&fit=crop'
    },
    {
      icon: Fuel,
      title: 'Investment in Oil & Natural Gas Projects',
      description: 'Strategic investments in energy sector projects with focus on sustainable extraction and energy independence.',
      features: [
        'Energy project development',
        'Sustainable extraction methods',
        'Infrastructure development',
        'Energy independence solutions'
      ],
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=500&h=300&fit=crop'
    },
    {
      icon: Handshake,
      title: 'Commercial Brokers',
      description: 'Professional brokerage services connecting investors with high-value commercial opportunities.',
      features: [
        'Deal sourcing and structuring',
        'Due diligence support',
        'Transaction facilitation',
        'Market intelligence'
      ],
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&h=300&fit=crop'
    },
    {
      icon: TrendingUp,
      title: 'Management Consultancies',
      description: 'Expert advisory services to optimize business performance and strategic decision-making.',
      features: [
        'Strategic planning consulting',
        'Operational efficiency improvement',
        'Financial optimization',
        'Risk management advisory'
      ],
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=300&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-green-800 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our <span className="text-green-400">Services</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-blue-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive investment and management solutions across key economic sectors
            </motion.p>
            <motion.div 
              className="w-24 h-1 bg-green-400 mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </div>
        </div>
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop" 
            alt="Business services overview" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mr-4">
                      <service.icon className="text-blue-900" size={32} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="text-green-600 mr-3" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="inline-flex items-center px-6 py-3 bg-blue-900 hover:bg-blue-800 
                                   text-white font-semibold rounded-lg transition-all duration-300 
                                   transform hover:scale-105">
                    Learn More
                    <ArrowRight className="ml-2" size={18} />
                  </button>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="rounded-lg shadow-xl w-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-green-600/20 rounded-lg"></div>
                  </div>
                </div>
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
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how our comprehensive services can help you achieve 
              your investment and management goals.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 
                             text-white font-semibold rounded-lg text-lg transition-all duration-300 
                             transform hover:scale-105 shadow-lg hover:shadow-xl">
              Contact Us Today
              <ArrowRight className="ml-2" size={20} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
