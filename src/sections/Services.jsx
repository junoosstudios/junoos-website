// src/sections/Services.jsx
import { motion } from "framer-motion";

const services = [
  {
    title: "🎨 Branding & Identity",
    points: [
      "Logo design & brand guidelines",
      "Typography & color systems",
      "Visual language & assets",
      "Consistent brand strategy",
    ],
  },
  {
    title: "💻 Web Design & Development",
    points: [
      "Responsive website design",
      "React.js & modern frameworks",
      "SEO optimization",
      "Interactive animations",
    ],
  },
  {
    title: "📦 Packaging Design",
    points: [
      "Culturally resonant packaging concepts",
      "Structural and dieline design",
      "Sustainable material sourcing",
      "Shelf impact and unboxing experience",
    ],
  },
  {
    title: "📣 Marketing & Content",
    points: [
      "Campaign design and digital assets",
      "Social media branding kits",
      "Copywriting and storytelling",
      "Motion graphics and video editing",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-2xl bg-white shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <ul className="space-y-2 text-gray-600">
                {service.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
