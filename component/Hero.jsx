import React from 'react'
import PhotoGrid from '../src/assets/photo-grid.png'
function Hero() {
  return (
    <section className='max-w-4xl py-4 px-5 md:py-5 pl-10 md:mx-auto md:mt-4'>
        <img src={PhotoGrid} alt="" className='max-w-full' />
        <h1 className='font-bold text-2xl text-white text-center mt-3 md:text-3xl md:my-7'>Online Experience</h1>
        <p className='md:text-md text-sm mt-3 leading-5 tracking-wide bg-slate-800 rounded-md py-3 px-4 text-slate-100'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home. Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}

export default Hero