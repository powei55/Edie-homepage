import React from 'react'
import {
    FaFacebookSquare,
    FaLinkedin,
     FaTwitterSquare 
    } from "react-icons/fa";

const Footer = () => {
  return (
    <section id='contact' className=' text-[#FFFFFF] bg-[#100E1D] mt-20 pt-10 px-5  '>
        <div className='flex flex-col md:flex-row md:justify-around'>
        <ul className='mb-10'>
                <li className='py-2'>
                    <a href="/">Home</a>
                </li>
                
                <li className='py-2'>
                    <a href="/">Service</a>
                </li>
                
                <li className='py-2'>
                    <a href="/">Our work</a>
                </li>
                
                <li className='py-2'>
                    <a href="/">Client</a>
                </li>
                
                <li className='py-2'>
                    <a href="/">Contact</a>
                </li>
                
           </ul>

           <div className='px-4 flex flex-col mb-10'>
                <h2 className='font-bold text-[#F2F2F2] text-[2rem] tracking-wider mb-3'>Edie</h2>
                <div className='flex'>
                    <FaFacebookSquare size={30} className=''/>
                    <FaLinkedin size={30} className='ml-2'/>
                    <FaTwitterSquare size={30} className='ml-2'/>
                </div>
           </div>

           <div className='max-w-[400px] mb-10 '>
              <form action="">
                  <label htmlFor="email" className='text-[.8rem]'>Want us to contact you?</label><br />
                  <div className='flex relative'>
                    <input className=' rounded-[.5rem] w-[15em]  border  p-2 px-7 mt-2 bg-[#F2F2F2]' type="email" id='email' placeholder='Email' />
                    <button className=' rounded-[.5em] mt-2 '>Join</button>
                  </div>
              </form> 
          </div>
           
        </div>
          
            <footer className='text-center text-sm'>created by powei55 - devChallenges.io</footer>
    </section>
  )
}

export default Footer
