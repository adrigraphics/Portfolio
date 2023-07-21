import React from 'react'
import avatar_adri from '../assets/img/Avatar-Adri.jpg'
import 'animate.css';

export default function Hero() {
  return (

    <div className="hero h-screen bg-white">
      <div className="hero-content gap-[30px] md:gap-[50px] flex-col md:flex-row">
        <img className='w-[350px] rounded-full object-cover' src={avatar_adri} />
        <div className="presentacion text-center md:text-start">
          <h1 className='work-sans text-[64px] text-[#8B74D3] font-bold mb-4'>Hola!</h1>
          <h2 className='work-sans text-[40px] mb-4'>Mi nombre es <span className='font-medium text-[#8B74D3]'>Adri</span></h2>
          <h3 className='ibm-plex text-[23px] mb-5'>Soy fotógrafx / Diseñadorx</h3>
          <a href="#web" className='border border-[#8B74D3] inline-flex justify-center cursor-pointer hover:text-white hover:transition hover:duration-300 hover:bg-[#8B74D3] text-[#8B74D3] w-full rounded-full text-[28px] work-sans'>Conoce mi trabajo</a>
        </div>
      </div>
    </div>




  )
}
