import React from 'react'

const Ordercard = ({headphone}) => {
  return (
    <div className='flex flex-wrap justify-center gap-6'>

      <div className='bg-white p-10 w-[150px] h-[200px] shadow-lg rounded-3xl hover:scale-105 transition-transform duration-300 ease-in-out'>
        <img src="" alt="" />
        <h2>{headphone.name}</h2>
        <p>{headphone.price}</p>
        <button>🛒</button>
      </div>
    </div>
  )
}

export default Ordercard
