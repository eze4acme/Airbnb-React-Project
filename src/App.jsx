import React from 'react'
import Card from '../component/Card'
import Hero from '../component/Hero'
import Navbar from '../component/Navbar'
import data from './data'

function App() {
 const cards = data.map((item) =>{
    return <Card key={item.id} {...item}/>
 })
  return (
    <div className='bg-gray-900 h-max'>
      <Navbar />
      <Hero />
      <section className='max-w-4xl md:py-5 px-5 mb-20 sm:flex sm:flex-col sm:items-center md:flex md:flex-row md:pb-40 md:mx-auto'>
        {cards}
      </section>
    </div>
  )
}

export default App