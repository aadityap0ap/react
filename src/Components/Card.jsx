import React from 'react'

function Card() {
  return (
    <div className='w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2'>
      <div className='image w-[3vw] h-[3vw] rounded-full bg-zinc-200 overflow-hidden'>
        <img src="" alt="" className='w-full h-full object-cover' />
      </div>
      <h1 className='mt-1 text-xl font-semibold'>Aditya</h1>
      <h4 className='opacity-40 text-xs font-semibold'>aditya@gmail.com</h4>
      <p className='mt-1 text-center text-xs font-semibold leading-none tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla qui quasi eveniet.</p>
      <button className='mt-4 px-3 py-1 bg-red-700 text-xs rounded-md font-semibold text-white'>Remove it</button>
    </div>
  )
}

export default Card