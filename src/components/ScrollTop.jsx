import React from 'react'
import {MdArrowDropUp} from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const ScrollTop = () => {
  return (
    <div>
    <a href="#inicio">
        <button
            data-aos="fade-up"
            className=' btn btn-circle btn-md text-4xl text-slate-400 m-3 flex fixed  z-40 bottom-5 right-5'>
            <MdArrowDropUp />
        </button>
    </a>
</div>
  )
}

export default ScrollTop