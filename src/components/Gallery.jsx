import React from 'react'
import { gallery } from '../data'
import {HiOutlineArrowNarrowRight}  from "react-icons/hi";

const Gallery = () => {
  return (
    <section id='our-work' className='px-10 pt-20 md:max-w-[1000px] md:mx-[5em] lg:mx-[10em]'>
        <div className=''>
            <div className='mb-4   '>
                <span className='block text-[1.5rem] font-semi-bold'>Good design means </span>
                 <span className='block text-[1.5rem] font-semi-bold'>good business </span>
            </div>

            <div className='grid md:grid-cols-2 gap-4 lg:gap-0 [&>*:nth-child(odd)]:md:mt-[8em]'>
                {gallery.map(item => {
                    const {id, title, img, about} = item 

                    return (
                        <div key={id} className='mb-2 md:max-w-[400px]   '>
                            <img className='object-cover rounded-[.8em] ' src={img} alt={about} />
                            <span className='pt-5 block text-[.7rem] lg:pt-2'>{about}</span>
                            <h3 className='font-bold text-[1rem]'>{title}</h3>
                        </div>
                    )

                })}
                
            </div>
            <div className='flex items-center lg:justify-end text-[#2D9CDB] text-[.8rem] mr-[15em]'>
                    <a href="/">See more</a>
                    <span className='pl-2'>
                        <HiOutlineArrowNarrowRight />
                    </span>
                </div>
        </div>
    </section>
  )
}

export default Gallery
