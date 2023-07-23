import React, { useState } from 'react'
import { MdDesignServices } from 'react-icons/md'
import Salvia from '../components/Salvia'
import Confidentas from '../components/Confidentas'
import ConfidentasGuia from '../components/ConfidentasGuia'
import Amalgama from '../components/Amalgama'




export default function Diseno() {

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <div id="diseno" className="w-full flex bg-white min-h-content">
      <div className="flex justify-center w-[860px] my-16 ml-auto mr-auto gap-[1rem] p-4 flex-col">
        
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 w-full">
          <div className="titulo flex items-center gap-2">
            <MdDesignServices className='text-[35px] text-[#fabb3d]' />
            <h2 className='text-[38px] text-black work-sans font-bold'>Diseño Gráfico</h2>
          </div>


          <div className="bloc-tabs flex flex-row gap-2 text-[#D6D6D6] work-sans text-[15px] cursor-pointer">
            <div
              className={toggleState === 1 ? "tabss active-tabss" : "tabss"}
              onClick={() => toggleTab(1)}>

              Salvia

            </div>
            <div
              className={toggleState === 3 ? "tabss active-tabss" : "tabss"}
              onClick={() => toggleTab(3)}>

              Las Confidentas

            </div>
            <div
              className={toggleState === 2 ? "tabss active-tabss" : "tabss"}
              onClick={() => toggleTab(2)}>

              Amalgama

            </div>

          </div>

        </div>


        <div className="content-tabs">
          <div className={toggleState === 1 ? "content active-content" : "content"}>
            <Salvia />
          </div>
          <div className={toggleState === 2 ? "content active-content" : "content"}>
            <Amalgama />
          </div>
          <div className={toggleState === 3 ? "content active-content" : "content"}>
            <Confidentas />
            <ConfidentasGuia />
          </div>
        </div>

      </div>
    </div>
  )
}
