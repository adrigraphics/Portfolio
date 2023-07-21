import React from 'react'
import { MdDesignServices } from 'react-icons/md'
import Salvia from '../components/Salvia'
import Confidentas from '../components/Confidentas'
import ConfidentasManual from '../components/ConfidentasManual'
import Amalgama from '../components/Amalgama'


export default function Diseno() {
  return (
    <div id="diseno" className="w-full flex bg-white min-h-content">
      <div className="flex justify-center w-[860px] my-16 ml-auto mr-auto gap-[1rem] p-4 flex-col">
        <div className="titulo flex items-center gap-2">

          <MdDesignServices className='text-[35px] text-[#fabb3d]' />

          <h2 className='text-[40px] work-sans font-bold'>

            Diseño Gráfico

          </h2>
        </div>
        <Salvia />

        <Confidentas />

        <ConfidentasManual />

        <Amalgama />

      </div>
    </div>
  )
}
