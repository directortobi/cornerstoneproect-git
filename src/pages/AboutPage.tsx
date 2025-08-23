import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To create lasting value by investing in ventures that contribute to economic development, food security, and energy independence.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the leading investment and management firm driving sustainable growth across key economic sectors globally.'
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Trust, transparency, performance, and innovation guide every decision we make and every partnership we form.'
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'Experienced professionals with deep expertise in investment, management, and sector-specific knowledge.'
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
              About <span className="text-green-400">Cornerstone Ethmia</span>
            </motion.h1>
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
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop" 
            alt="Investment firm team in boardroom" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
                Strategic Investment & Management Excellence
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Cornerstone Ethmia is a forward-thinking investment and management firm dedicated to 
                  driving growth and sustainability across key economic sectors. With a focus on strategic 
                  capital deployment, operational leadership, and advisory services, we partner with 
                  businesses and entrepreneurs to unlock their full potential.
                </p>
                <p>
                  Our core mission is to create lasting value by investing in ventures that contribute 
                  to economic development, food security, and energy independence. Whether supporting 
                  innovative startups, managing large-scale agricultural projects, or advising on oil 
                  & gas investments, we bring expertise, integrity, and innovation to every engagement.
                </p>
                <p>
                  Founded on principles of trust, transparency, and performance, Cornerstone Ethmia 
                  stands as a reliable partner for investors, stakeholders, and industry leaders 
                  seeking sustainable returns and responsible growth.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                alt="Corporate leadership team" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-green-600/20 rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Our Foundation
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                  <value.icon className="text-blue-900" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-green-400 mb-2">15+</h3>
              <p className="text-xl text-blue-100">Years of Experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-green-400 mb-2">50+</h3>
              <p className="text-xl text-blue-100">Successful Projects</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-green-400 mb-2">5</h3>
              <p className="text-xl text-blue-100">Core Service Areas</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
