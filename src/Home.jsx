import React from 'react'
import Hero from './views/Hero'
import Web from './views/Web'
import Footer from './views/Footer'
import 'animate.css';
import Diseno from './views/Diseno'
import Fotografia from './views/Fotografia'
import Licencias from './views/Licencias'
import Contacto from './views/Contacto'
import Navbar from './views/Navbar';

export default function Home() {
  return (
    <div className="nunito animate__animated animate__fadeIn animate__slower">
      <Navbar />
        <Hero />
        <Web />
        <Diseno />
        <Fotografia />
        <Licencias />
        <Contacto />
        <Footer />
    </div>
  )
}
