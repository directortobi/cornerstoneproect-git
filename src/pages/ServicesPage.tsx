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
      color: "bg-blue-100 text-blue-900"
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
      color: "bg-green-100 text-green-900"
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
      color: "bg-yellow-100 text-yellow-900"
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
      color: "bg-purple-100 text-purple-900"
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
      color: "bg-red-100 text-red-900"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-900 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Investment Sectors</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              At CEI Holding, we strategically deploy capital into key sectors that drive global economic 
              progress and offer significant growth potential. Our expertise allows us to identify and 
              cultivate opportunities that create lasting value for our partners and the communities they serve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
            >
              <div className="flex items-start space-x-6">
                <div className={`inline-flex p-4 rounded-lg ${service.color} flex-shrink-0`}>
                  <service.icon className="h-10 w-10" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {service.id}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                      {service.code}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      {service.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
