import React from 'react'
import ClientOne from '../assets/images/person1.png'
import ClientTwo from '../assets/images/person2.png'
import ClientThree from '../assets/images/person3.png'

const Team = () => {
  return (
    <section id='client' className='flex flex-col lg:items-center lg:justify-center px-10 pt-20 md:max-w-[1000px] md:mx-[5em] lg:flex-row lg:mx-[10em]'>
            <div className='mb-4  '>
                <span className='text-red-600 lg:text-[.7em]'>Meet the team</span>
                <span className='block text-[1.5rem]   font-semi-bold text-[#333333]'> We are chilled </span>
                <span className='block text-[1.5rem] font-semi-bold text-[#333333]'>and a laidback team</span>
                <span  className='block text-[1rem] lg:text-[.7rem] '>Lorem ipsum dolor sit amet,</span>
                <span className='block  text-[1rem] lg:text-[.7rem]'> consectetur adipiscing elit.</span>
            </div>

            <div className='grid grid-cols-2  gap-2 md:mx-[4.5em]  max-w-[300px]'>
                <div className='max-w-[160px] mt-[4em]  '>
                    <img className='object-cover block rounded-[5px] ' src={ClientThree} alt="client team" />
                </div>
                <div className='max-w-[160px] '>
                    <img  className='object-cover block rounded-[5px] ' src={ClientOne} alt="client team" />
                </div>
                <div className='max-w-[160px] col-start-2 mt-[-4em]'>
                    <img className='object-cover block  rounded-[5px]' src={ClientTwo} alt="client team" />
                </div>
                
            </div>
    </section>
  )
}

export default Team


