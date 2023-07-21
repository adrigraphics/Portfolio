import React from 'react'
import msalvia_01 from '../assets/img/msalvia-01.jpg'
import msalvia_02 from '../assets/img/msalvia-02.jpg'
import msalvia_03 from '../assets/img/msalvia-03.jpg'
import msalvia_04 from '../assets/img/msalvia-04.jpg'
import msalvia_05 from '../assets/img/msalvia-05.jpg'
import msalvia_06 from '../assets/img/msalvia-06.jpg'
import msalvia_07 from '../assets/img/msalvia-07.jpg'
import msalvia_08 from '../assets/img/msalvia-08.jpg'

const Salvia = () => {
    return (
        <div>
            <p id="salvia" className='ibm-plex text-[20px] mb-5 mt-10 text-gray-400'>

                Salvia Inn // Branding

            </p>
            <div className="disenoCards grid grid-cols-2 md:grid-cols-4 justify-center gap-2 w-full">

                <div className="disenoItem cursor-pointer overflow-hidden h-[200px] rounded-md">

                    <img src={msalvia_01} className='w-full h-full object-cover hover:scale-[120%] ease-in-out duration-300 rounded-md bg-slate-300' alt="" />

                </div>

                <div className="disenoItem cursor-pointer overflow-hidden h-[200px] rounded-md">

                    <img src={msalvia_02} className='w-full h-full object-cover hover:scale-[120%] ease-in-out duration-300 rounded-md bg-slate-300' alt="" />

                </div>
                <div className="disenoItem cursor-pointer overflow-hidden h-[200px] rounded-md">

                    <img src={msalvia_03} className='w-full h-full object-cover hover:scale-[120%] ease-in-out duration-300 rounded-md bg-slate-300' alt="" />

                </div>
                <div className="disenoItem cursor-pointer overflow-hidden h-[200px] rounded-md">

                    <img src={msalvia_04} className='w-full h-full object-cover hover:scale-[120%] ease-in-out duration-300 rounded-md bg-slate-300' alt="" />

                </div>
                <div className="disenoItem cursor-pointer overflow-hidden h-[200px] rounded-md">

                    <img src={msalvia_05} className='w-full h-full object-cover hover:scale-[120%] ease-in-out duration-300 rounded-md bg-slate-300' alt="" />

                </div>

                <div className="disenoItem cursor-pointer overflow-hidden h-[200px] rounded-md">

                    <img src={msalvia_06} className='w-full h-full object-cover hover:scale-[120%] ease-in-out duration-300 rounded-md bg-slate-300' alt="" />

                </div>
                <div className="disenoItem cursor-pointer overflow-hidden h-[200px] rounded-md">

                    <img src={msalvia_07} className='w-full h-full object-cover hover:scale-[120%] ease-in-out duration-300 rounded-md bg-slate-300' alt="" />

                </div>
                <div className="disenoItem cursor-pointer overflow-hidden h-[200px] rounded-md">

                    <img src={msalvia_08} className='w-full h-full object-cover hover:scale-[120%] ease-in-out duration-300 rounded-md bg-slate-300' alt="" />

                </div>
            </div>
        </div>
    )
}

export default Salvia