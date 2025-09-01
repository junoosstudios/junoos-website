// src/sections/Stats.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Counter({ target }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [target]);

  return <span>{count}</span>;
}

export default function Stats() {
  const stats = [
    { value: 100, suffix: "+", label: "Projects Completed" },
    { value: 50, label: "Happy Clients" },
    { value: 10, label: "Awards Won" },
    { value: 3, label: "Years Experience" },
  ];

  return (
    <section className="bg-gradient-to-r from-[#2E484A] to-black py-16 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <p className="text-4xl font-extrabold">
              <Counter target={stat.value} />
              {stat.suffix || ""}
            </p>
            <p className="mt-2 text-sm tracking-wider uppercase">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
