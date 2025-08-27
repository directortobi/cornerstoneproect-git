import { motion } from 'framer-motion';
import { Mail, Phone, Building2, Clock, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  const contactInfo = [
    { 
      icon: Mail, 
      title: 'Email', 
      content: 'info@cornerstoneethmia.com', 
      description: 'Send us an email anytime' 
    },
    { 
      icon: Phone, 
      title: 'Phone', 
      content: '+971 (0) 4 123-4567', 
      description: 'Call us during business hours' 
    },
    { 
      icon: Building2, 
      title: 'Office', 
      content: 'Dubai Integrated Economic Zones', 
      description: 'Dubai, United Arab Emirates' 
    },
    { 
      icon: Clock, 
      title: 'Business Hours', 
      content: 'Sun - Thu: 9:00 AM - 6:00 PM', 
      description: 'GST (Gulf Standard Time)' 
    },
    { 
      icon: MapPin, 
      title: 'Visit Our Office', 
      content: 'Dubai Integrated Economic Zones', 
      description: 'Dubai, United Arab Emirates' 
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="relative bg-primary py-32 sm:py-40 text-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-brand"
          >
            Contact <span className="text-accent">CEI Holding</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-text-secondary"
          >
            Let's discuss your investment opportunities
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-primary p-6 rounded-lg border border-border hover:border-emerald hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex p-3 bg-secondary rounded-full mb-4">
                  <info.icon className="h-6 w-6 text-brand" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {info.title}
                </h3>
                <p className="text-text-primary font-medium mb-1">
                  {info.content}
                </p>
                <p className="text-text-secondary text-sm">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              CEI Holding is committed to building lasting partnerships that drive mutual success. 
              Contact us today to explore how we can work together.
            </p>
            <a 
              href="mailto:info@cornerstoneethmia.com"
              className="inline-block bg-brand text-white font-bold py-3 px-8 rounded-lg hover:bg-brand-hover transition-colors duration-300"
            >
              Send Email
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
