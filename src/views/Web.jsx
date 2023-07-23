import React from 'react'
import { MdWeb } from 'react-icons/md'
import mockup from '../assets/img/mockup.png'
import estcarey from '../assets/img/estcarey.png'
import portafolio from '../assets/img/portafolio.png'
import acento from '../assets/img/acento.png'
import chatarra from '../assets/img/chatarra.png'
import ScrollTop from '../components/ScrollTop'

export default function Web() {

  const data = [
    {
      "img": estcarey,
      "title": "Estudio Carey",
      "subtitle": "(React App)",
      "collab": false,
      "url": "https://carey.adrigraphics.mx",
      "target": "_blank"
    },
    {
      "img": chatarra,
      "title": "Chatarra Influencer",
      "subtitle": "(React App)",
      "collab": true,
      "url": "https://chatarrainfluencer.mx",
      "target": "_blank"
    },
    {
      "img": portafolio,
      "title": "Este Portafolio",
      "subtitle": "(React App)",
      "collab": false,
      "url": "#inicio",
      "target": ""
    },
    {
      "img": acento,
      "title": "Acento Florería",
      "subtitle": "(Wordpress)",
      "collab": false,
      "url": "https://acentofloreria.com",
      "target": "_blank"
    }
  ]

  return (
    <div id="web" className="w-full py-20 h-screen overflow-hidden flex bg-[#2b2048]">
      <div className="flex justify-center w-[860px] ml-auto mr-auto gap-[1rem] p-4 flex-col">



        <div className="titulo flex items-end mb-10 gap-2">

          <MdWeb className='text-[35px] text-[#fabb3d]' />

          <h2 className='text-[40px] leading-9 text-white work-sans font-bold'>

            <span className='text-[25px] font-normal'>Diseño y</span> <br />Desarrollo Web

          </h2>
        </div>



        <div className='bg-white border border-slate-200 flex flex-col p-2 md:p-6'>
          <div className="webCards grid grid-cols-2 justify-center gap-2 md:gap-6">
            {data.map((item, index) => (
              <a href={item.url} target={item.target} key={index}
              className='disenoItem relative cursor-pointer overflow-hidden h-[150px] md:h-[200px] rounded-md'>
                <img
                  src={item.img}
                  className='w-full
                  h-full
                    object-cover 
                    rounded-md bg-slate-300'
                />
                <div className="weboverlay w-full h-full absolute top-0"></div>
                {item.collab && <span className='absolute top-0 right-0 bg-[#b49ef7] text-black font-bold py-1 px-2 text-[12px] montserrat'>
                  Colaboración</span>}
                <div className='absolute top-0 bottom-0 left-0 right-0
                hover:scale-[120%] 
                ease-in-out duration-300 
                rounded-md flex flex-col
                items-center justify-center'>
                  <span className='font-bold bg-[#fabb3d] text-[12px] md:text-[15px] p-2 ibm-plex text-center'>{item.title}</span>
                  <span className='bg-white font-bold text-[11px] md:text-[14px] text-[#8B74D3] p-2 montserrat'>{item.subtitle}</span>
                </div>
              </a>
            ))}
            
            
          </div>
        </div>

      </div>
      <ScrollTop />
    </div>

  )
}
