import React from 'react'
import { MdContacts } from 'react-icons/md'
import { FaLinkedinIn, FaInstagram, FaBehance, FaGithub } from 'react-icons/fa'

const Contacto = () => {
    return (
        <div id="contacto" className="w-full z-40 flex py-12 bg-[#2b2048] ">
            <div className="flex justify-center w-[860px] ml-auto mr-auto gap-[1rem] p-4 flex-col">

                <div className="titulo flex items-center gap-2">
                    <MdContacts className='text-[35px] text-[#fabb3d]' />

                    <h2 className='text-[40px] text-white work-sans font-bold'>

                        Encuéntrame en:
                    </h2>
                </div>
                <div className="flex gap-3 justify-between">
                    <a href="https://www.linkedin.com/in/adrigraphics/" target="_blank" className="btn btn-circle w-16 h-16 text-xl">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://www.instagram.com/adrigraphics/" target="_blank" className="btn btn-circle w-16 h-16 text-xl">
                        <FaInstagram />
                    </a>
                    <a href="https://www.behance.net/adrigraphics" target="_blank" className="btn btn-circle w-16 h-16 text-xl">
                        <FaBehance />
                    </a>
                    <a href="https://github.com/adrigraphics" target="_blank" className="btn btn-circle w-16 h-16 text-xl">
                        <FaGithub />
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Contacto