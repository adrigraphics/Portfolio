import React from 'react'
import mamalgama_01 from '../assets/img/mamalgama-01.jpg'
import mamalgama_02 from '../assets/img/mamalgama-02.jpg'
import mamalgama_03 from '../assets/img/mamalgama-03.jpg'
import mamalgama_04 from '../assets/img/mamalgama-04.jpg'

const Amalgama = () => {
    return (
        <div>
            <p id="amalgama" className='ibm-plex text-[20px] mb-5 mt-20 text-gray-400'>

                Amalgama // Branding

            </p>
            <div className="disenoCards grid grid-cols-2 md:grid-cols-4 justify-center gap-2 w-full">

                <div className="disenoItem cursor-pointer overflow-hidden h-[200px] rounded-md">

                    <img src={mamalgama_01} className='w-full h-full object-cover hover:scale-[120%] ease-in-out duration-300 rounded-md bg-slate-300' alt="" />

                </div>

                <div className="disenoItem cursor-pointer overflow-hidden h-[200px] rounded-md">

                    <img src={mamalgama_02} className='w-full h-full object-cover hover:scale-[120%] ease-in-out duration-300 rounded-md bg-slate-300' alt="" />

                </div>
                <div className="disenoItem cursor-pointer overflow-hidden h-[200px] rounded-md">

                    <img src={mamalgama_03} className='w-full h-full object-cover hover:scale-[120%] ease-in-out duration-300 rounded-md bg-slate-300' alt="" />

                </div>
                <div className="disenoItem cursor-pointer overflow-hidden h-[200px] rounded-md">

                    <img src={mamalgama_04} className='w-full h-full object-cover hover:scale-[120%] ease-in-out duration-300 rounded-md bg-slate-300' alt="" />

                </div>
                
            </div>
        </div>
    )
}

export default Amalgama