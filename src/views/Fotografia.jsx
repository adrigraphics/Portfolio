import React, { useState } from 'react'
import { MdPhotoCamera } from 'react-icons/md'
import Veinte from '../components/Veinte'
import Rabia from '../components/Rabia'
import Diecinueve from '../components/Diecinueve'
import Santocafeto from '../components/Santocafeto'




export default function Fotografia() {

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  }


  return (
    <div id="fotografia" className="w-full flex bg-[#2b2048] min-h-contet">
      <div className="flex justify-center w-[860px] my-16 ml-auto mr-auto gap-[1rem] p-4 flex-col">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 w-full">
          <div className="titulo flex items-center gap-2">
            <MdPhotoCamera className='text-[35px] text-[#fabb3d]' />
            <h2 className='text-[38px] text-white work-sans font-bold'>Fotografía</h2>
          </div>


          <div className="bloc-tabs flex flex-row flex-wrap gap-2 text-[#D6D6D6] work-sans text-[15px] cursor-pointer">
            <div
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}>

              28S 2020

            </div>
            <div
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}>

              28S 2019

            </div>
            <div
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}>

              Rabia Café

            </div>
            <div
              className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(4)}>

              Santo Cafeto

            </div>

          </div>

        </div>


        <div className="content-tabs">
          <div className={toggleState === 1 ? "content active-content" : "content"}>
            <Veinte />
          </div>
          <div className={toggleState === 2 ? "content active-content" : "content"}>
            <Diecinueve />
          </div>
          <div className={toggleState === 3 ? "content active-content" : "content"}>
            <Rabia />
          </div>
          <div className={toggleState === 4 ? "content active-content" : "content"}>
            <Santocafeto />
          </div>
        </div>

      </div>
    </div>
  )
}




