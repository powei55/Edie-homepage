import React, {useState} from 'react'
import {
  FaBars
} from 'react-icons/fa'

const NavBar = () => {
     const [nav, setNav] = useState(false)

     const handleNav = () => {
        setNav(!nav)
     }

  return (
    <div className='px-10  flex w-full min-h-[50px] justify-between items-center absolute z-10 '>
      
            <h2 className=''>Edie</h2>

              <ul className='hidden sm:flex px-4'>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#our-work">Our work</a>
                  </li>
                  <li>
                    <a href="#client">Client</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
              </ul>

            {/* Harmburger icon */}
            <div onClick={handleNav} className='sm:hidden z-10'>
                  <FaBars size={20} className='  mr-4 cursor-pointer' />
            </div>

            <div onClick={handleNav} className={nav ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col' : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
              <ul className='h-full w-full text-center pt-12'>
                    <li  className='text-2xl py-4'>
                      <a href="/">Home</a>
                    </li>
                    <li className='text-2xl py-4'>
                      <a href="/">Services</a>
                    </li>
                    <li className='text-2xl py-4'>
                      <a href="/">Our work</a>
                    </li>
                    <li className='text-2xl py-4'>
                      <a href="/">Client</a>
                    </li>
                    <li className='text-2xl py-4'>
                      <a href="/">Contact</a>
                    </li>
                </ul>
            </div>

    </div>
  )
}

export default NavBar
