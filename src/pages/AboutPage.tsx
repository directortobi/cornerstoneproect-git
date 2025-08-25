import { motion } from 'framer-motion';
import { MapPin, Users, Globe, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="relative bg-primary py-24 sm:py-32 text-white text-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About Cornerstone Ethman
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-accent"
          >
            Strategic Investment & Management Excellence
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none text-text-secondary space-y-6 prose-strong:text-text-primary prose-headings:text-text-primary"
          >
            <p>
              Cornerstone Ethman Investment Holding (CEI Holding) is a visionary investment firm headquartered in the GCC. 
              As a Limited Liability Company (LLC) within the dynamic framework of the Dubai Integrated Economic Zones, 
              we are perfectly positioned to navigate and capitalize on opportunities worldwide.
            </p>

            <p>
              We are a forward-thinking firm dedicated to driving growth and sustainability across key economic sectors. 
              With a focus on strategic capital deployment, operational leadership, and comprehensive advisory services, 
              we partner with businesses and entrepreneurs to unlock their full potential.
            </p>

            <p>
              Our mission is to partner with and empower the next generation of industry leaders. We achieve this by providing 
              strategic capital and expert guidance to high-potential ventures across a diverse range of sectors, including 
              commercial enterprises, agriculture, and energy. We also leverage our expertise in management consultancies and 
              commercial brokerage to provide comprehensive support and maximize value for our portfolio companies.
            </p>

            <p>
              At the core of our competitive advantage is our founder, a Senior diplomat with over two decades of international 
              experience. His expansive global network and deep understanding of diverse markets provide us with unparalleled 
              access to exclusive opportunities. This unique expertise allows us to turn geopolitical insight into strategic 
              investment, ensuring our partners receive more than just capital—they gain a trusted advisor with a worldwide perspective.
            </p>

            <p>
              We believe that true success is measured by both profitability and purpose. By focusing on sectors critical to global 
              development, we are dedicated to creating a legacy of profitable and purposeful investments that shape the future of 
              markets everywhere. Founded on principles of trust, transparency, and performance, CEI Holding stands as a reliable 
              partner for investors, stakeholders, and industry leaders seeking sustainable returns and responsible growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Why Choose Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MapPin, title: "Strategic Location", description: "Headquartered in Dubai's Integrated Economic Zones for unmatched access to global markets" },
              { icon: Users, title: "Expert Leadership", description: "Guided by senior diplomatic experience and decades of international expertise" },
              { icon: Globe, title: "Global Perspective", description: "Leveraging geopolitical insights to unlock worldwide investment opportunities" },
              { icon: Award, title: "Proven Excellence", description: "Track record of delivering sustainable, profitable, and purposeful investments" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-secondary p-6 rounded-lg text-center"
              >
                <div className="inline-flex p-4 bg-primary rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
