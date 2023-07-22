import React from 'react'
import { MdSchool } from 'react-icons/md'
import codecademy from '../assets/img/codecademy.png'
import prrrgrammer from '../assets/img/prrrgrammer.png'
import uabc from '../assets/img/UABC.png'
import hubspot from '../assets/img/hubspot.png'

const Licencias = () => {
    return (
        <div id="licencias" className="w-full h-screen flex bg-white min-h-content bg-[url('./assets/img/pattern.png')] bg-auto bg-repeat">
            <div className="flex justify-center w-[860px] my-16 ml-auto mr-auto gap-[1rem] p-4 flex-col">


                <div className="titulo flex items-end gap-2">

                <MdSchool className='text-[35px] text-[#fabb3d]' />

                    <h2 className='text-[40px] leading-9 text-black work-sans font-bold'>

                        <span className='text-[25px] font-normal'>Licencias y </span> <br />Certificaciones

                    </h2>
                </div>


                <div className='bg-white border flex flex-col gap-5 border-slate-300 p-6'>
                    <div className="estudios flex gap-2">
                        <img src={uabc} alt="" className="estImg rounded-md w-[80px] h-[80px]" />
                        <div className="details">
                            <p className="ibm-plex text-[24px] text-[#808080] ">Mercadotecnia</p>
                            <p className="montserrat text-[16px] text-[#8B74D3]">Universidad Autónoma de Baja California</p>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="3" viewBox="0 0 798 3" fill="none">
                        <path d="M0 1.5H798" stroke="#8E8E8E" stroke-width="2" stroke-dasharray="2 10" />
                    </svg>

                    <div className="grid grid-rows-1 md:grid-cols-2  gap-3 licItems">

                        <div className="licItem flex gap-3">
                            <img src={codecademy} alt="" className="estImg rounded-md w-[50px] h-[50px]" />
                            <div className="details">
                                <p className="ibm-plex text-[18px] text-[#808080] ">
                                    HTML
                                </p>
                                <p className="montserrat text-[12px] text-[#8B74D3]">
                                    Codecademy
                                </p>
                            </div>
                        </div>

                        <div className="licItem flex gap-3">
                            <img src={codecademy} alt="" className="estImg rounded-md w-[50px] h-[50px]" />
                            <div className="details">
                                <p className="ibm-plex text-[18px] text-[#808080] ">
                                    CSS
                                </p>
                                <p className="montserrat text-[12px] text-[#8B74D3]">
                                    Codecademy
                                </p>
                            </div>
                        </div>

                        <div className="licItem flex gap-3">
                            <img src={codecademy} alt="" className="estImg rounded-md w-[50px] h-[50px]" />
                            <div className="details">
                                <p className="ibm-plex text-[18px] text-[#808080] ">
                                    Introducción al diseño UX/UI
                                </p>
                                <p className="montserrat text-[12px] text-[#8B74D3]">
                                    Codecademy
                                </p>
                            </div>
                        </div>

                        <div className="licItem flex gap-3">
                            <img src={prrrgrammer} alt="" className="estImg rounded-md w-[50px] h-[50px]" />
                            <div className="details">
                                <p className="ibm-plex text-[18px] text-[#808080] ">
                                    Desarrollo Web
                                </p>
                                <p className="montserrat text-[12px] text-[#8B74D3]">
                                    Prrrgrammer
                                </p>
                            </div>
                        </div>


                        <div className="licItem flex gap-3">
                            <img src={prrrgrammer} alt="" className="estImg rounded-md w-[50px] h-[50px]" />
                            <div className="details">
                                <p className="ibm-plex text-[18px] text-[#808080] ">
                                    Fundamentos de Programación
                                </p>
                                <p className="montserrat text-[12px] text-[#8B74D3]">
                                    Prrrgrammer
                                </p>
                            </div>
                        </div>

                        <div className="licItem flex gap-3">
                            <img src={hubspot} alt="" className="estImg rounded-md w-[50px] h-[50px]" />
                            <div className="details">
                                <p className="ibm-plex text-[18px] text-[#808080] ">
                                    Content Marketing
                                </p>
                                <p className="montserrat text-[12px] text-[#8B74D3]">
                                    HubSpot Academy
                                </p>
                            </div>
                        </div>

                        <div className="licItem flex gap-3">
                            <img src={hubspot} alt="" className="estImg rounded-md w-[50px] h-[50px]" />
                            <div className="details">
                                <p className="ibm-plex text-[18px] text-[#808080] ">
                                    Inbound Marketing
                                </p>
                                <p className="montserrat text-[12px] text-[#8B74D3]">
                                    HubSpotAcademy
                                </p>
                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
}

export default Licencias