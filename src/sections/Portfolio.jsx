import React from 'react'
import Reveal from '../components/Reveal'

export default function Portfolio() {
  const projects = [
    { title: 'E-posters', img: '/cob.png' },
    { title: 'certificates', img: '/cert.png'  },
    { title: 'panaflyx/posters', img:'cdr.png'  },
  ]

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
<Reveal>
  <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
    Selected Work
  </h2>
</Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <Reveal key={i}>
              <div className="group border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer">
                <img src={p.img} alt={p.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="text-gray-600 text-sm">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
