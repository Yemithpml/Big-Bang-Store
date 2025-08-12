import React from 'react'
import Navbar from './Navbar'
import cover from '../assets/images/cover.png'

const Home = () => {
  return (
    <div className='relative bg-[#b378e6] w-screen h-screen overflow-hidden' >
      <Navbar />
      <div className='absolute top-70 left-30 text-center'>
        <h1 className='text-[#a164a4] font-black text-6xl pb-1.5'>THE BIG <br /><span className='text-white'>BANGGG STORE</span></h1>
        <p className='text-white pb-5'>Every Headphone you can think of!.</p>
        <button className='bg-[#a164a4] text-white font-medium p-2 px-5 rounded-2xl'><a href="#popular">Shop Now!</a></button>
      </div>
      <div>
        <img src={cover} alt="Home-img" className="absolute bottom-0 right-0 h-9/12  max-w-full max-h-full object-contain"/>
      </div>
    </div>
  )
}

export default Home
