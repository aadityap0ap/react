import React, {  useState } from 'react'

function App() {
     const[val, setVal] = useState({name: "",age: ""});

     const handleSubmit =(event)=>{
      event.preventDefault();
      console.log(val);
     }

    return (
      <div className="">
   <form action="" onSubmit={handleSubmit}>
    <input onChange={(event)=>setVal({...val,name:event.currentTarget.value})}  placeholder='name' type="text" />
    <input onChange={(event)=>setVal({...val,age:event.currentTarget.value})} placeholder='age' type="text" />
    <input type="submit" />
   </form>
   </div>
  )
}

export default App