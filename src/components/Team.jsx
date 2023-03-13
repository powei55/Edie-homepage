import React from 'react'
import ClientOne from '../assets/images/person1.png'
import ClientTwo from '../assets/images/person2.png'
import ClientThree from '../assets/images/person3.png'

const Team = () => {
  return (
    <section id='client' className='flex flex-col lg:items-center px-10 pt-20 md:max-w-[1000px] md:mx-[5em] lg:flex-row lg:mx-[10em]'>
            <div className='mb-4  '>
                <span className='text-red-600 lg:text-[.7em]'>Meet the team</span>
                <span className='block text-[1.5rem]   font-semi-bold text-[#333333]'> We are chilled </span>
                <span className='block text-[1.5rem] font-semi-bold text-[#333333]'>and a laidback team</span>
                <span  className='block text-[1rem] lg:text-[.7rem] '>Lorem ipsum dolor sit amet,</span>
                <span className='block  text-[1rem] lg:text-[.7rem]'> consectetur adipiscing elit.</span>
            </div>

            <div className='grid grid-cols-2 gap-2 md:mx-[4.5em] '>
                <div className='max-w-[200px]'>
                    <img className='object-cover block mt-[5em] ml-[-.5em]  rounded-[5px] ' src={ClientThree} alt="client team" />
                </div>
                <div className='max-w-[200px]'>
                    <img  className='object-cover block sm:ml-[-.6em]  rounded-[5px] ' src={ClientOne} alt="client team" />
                </div>
                <div className='max-w-[200px]'>
                    <img className='object-cover block ml-[10.6em] mt-[-4.5em] sm:ml-[13em] lg:mt-[-5em] lg:ml-[12.5em] rounded-[5px]' src={ClientTwo} alt="client team" />
                </div>
                
            </div>
    </section>
  )
}

export default Team


