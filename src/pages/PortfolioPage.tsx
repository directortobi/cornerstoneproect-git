import { motion } from "framer-motion";
import { Leaf, Fish, Beef, TreePine } from "lucide-react";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-green-900 to-gray-950 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Ranch Agro-Pastoral Ethman (RAE)
        </motion.h1>
        <p className="max-w-3xl mx-auto px-4 text-lg md:text-xl text-gray-300">
          A visionary <strong>118,000-hectare</strong> agro-pastoral project in the{" "}
          <span className="font-semibold text-green-400">
            Central African Republic
          </span>, dedicated to advancing food security, sustainable farming, and regional growth.
        </p>
      </section>

      {/* Project Overview */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/111827/4ade80?text=RAE+Logo"
          alt="Ranch Agro-Pastoral Ethman Logo"
          className="rounded-2xl shadow-lg w-full h-auto object-cover"
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
          <h2 className="text-3xl font-bold mb-4">About the Project</h2>
          <p className="text-gray-300 leading-relaxed">
            Ranch Agro-Pastoral Ethman (RAE) is designed as a fully integrated
            agro-pastoral ecosystem, bringing together{" "}
            <span className="text-green-400">crop cultivation</span>,{" "}
            <span className="text-green-400">livestock</span>,{" "}
            <span className="text-green-400">aquaculture</span>, and{" "}
            <span className="text-green-400">agroforestry</span>. With{" "}
            <strong>118,000 hectares</strong> of fertile land, RAE aims to
            position the Central African Republic as a regional leader in food
            production and agro-industry.
          </p>
        </motion.div>
      </section>

      {/* Key Development Areas */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Key Development Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="bg-gray-800 border border-gray-700 rounded-2xl shadow-lg p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Leaf className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-xl font-semibold mb-2">Crop Cultivation</h3>
              <p className="text-gray-400">
                Large-scale staple & cash crop production for food security
                and exports.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-800 border border-gray-700 rounded-2xl shadow-lg p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Beef className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-xl font-semibold mb-2">Livestock Farming</h3>
              <p className="text-gray-400">
                Sustainable pastoral farming to strengthen meat & dairy
                supply chains.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-800 border border-gray-700 rounded-2xl shadow-lg p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Fish className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-xl font-semibold mb-2">Aquaculture</h3>
              <p className="text-gray-400">
                Integrated fish farming systems to diversify food sources.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-800 border border-gray-700 rounded-2xl shadow-lg p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <TreePine className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-xl font-semibold mb-2">Agroforestry</h3>
              <p className="text-gray-400">
                Green innovation that balances agricultural growth with
                environmental care.
              </p>
            </motion.div>
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
          <h2 className="text-3xl font-bold mb-8">Strategic Impact</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            RAE is more than a farm — it is a{" "}
            <span className="text-green-400 font-semibold">
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
