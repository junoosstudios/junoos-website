// src/components/Navbar.jsx
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo + Brand Name */}
        <a href="#home" className="flex items-center space-x-3">
          <img 
            src="\junoos logo1.png" 
            alt="Junoos Studio Logo" 
            className="h-10 w-10 object-contain"
          />
          <span className="text-2xl font-bold tracking-wide">
            Junoos Studio
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li><a href="#services" className="hover:text-[#E6D1B4]">Services</a></li>
          <li><a href="#portfolio" className="hover:text-[#E6D1B4]">Portfolio</a></li>
          <li><a href="#about" className="hover:text-[#E6D1B4]">About</a></li>
          <li><a href="#contact" className="hover:text-[#E6D1B4]">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden" 
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.ul 
          className="md:hidden flex flex-col items-center bg-black/90 py-6 space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <li><a href="#services" onClick={() => setOpen(false)}>Services</a></li>
          <li><a href="#portfolio" onClick={() => setOpen(false)}>Portfolio</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
        </motion.ul>
      )}
    </nav>
  );
}
