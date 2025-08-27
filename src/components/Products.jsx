import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import popular from '../assets/images/popular.png';
import newarr from '../assets/images/newarr.png';

import deals from '../assets/images/BestDeals.png';
import { useNavigate } from 'react-router-dom';


const Products = () => {
  const navigate = useNavigate();
  return (
    <section id='products' className='min-h-screen overflow-hidden p-6 bg-gray-100'>
      <div className='text-center mt-5 mb-10'>
        <h3 className='text-2xl lg:text-4xl font-bold text-gray-800'>
          What are you looking for?
        </h3>
      </div>
      <div className='flex-col lg:flex-row flex justify-center items-center gap-10 mb-10'>
        <div className='bg-[#e29dfc] flex flex-col justify-center items-center gap-3 border p-5  hover:shadow-lg transition-shadow duration-300'>
          <h2 className='font-semibold text-2xl'>Popular</h2>
          <img src={popular} alt="poular headphones" className='h-[200px] w-[350px]'/>
          <button 
            onClick={() => navigate('/popular')}
            className='flex items-center gap-2 border border-black rounded px-4 py-2 hover:bg-[#c02df5] transition'
           >
           <span>Explore All</span>
           <ArrowRightIcon className='h-5 w-5' />
          </button>
        </div>
        <div className='bg-[#affab3] flex flex-col justify-center items-center gap-3 border p-5  hover:shadow-lg transition-shadow duration-300'>
          <h2 className='font-semibold text-2xl'>New Arrivals</h2>
          <img src={deals} alt="poular headphones" className='h-[200px] w-[350px]'/>
          <button 
            onClick={() => navigate('/new')}
            className='flex items-center gap-2 border border-black rounded px-4 py-2 hover:bg-[#65ec6c] transition'
           >
           <span>Explore All</span>
           <ArrowRightIcon className='h-5 w-5' />
          </button>
        </div>
        <div className='bg-[#faf49d] flex flex-col justify-center items-center gap-3 border p-5  hover:shadow-lg transition-shadow duration-300'>
          <h2 className='font-semibold text-2xl'>Best Deals</h2>
          <img src={newarr} alt="poular headphones" className='h-[200px] w-[350px]'/>
          <button 
            onClick={() => navigate('/deals')}
            className='flex items-center gap-2 border border-black rounded px-4 py-2 hover:bg-[#ebe248] transition'
           >
           <span>Explore All</span>
           <ArrowRightIcon className='h-5 w-5' />
          </button> 
        </div>
        
      </div>

    </section>
  )
}

export default Products