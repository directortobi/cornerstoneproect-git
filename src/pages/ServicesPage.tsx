import { motion } from 'framer-motion';
import {
  Building2,
  Leaf,
  Flame,
  Briefcase,
  LineChart,
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: "SECT-001",
      code: "INV-CEI",
      type: "Sector",
      icon: Building2,
      title: "Commercial Enterprises Investment, Institution and Management",
      description: `
        We invest in and manage commercial projects across a diverse range of industries, 
        including transportation, contracting, and finance. Our approach focuses on building 
        robust businesses from the ground up or providing the strategic financial backing 
        they need to scale. We don't just invest; we partner, offering hands-on management 
        and institutional support to ensure long-term success.
      `,
    },
    {
      id: "SECT-002",
      code: "INV-AGRI",
      type: "Sector",
      icon: Leaf,
      title: "Agricultural Enterprises Investment, Institution and Management",
      description: `
        Recognizing the vital role of sustainable resources, we provide the financial investment 
        and management expertise required for agricultural projects. This includes everything 
        from land reclamation and large-scale farming to livestock, poultry breeding, and the 
        responsible exploitation of marine resources. Our goal is to foster a more secure and 
        efficient global food ecosystem.
      `,
    },
    {
      id: "SECT-003",
      code: "INV-OIL",
      type: "Sector",
      icon: Flame,
      title: "Investment in Oil & Natural Gas Projects",
      description: `
        We engage in the investment and management of oil and natural gas projects, 
        focusing on establishing and overseeing subsidiaries that carry out operational 
        control and management of related units. Our portfolio includes strategic ventures 
        that contribute to the global energy landscape while adhering to best practices in 
        operational efficiency and governance.
      `,
    },
    {
      id: "SECT-004",
      code: "BROKER",
      type: "Service",
      icon: Briefcase,
      title: "Commercial Brokers",
      description: `
        Our role as commercial brokers involves acting as a trusted negotiator and mediator 
        in commercial operations. We expertly bridge the gap between parties, facilitating 
        sales and purchase contracts in exchange for a commission or fee. Our deep market 
        knowledge and extensive network ensure seamless and successful transactions for our clients.
      `,
    },
    {
      id: "SECT-005",
      code: "CONSULT",
      type: "Service",
      icon: LineChart,
      title: "Management Consultancies",
      description: `
        We provide comprehensive administrative consultancies and studies to help organizations 
        optimize their performance. This includes everything from procedural engineering and 
        internal policy formulation to organizational restructuring and the development of 
        strategic plans. Our guidance empowers businesses to overcome challenges, innovate 
        work procedures, and achieve their full potential.
      `,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="relative bg-primary py-24 sm:py-32 text-white text-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Investment Sectors
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-text-secondary max-w-3xl mx-auto"
          >
            At CEI Holding, we strategically deploy capital into key sectors that drive global economic 
            progress and offer significant growth potential.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-primary rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-start gap-8"
            >
              <div className="flex-shrink-0">
                <service.icon className="h-12 w-12 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-text-primary mb-3">{service.title}</h3>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-text-secondary">
                    {service.id}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-text-secondary">
                    {service.code}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent">
                    {service.type}
                  </span>
                </div>
                <p className="text-text-secondary leading-relaxed whitespace-pre-line">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
