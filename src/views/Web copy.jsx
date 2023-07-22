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
        "img": mamalgama_01,
        "title": "",
        "subtitle": ""
    },
    {
      "img": mamalgama_01,
      "title": "",
      "subtitle": ""
    },
    {
      "img": mamalgama_01,
      "title": "",
      "subtitle": ""
    },
    {
      "img": mamalgama_01,
      "title": "",
      "subtitle": ""
    }
]

  return (
    <div id="web" className="w-full py-20 h-screen overflow-hidden flex bg-[#2b2048]">
      <div className="flex justify-center w-[860px] ml-auto mr-auto gap-[1rem] p-4 flex-col">



        <div className="titulo flex items-end gap-2">

          <MdWeb className='text-[35px] text-[#fabb3d]' />

          <h2 className='text-[40px] leading-9 text-white work-sans font-bold'>

            <span className='text-[25px] font-normal'>Diseño y</span> <br />Desarrollo Web

          </h2>
        </div>


        <div className='bg-white border border-slate-200 flex flex-col gap-5 p-6'>
          <div className="webCards grid grid-cols-2 justify-center gap-8">
            <div className="webItem cursor-pointer w-full">
              <div className="webItemImg border border-slate-200 overflow-hidden w-full h-[150px] rounded-md">
                <img src={estcarey} className='w-full h-full object-cover hover:scale-[120%] ease-in-out duration-300 rounded-md bg-slate-300' alt="" />
              </div>
              <p className='ibm-plex text-[17px] text-gray-500  font-medium mt-3'>

                Estudio Carey

              </p>
              <p className='montserrat text-[14px] text-[#8B74D3]'>

                (React App)

              </p>
            </div>
            <div className="webItem cursor-pointer">
              <div className='relative'>
                <div className="webItemImg border border-slate-200 overflow-hidden w-full h-[150px] rounded-md">

                  <img src={chatarra} className='w-full relative h-full object-cover hover:scale-[120%] bg-top ease-in-out duration-300 rounded-md bg-slate-300' alt="" />

                </div>
                <span className='absolute -top-[5px] -right-[5px] bg-[#fabb3d] text-black font-bold py-1 px-2 text-[12px] montserrat'>Colaboración</span>
              </div>

              <p className='ibm-plex text-[17px] text-gray-500  font-medium mt-3'>

                Chatarra Influencer

              </p>
              <p className='montserrat text-[14px] text-[#8B74D3]'>(React App)</p>
            </div>
            <div className="webItem cursor-pointer">

              <div className="webItemImg border border-slate-200 overflow-hidden w-full h-[150px] rounded-md">
                <img src={portafolio} className='w-full h-full object-cover hover:scale-[120%] bg-top ease-in-out duration-300 rounded-md bg-slate-300' alt="" />
              </div>

              <p className='ibm-plex text-[17px] text-gray-500  font-medium mt-3'>

                Este Portafolio

              </p>
              <p className='montserrat text-[14px] text-[#8B74D3]'>

                (React App)

              </p>
            </div>
            <div className="webItem cursor-pointer">

              <div className="webItemImg border border-slate-200 overflow-hidden w-full h-[150px] rounded-md">
                <img src={acento} className='w-full h-full object-cover hover:scale-[120%] bg-top ease-in-out duration-300 rounded-md bg-slate-300' alt="" />
              </div>

              <p className='ibm-plex text-[17px] text-gray-500  font-medium mt-3'>

                Acento Florería

              </p>
              <p className='montserrat text-[14px] text-[#8B74D3]'>

                (Wordpress)

              </p>
            </div>
          </div>
        </div>

      </div>
      <ScrollTop />
    </div>

  )
}
