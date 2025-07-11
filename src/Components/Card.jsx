import React from 'react'

function Card({data,handleClick,index}) {
   
  const {image,songName,artistName,added} = data;
   
  return (
    <div className='w-60 bg-zinc-200 p-4 rounded-md flex gap-4 pb-10 relative mt-10'>
      <div className='w-20 h-20 bg-orange-600 rounded-md overflow-hidden'>
        <img src={image} alt="" className='w-full h-full object-cover' />
      </div>
        <div className='whitespace-nowrap'>
          <h3 className='text-xl leading-none font-bold'>{songName}</h3>
          <h6 className='text-sm'>{artistName}</h6>
        </div>
     <button onClick={()=>handleClick(index)} className={`px-4 py-3 whitespace-nowrap ${added === false ? " bg-orange-600" : "bg-teal-500"} absolute bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%] text-white text-xs rounded-full`}>{added === false ? "Add to favourites" : "Added"}</button>
    </div>
  )
}

export default Card;