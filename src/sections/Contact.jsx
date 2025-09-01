import React from 'react'
import Reveal from '../components/Reveal'
import { FaWhatsapp, FaPinterest, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-[#E6D1B4] via-[#000000] to-[#2E484A] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row gap-12">
        
        {/* Left: Contact Info */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Get In Touch</h2>
          </Reveal>
          <Reveal>
            <p className="text-lg mb-6">
              Ready to transform your brand? Get in touch and let’s discuss how we can bring your vision to life.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span>📧</span>
                <a href="mailto:junoos.studios@gmail.com" className="text-lg">junoos.studios@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <span>📞</span>
                <a
                  href="https://wa.me/+923409304769"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-teal-400 hover:text-teal-600"
                >
                  +92 340 9304769
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span>📍</span>
                <p className="text-lg">Islamabad, Pakistan</p>
              </li>
            </ul>
          </Reveal>
        </div>

        {/* Right: Contact Form */}
        <div className="w-full md:w-1/2">
          <Reveal delay={0.4}>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <textarea
                placeholder="Tell us about your project"
                rows="5"
                className="w-full p-4 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-teal-600 hover:bg-teal-700 transition-colors duration-300 font-semibold text-lg shadow-md"
              >
                Send Message
              </button>
            </form>
          </Reveal>
        </div>
      </div>

      {/* New Section: Our Social Media */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-white mb-6">Our Social Media</h2>
        </Reveal>
        
        <Reveal delay={0.2}>
          <div className="flex justify-center gap-8">
            <a
              href="https://wa.me/+923409304769"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaWhatsapp size={40} />
            </a>
            <a
              href="https://www.pinterest.com/junoosstudios/_profile/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaPinterest size={40} />
            </a>
            <a
              href="https://www.linkedin.com/company/108338180/admin/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaLinkedin size={40} />
            </a>
            <a
              href="https://www.instagram.com/junoos_studios?igsh=MTJ5MW5oY2o5eTBmNg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaInstagram size={40} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
