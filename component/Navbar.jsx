import React from 'react'
import AirbnbLogo from '../src/assets/airbnb-logo.png'
function Navbar() {
  return (
    <nav className='bg-red-100 shadow-lg'>
        <div className='max-w-4xl py-2.5 px-5 md:py-5 pl-10'>
            <img src={AirbnbLogo} alt="Airbnb Logo" className=' h-5 max-w-full md:h-14' />
        </div>
    </nav>
  )
}

export default Navbar
