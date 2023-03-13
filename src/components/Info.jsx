import React from 'react'
import Edie from '../assets/images/person4.png'

const Info = () => {
  return (
    <section className='flex flex-col pt-20  w-full px-10 md:px-[5em] md:max-w-[1000px] lg:mx-[7em]'>
          <div className='pb-5'>
                <p className='font-bold text-[1rem] md:w-[50%] text-[#333333]'>
                    “Fast and outstanding resutls. Edie understands their customer’s needs. They have a young and talented team.”    
                </p>
          </div>

          <div className='flex'>
             <img className='w-[4em] object-cover rounded-[5px]' src={Edie} alt="" />
            <div className='ml-4'>
                <h2 className='text-[#333333]'>Carlos Tran</h2>
                <span className='#828282 text-sm'>The Decorate Gatsby</span>
            </div>
          </div>
    </section>
  )
}

export default Info
