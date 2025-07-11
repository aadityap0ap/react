import React, { useState } from 'react'
import Card from "./Components/Card";
import Navbar from './Components/Navbar';

function App() {
   
  const data = [
    {image:"https://images.unsplash.com/photo-1743930285895-ce090ae2a115?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D", songName:"Chaplin",artistName:"Super Manikk",added:false},
    {image:"https://images.unsplash.com/photo-1744381582488-b20ab7903239?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D", songName:"Garib Shayar",artistName:"Lush Curry",added:false},
    {image:"https://plus.unsplash.com/premium_photo-1750065466444-7568230896b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D", songName:"Mohbhang",artistName:"Parul Mishra",added:false},
    {image:"https://images.unsplash.com/photo-1750096319146-6310519b5af2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D", songName:"Chitta",artistName:"Manan Bharadwaj",added:false},
    {image:"https://plus.unsplash.com/premium_photo-1687173116184-c972fec1be54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D", songName:"Sanam",artistName:"Ankit Tiwari",added:false},
    {image:"https://plus.unsplash.com/premium_photo-1687173116184-c972fec1be54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D", songName:"Sanam",artistName:"Ankit Tiwari",added:false} 
  ];
  
  const [songData, setSongData]=useState(data);
  const handleClick = (index)=>{
    setSongData((prev)=>{
      return prev.map((item,itemindex)=>{
        if(itemindex === index) return{...item,added: !item.added};
        return item;
      })
    })
  }

  return (
    <>
      <div className='w-full h-screen bg-zinc-300'>
        <Navbar data={songData} />
        <div className='px-20 flex gap-10 mt-10 flex-wrap'>
          {songData.map((obj,index)=>(
            <Card  data={obj} handleClick={handleClick} index={index} key={index} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App;
