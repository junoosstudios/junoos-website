import React from 'react'
import Reveal from '../components/Reveal'

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Our Mission Section */}
        <div className="text-center mb-12">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Our Mission</h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <Reveal delay={0.2}>
              <p className="text-lg text-gray-700">
                At Junoos Design Studio, we create design that connects with people. We build brands, packaging, and visuals that feel fresh, meaningful, and easy to understand. Every project blends tradition with modern style, using simple ideas and strong stories. Our goal is to make design that speaks to culture, works beautifully, and stays memorable—across screens, shelves, and borders.
              </p>
            </Reveal>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <img
              src="https://via.placeholder.com/500x350"
              alt="Our Mission"
              className="rounded-2xl shadow-md w-full h-full object-cover absolute right-0 top-0"
            />
          </div>
        </div>

        {/* Our Story Section */}
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-8 mt-16">Our Story</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            <img
              src="https://via.placeholder.com/500x350"
              alt="Our Story"
              className="rounded-2xl shadow-md w-full h-full object-cover absolute left-0 top-0"
            />
          </div>

          {/* Right: Text */}
          <div>
            <Reveal delay={0.2}>
              <p className="text-lg text-gray-700">
                Junoos Design Studio was founded by Abdullah, a visionary in branding and frontend architecture. Combining creativity with technical expertise, our story began with a simple idea: to merge culture and code and create meaningful, lasting experiences.
              </p>
              <p className="text-lg text-gray-700 mt-6">
                From humble beginnings to a full-fledged design studio, we've been crafting designs that honor tradition, embrace innovation, and reflect the essence of our clients. Every design solution is tailored to fit the unique needs of each project, guided by our commitment to excellence and cultural understanding.
              </p>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  )
}
