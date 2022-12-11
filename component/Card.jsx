import React from 'react'
import StarLogo from '../src/assets/star.png'
function Card(props) {
    const {coverImg, stats:{rating, reviewCount}, 
            location, title, price, openSpots} = props
     let badgeText
    if (openSpots === 0) {
       badgeText = "SOLD OUT"
    }else if (location === "Online"){
        badgeText = "ONLINE"
    }
  return (
    <div className='py-2.5 px-5 text-gray-200 relative'>
        <img src={`./src/assets/${coverImg}`} className='rounded-lg max-w-full' />
        <div className='flex mt-2 font-bold items-center md:text-sm'>
            <img src={StarLogo} alt="" />
            <span className='ml-1'>{rating}</span>
            <span>({reviewCount})</span>
            <span className='ml-1'>.{location}</span>
        </div>
        <p className='mt-6 tracking-tight text-md text-gray-200'>{title}</p>
        <p className='mt-3 text-sm'><span className='font-bold'>From ${price}</span> / person</p>
        {badgeText && <div className="bg-white text-black font-bold py-1 text-center absolute top-4 rounded-sm px-2">{badgeText}</div>}
    </div>
  )
}

export default Card