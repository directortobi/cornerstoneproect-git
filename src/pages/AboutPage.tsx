import { motion } from 'framer-motion';
import { MapPin, Users, Globe, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section
        className="relative py-32 sm:py-40 text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(42, 74, 92, 0.9), rgba(42, 74, 92, 0.9)), url('https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            About <span className="text-accent">CEI Holding</span>
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
            className="prose prose-lg max-w-none text-text-secondary space-y-6 prose-strong:text-text-primary prose-headings:text-brand"
          >
            <p>
              Cornerstone Ethman Investments (CEI Holding) is a visionary
              investment firm, headquartered in GCC with a global mandate.
              Operating as a Limited Liability Company (LLC) within the dynamic
              framework of the Dubai Integrated Economic Zones, we are perfectly
              positioned to navigate and capitalize on opportunities worldwide.
            </p>

            <p>
              Our mission is to partner with and empower the next generation of
              industry leaders. We achieve this by providing strategic capital
              and expert guidance to high-potential ventures across a diverse
              range of sectors, including agriculture, and energy. We also 
              leverage our expertise in management consultancies and commercial 
              brokerage to provide comprehensive support and maximize value for 
              our portfolio companies.
            </p>

            <p>
              At the core of our competitive advantage is our founder, a former
              diplomat with over two decades of international experience. His
              expansive global network and deep understanding of diverse markets
              provide us with unparalleled access to exclusive opportunities.
              This unique expertise allows us to turn geopolitical insight into
              strategic investment, ensuring our partners receive more than just
              capital—they gain a trusted advisor with a worldwide perspective.
            </p>

            <p>
              We believe that true success is measured by both profitability and
              purpose. By focusing on sectors critical to global development, we
              are dedicated to creating a legacy of profitable and purposeful
              investments that shape the future of markets everywhere. Join us
              as we build a new era of global investment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section 
        className="py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(249, 250, 251, 0.95), rgba(249, 250, 251, 0.95)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
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
              {
                icon: MapPin,
                title: 'Strategic Location',
                description:
                  "Headquartered in Dubai's Integrated Economic Zones for unmatched access to global markets",
              },
              {
                icon: Users,
                title: 'Expert Leadership',
                description:
                  'Guided by decades of international expertise and diplomatic experience',
              },
              {
                icon: Globe,
                title: 'Global Perspective',
                description:
                  'Leveraging geopolitical insights to unlock worldwide investment opportunities',
              },
              {
                icon: Award,
                title: 'Proven Excellence',
                description:
                  'Track record of delivering sustainable, profitable, and purposeful investments',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/95 backdrop-blur-sm p-6 rounded-lg text-center border border-border hover:border-emerald hover:shadow-xl transition-all"
              >
                <div className="inline-flex p-4 bg-secondary rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-brand" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
