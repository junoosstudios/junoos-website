import React from 'react'
import Reveal from '../components/Reveal'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Al-Mahmoud',
      role: 'CEO, Luxury Boutique',
      text: 'Junoos Studio transformed our brand identity completely. Their attention to detail and understanding of luxury aesthetics is exceptional.',
      avatar: 'S',
    },
    {
      name: 'Mohammed Hassan',
      role: 'Founder, Tech Startup',
      text: 'The UI/UX design for our app exceeded all expectations. User engagement increased by 300% after the redesign.',
      avatar: 'M',
    },
    {
      name: 'Layla Abdulrahman',
      role: 'Marketing Director',
      text: 'Their packaging design helped our product stand out on shelves. Sales increased significantly within the first month.',
      avatar: 'L',
    },
  ]

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-semibold">Client Stories</h2>
          </Reveal>
          <Reveal>
            <p className="mt-4 text-lg text-gray-600">
              Hear what our clients say about working with Junoos Studio and the impact of our design solutions.
            </p>
          </Reveal>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.2}>
              <div className="flex flex-col justify-between h-full p-6 rounded-2xl shadow-sm bg-white border hover:shadow-lg transition-shadow duration-300">
                {/* Avatar */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full flex items-center justify-center font-bold text-white bg-teal-900">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{t.name}</p>
                      <p className="text-sm text-gray-600">{t.role}</p>
                    </div>
                  </div>

                  {/* Text */}
                  <p className="text-gray-700 mb-6">"{t.text}"</p>
                </div>

                {/* Stars */}
                <div className="flex text-yellow-500 mt-auto">
                  {Array(5).fill(0).map((_, idx) => (
                    <span key={idx}>★</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
