import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Nav() {
  return (
     <nav className='mt-10 flex justify-center gap-10'>
      <NavLink 
      style={(e)=>{
        return{
          color : e.isActive ? "tomato" : "",
          fontWeight : e.isActive ? "bold" : "",
        };
      }} 
      to="/" className="">Home</NavLink>
      <NavLink 
      style={(e)=>{
        return{
          color : e.isActive ? "tomato" : "",
          fontWeight : e.isActive ? "bold" : "",
        };
      }}
      to="/user" className="">User</NavLink>
      <NavLink 
      style={(e)=>{
        return{
          color : e.isActive ? "tomato" : "",
          fontWeight : e.isActive ? "bold" : "",

        };
      }}
      to="/about" className="">About</NavLink>
      
    </nav>
  )
}

export default Nav