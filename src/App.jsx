import React from 'react'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import Stats from './sections/Stats'   // 👈 Import Stats
import Services from './sections/Services'
import Portfolio from './sections/Portfolio'
import About from './sections/About'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-sans">
      <Nav />
      <main>
        <Hero />
        <Stats />       {/* 👈 Added Stats section here */}
        <Services />
        <Portfolio />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
