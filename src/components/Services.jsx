import React from 'react'
import { data } from '../data';


const Services = () => {
  return (
    <section id='services' className='pt-20  w-full px-10 md:px-[5em] md:max-w-[1000px] lg:mx-[7em]  '>
            <div className='mb-[1em] md:ml-[1em] lg:ml-0'>
                <span className='block text-[1.5rem] font-semi-bold'>We offer high </span>
                <span className='block text-[1.5rem] font-semi-bold'>demand services</span>
            </div>

        <div className='flex flex-col md:flex-row  '>
            {data.map(item => {
                const {id, job, info, Icon,  } = item 

                return (
                    <div key={id} className='lg:mr-10 flex flex-col   bg-white/20 rounded-[24px] shadow-lg p-[3em] transition duration-0 hover:duration-150  '>
                
                        <div className='bg-[#27AE60] self-start p-2 rounded-[5px] text-white mb-5'>
                            <Icon/>
                        </div>
                        
                        <div>
                            <h1 className='text-[1rem] font-bold text[#333333] lg:text-[.6rem] mb-5 '>{job}</h1>
                            <p className='font-semi-bold text-[.7rem] leading-[1.5em] mb-5 '>{info}</p>
                            <button className='rounded-md text-[.5rem] hover:bg-[#E0E0E0] hover:text-[#828282]'>Get started</button>
                        </div>
                    </div>        
                )
            })}
           
        </div>

       
    </section>
  )
}

export default Services
