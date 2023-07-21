import React from 'react'
import { MdContacts, MdDesignServices, MdHome, MdPhotoCamera, MdSchool, MdWeb } from 'react-icons/md'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'



export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }
  return (
    <div className="navbar work-sans bg-transparent fixed top-0 px-5 lg:px-36 2xl:px-[400px] z-50">
      <div className="navbar-start">
        <a className="text-lg font-medium text-slate-300 hover:text-slate-600" href="#">
          adriGraphics
        </a>
      </div>
      <div className="navbar-end">

      <button className="btn btn-circle text-slate-300 hover:text-slate-600 border-none bg-slate-300/[.25] hover:bg-slate-200" onClick={toggleDrawer}>
          <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

        </button>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction='right'
          className='p-6'
        >
          <button className="btn btn-circle" onClick={toggleDrawer}>
            {/* close icon */}
            <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>


          </button>
          <ul className="text-xl medium flex flex-col gap-5 underline-offset-8 pt-[50%]">
            <li>
              <a href="#" className="hover:underline flex items-center gap-2 cursor-pointer">
                <MdHome className="text-[#8B74D3]"/> Inicio
              </a>
            </li>
            <li>
              <a href="#web" className="hover:underline flex items-center gap-2 cursor-pointer">
                <MdWeb className="text-[#8B74D3]"/> Diseño Web
              </a>
            </li>
            <li>
              <a href="#diseno" className="hover:underline flex items-center gap-2 cursor-pointer">
                <MdDesignServices className="text-[#8B74D3]"/>Diseño Gráfico
              </a>
            </li>
            <li>
              <a href="#fotografia" className="hover:underline flex items-center gap-2 cursor-pointer">
                <MdPhotoCamera className="text-[#8B74D3]"/>Fotografía
              </a>
            </li>
            <li>
              <a href="#licencias" className="hover:underline flex items-center gap-2 cursor-pointer">
                <MdSchool  className="text-[#8B74D3] text-3xl"/>Licencias y Certificaciones
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:underline flex items-center gap-2 cursor-pointer">
                <MdContacts  className="text-[#8B74D3] text-xl"/>Contacto
              </a>
            </li>
          </ul>
        </Drawer>

      </div>
    </div>
  )
}
