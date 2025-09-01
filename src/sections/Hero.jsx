// src/sections/Hero.jsx
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center
                 bg-gradient-to-br from-[#E6D1B4] via-[#000000] to-[#2E484A] text-white px-6"
    >
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
       Where Creativity <br />
        <span className="text-[#E6D1B4]">Meets Strategy</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl max-w-2xl mb-8 text-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
       Junoos Studio creates brands, visuals, and digital journeys that connect with people everywhere
      </motion.p>

      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <a
          href="#services"
          className="px-6 py-3 bg-white text-black rounded-full font-semibold shadow hover:shadow-lg transition"
        >
          Our Services
        </a>
        <a
          href="https://wa.me/+923409304769"
          className="px-6 py-3 bg-[#2E484A] text-white rounded-full font-semibold shadow hover:shadow-lg transition"
        >
          Contact Us
        </a>
      </motion.div>
    </section>
  );
}
