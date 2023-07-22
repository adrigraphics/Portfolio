import React from 'react'
import { MdPhotoCamera } from 'react-icons/md'
import Veinti from '../components/Veinti'
import ScrollTop from '../components/ScrollTop'



export default function Fotografia() {
  return (
    <div id="fotografia" className="w-full flex bg-[#2b2048] min-h-contet">
      <div className="flex justify-center w-[860px] my-16 ml-auto mr-auto gap-[1rem] p-4 flex-col">
        <div className="titulo flex items-center gap-2">

          <MdPhotoCamera className='text-[35px] text-[#fabb3d]' />

          <h2 className='text-[40px] text-white work-sans font-bold'>

            Fotografía

          </h2>
        </div>
        <Veinti />


      </div>
      <ScrollTop />
    </div>
  )
}
