import React from 'react'
import avatar_adri from '../assets/img/Avatar-Adri.jpg'
import 'animate.css';


export default function Hero() {
  return (

    <div id="inicio" className="hero h-screen bg-white px-5">
      <div className="hero-content gap-[30px] md:gap-[50px] flex-col md:flex-row">
        <img className='w-[200px] md:w-[350px] rounded-full object-cover' src={avatar_adri} />
        <div className="presentacion text-center md:text-start">
          <h1 className='work-sans text-[54px] md:text-[64px] text-[#8B74D3] font-bold mb-1'>Hola!</h1>
          <h2 className='work-sans text-[30px] md:text-[40px] mb-4'>Mi nombre es <span className='font-medium text-[#8B74D3]'>Adri</span></h2>
          <h3 className='ibm-plex text-[17px] md:text-[23px] mb-5'>Soy fotógrafx / Diseñadorx</h3>
          <a href="#web" className='border py-1 border-[#8B74D3] inline-flex justify-center cursor-pointer hover:text-white hover:transition hover:duration-300 hover:bg-[#8B74D3] text-[#8B74D3] w-full rounded-full text-[20px] md:text-[28px] work-sans'>Conoce mi trabajo</a>
        </div>
      </div>
    </div>




  )
}
