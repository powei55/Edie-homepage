import React from 'react'
import HeroImage from '../assets/images/heroImage.jpg'

const Hero = () => {
  return (
    <div className='w-full  pt-[5em] flex flex-col px-10 items-center  '>
        <div className=''> 
            <div className='lg:pl-[17em]'>
                <p className='text-[#2D9CDB] text-[.8rem] pb-2 '>Unhappy   with your website?</p>

                <div className='mb-4 '>
                  <span className='block text-[1.5rem] font-semi-bold'>We create beautiful</span>
                  <span className='block text-[1.5rem] font-semi-bold'>and fast web services</span>
                </div>

            </div>
            
            <img className='pb-5 object-cover w-ful h-full   rounded' src={HeroImage} alt="hero" />
        </div>

        <div  className='lg:pl-[17em]'>
            <div className=''>
              <span  className='block text-[1.5rem] font-semi-bold'>Story, emotion</span>
              <span  className='block text-[1.5rem] font-semi-bold'>purpose</span>
            </div>
             
          <p className='text-[.8rem] tracking-wider font-[400] py-5 lg:w-[40%]'>We help transform your ideas into real world applications that will outperform your toughest competition and help you achieve your strategic goals in short period of time.</p>

          <div>
              <form action="">
                  <label htmlFor="email" className='text-[.8rem]'>Want us to contact you?</label><br />
                  <div className='flex items-center'>
                  <input className='rounded-[.8rem] border  p-2 px-7 mt-2 bg-[#F2F2F2]' type="email" id='email' placeholder='Email' />
                      <button className='absolute ml-[14em] rounded-[.8em] mt-2'>Join</button>
                  </div>
              </form>
          </div>
      </div>
    </div>
  )
}

export default Hero
