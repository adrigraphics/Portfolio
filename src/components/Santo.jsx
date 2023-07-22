import React from 'react'
import f28s1 from '../assets/img/f28s1.jpg'
import f28s2 from '../assets/img/f28s2.jpg'
import f28s3 from '../assets/img/f28s3.jpg'
import f28s4 from '../assets/img/f28s4.jpg'
import f28s5 from '../assets/img/f28s5.jpg'
import f28s6 from '../assets/img/f28s6.jpg'
import f28s7 from '../assets/img/f28s7.jpg'
import f28s8 from '../assets/img/f28s8.jpg'

const Santo = () => {
    return (
        <div>
            <p id="santo" className='ibm-plex text-[20px] mb-5 mt-10 text-gray-400'>

                28S Tijuana // Fotografía Documental

            </p>
            <div className="disenoCards grid grid-cols-2 md:grid-cols-4 justify-center gap-2 w-full">

                <div className="Polaroid h-[240px] relative bg-white shadow-md">
                    <div className="disenoItem mx-[6px] absolute top-[6px] left-0 right-0 cursor-pointer overflow-hidden h-[200px] rounded-md">

                        <img src={f28s1} className='w-full h-full object-cover hover:scale-[120%] ease-in-out duration-300 rounded-md bg-slate-300' alt="" />

                    </div>
                </div>

                <div className="Polaroid h-[240px] relative bg-white shadow-md">
                    <div className="disenoItem mx-[6px] absolute top-[6px] left-0 right-0 cursor-pointer overflow-hidden h-[200px] rounded-md">

                        <img src={f28s2} className='w-full h-full object-cover hover:scale-[120%] ease-in-out duration-300 rounded-md bg-slate-300' alt="" />

                    </div>
                </div>

                <div className="Polaroid h-[240px] relative bg-white shadow-md">
                    <div className="disenoItem mx-[6px] absolute top-[6px] left-0 right-0 cursor-pointer overflow-hidden h-[200px] rounded-md">

                        <img src={f28s3} className='w-full h-full object-cover hover:scale-[120%] ease-in-out duration-300 rounded-md bg-slate-300' alt="" />

                    </div>
                </div>

                <div className="Polaroid h-[240px] relative bg-white shadow-md">
                    <div className="disenoItem mx-[6px] absolute top-[6px] left-0 right-0 cursor-pointer overflow-hidden h-[200px] rounded-md">

                        <img src={f28s4} className='w-full h-full object-cover hover:scale-[120%] ease-in-out duration-300 rounded-md bg-slate-300' alt="" />

                    </div>
                </div>

                <div className="Polaroid h-[240px] relative bg-white shadow-md">
                    <div className="disenoItem mx-[6px] absolute top-[6px] left-0 right-0 cursor-pointer overflow-hidden h-[200px] rounded-md">

                        <img src={f28s5} className='w-full h-full object-cover hover:scale-[120%] ease-in-out duration-300 rounded-md bg-slate-300' alt="" />

                    </div>
                </div>


                <div className="Polaroid h-[240px] relative bg-white shadow-md">
                    <div className="disenoItem mx-[6px] absolute top-[6px] left-0 right-0 cursor-pointer overflow-hidden h-[200px] rounded-md">

                        <img src={f28s6} className='w-full h-full object-cover hover:scale-[120%] ease-in-out duration-300 rounded-md bg-slate-300' alt="" />

                    </div>
                </div>

                <div className="Polaroid h-[240px] relative bg-white shadow-md">
                    <div className="disenoItem mx-[6px] absolute top-[6px] left-0 right-0 cursor-pointer overflow-hidden h-[200px] rounded-md">

                        <img src={f28s7} className='w-full h-full object-cover hover:scale-[120%] ease-in-out duration-300 rounded-md bg-slate-300' alt="" />

                    </div>
                </div>

                <div className="Polaroid h-[240px] relative bg-white shadow-md">
                    <div className="disenoItem mx-[6px] absolute top-[6px] left-0 right-0 cursor-pointer overflow-hidden h-[200px] rounded-md">

                        <img src={f28s8} className='w-full h-full object-cover hover:scale-[120%] ease-in-out duration-300 rounded-md bg-slate-300' alt="" />

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Santo