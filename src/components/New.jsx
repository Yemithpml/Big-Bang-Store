import React from 'react'
import Ordercard from './Ordercard';

function New() {
    const popularHeadphones = [
        { id: 1, name: 'JBL 2200', price: '$99'},
        { id: 2, name: 'Sony Prime', price: '$149'},
        { id: 3, name: 'Apple', price: '$199'  },
        { id: 4, name: 'Sony X30', price: '$249' },
        { id: 5, name: 'Samsung Galaxy Buds', price: '$129' },
        { id: 6, name: 'Beats Studio', price: '$299' }];

  return (
    <section id="new" className="min-h-screen overflow-hidden p-6 bg-gray-100">
      <div className='text-center'>
        <h1 className='font-bold text-[#a141a4] text-4xl md:text-5xl mb-10'>NEW ARRIVALS</h1>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {popularHeadphones.map((headphone, index) => (
          headphone && headphone.name && headphone.price ? (
       <Ordercard key={headphone.id || index} headphone={headphone} />
     ) : (
    <div key={index} className="text-red-500">Invalid item</div>
    )
  ))}
      </div>
      
      

    </section>
  );
}

export default New;