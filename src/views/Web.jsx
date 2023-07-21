import React from 'react'
import { MdWeb } from 'react-icons/md'
import mockup from '../assets/img/mockup.png'
import estcarey from '../assets/img/estcarey.png'
import portafolio from '../assets/img/portafolio.png'
import acento from '../assets/img/acento.png'
import chatarra from '../assets/img/chatarra.png'

export default function Web() {
  return (
    <div id="web" className="w-full py-20  overflow-hidden flex bg-white bg-[url('./assets/img/pattern.png')] bg-auto bg-repeat">
      <div className="flex justify-center w-[860px] ml-auto mr-auto gap-[1rem] p-4 flex-col">
        
        

          <div className="titulo flex items-end gap-2">

            <MdWeb className='text-[35px] text-[#fabb3d]' />

            <h2 className='text-[40px] leading-9 text-black work-sans font-bold'>

              <span className='text-[25px] font-normal'>Desarrollo y</span> <br />Diseño Web

            </h2>
          </div>

          <div className='flex flex-col md:flex-row justify-center'>
          <div className='bg-white border border-slate-200 flex flex-col gap-5 pl-6 pr-6 md:pr-36 pt-6 md:pb-6 pb-36'>
            <div className="webCards grid grid-cols-2 justify-center gap-2">
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

                <div className="webItemImg border border-slate-200 overflow-hidden w-full h-[150px] rounded-md  relative">
                  <img src={chatarra} className='w-full h-full object-cover hover:scale-[120%] ease-in-out duration-300 rounded-md bg-slate-300' alt="" />
                  <span className='absolute top-[10px] right-[10px] bg-[#8B74D3] text-white py-1 px-2 text-[12px] montserrat'>Colaboración</span>
                </div>

                <p className='ibm-plex text-[17px] text-gray-500  font-medium mt-3'>

                  Chatarra Influencer

                </p>
                <p className='montserrat text-[14px] text-[#8B74D3]'>(React App)</p>
              </div>
              <div className="webItem cursor-pointer">

                <div className="webItemImg border border-slate-200 overflow-hidden w-full h-[150px] rounded-md">
                  <img src={portafolio} className='w-full h-full object-cover hover:scale-[120%] ease-in-out duration-300 rounded-md bg-slate-300' alt="" />
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
                  <img src={acento} className='w-full h-full object-cover hover:scale-[120%] ease-in-out duration-300 rounded-md bg-slate-300' alt="" />
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
          <div className="mockup-phone overflow-hidden -mt-[120px] md:-ml-[100px]">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1"><img src={mockup} className='w-full h-full object-cover' alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
