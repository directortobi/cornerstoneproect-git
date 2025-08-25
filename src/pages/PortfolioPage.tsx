import { motion } from "framer-motion";
import { Leaf, Fish, Beef, TreePine } from "lucide-react";

export default function PortfolioPage() {
  const areas = [
    { icon: Leaf, title: "Crop Cultivation", description: "Large-scale staple & cash crop production for food security and exports." },
    { icon: Beef, title: "Livestock Farming", description: "Sustainable pastoral farming to strengthen meat & dairy supply chains." },
    { icon: Fish, title: "Aquaculture", description: "Integrated fish farming systems to diversify food sources." },
    { icon: TreePine, title: "Agroforestry", description: "Green innovation that balances agricultural growth with environmental care." }
  ];

  return (
    <div className="min-h-screen bg-background text-text-primary">
      {/* Hero Section */}
      <section className="relative bg-primary py-24 sm:py-32 text-white text-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2070&auto=format&fit=crop')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Ranch Agro-Pastoral Ethman (RAE)
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-text-secondary"
          >
            A visionary <strong>118,000-hectare</strong> agro-pastoral project in the{" "}
            <span className="font-semibold text-accent">
              Central African Republic
            </span>.
          </motion.p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="https://images.unsplash.com/photo-1542856333-08780404a395?q=80&w=1974&auto=format&fit=crop"
          alt="Lush green fields representing the RAE project"
          className="rounded-lg shadow-lg w-full h-auto object-cover"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-text-primary">About the Project</h2>
          <p className="text-text-secondary leading-relaxed">
            Ranch Agro-Pastoral Ethman (RAE) is designed as a fully integrated
            agro-pastoral ecosystem, bringing together{" "}
            <span className="text-accent">crop cultivation</span>,{" "}
            <span className="text-accent">livestock</span>,{" "}
            <span className="text-accent">aquaculture</span>, and{" "}
            <span className="text-accent">agroforestry</span>. With{" "}
            <strong>118,000 hectares</strong> of fertile land, RAE aims to
            position the Central African Republic as a regional leader in food
            production and agro-industry.
          </p>
        </motion.div>
      </section>

      {/* Key Development Areas */}
      <section className="bg-primary py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-text-primary">
            Key Development Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {areas.map((area, index) => (
              <motion.div
                key={area.title}
                className="bg-secondary p-6 text-center rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <area.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2 text-text-primary">{area.title}</h3>
                <p className="text-text-secondary">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Impact */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-text-primary">Strategic Impact</h2>
          <p className="text-text-secondary max-w-3xl mx-auto text-lg">
            RAE is more than a farm — it is a{" "}
            <span className="text-accent font-semibold">
              cornerstone of regional development
            </span>. From job creation to sustainable exports, RAE contributes to
            economic resilience while empowering local communities and shaping the
            future of agro-industry in Africa.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
