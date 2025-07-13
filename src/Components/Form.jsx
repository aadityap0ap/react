 import React from 'react';

function Form() {
  return (
    <div className='mt-10 flex gap-10 justify-center'>
      <form className='flex gap-10'>
        <input type="text" placeholder="Name" className='rounded-md px-2 py-1 text-base font-semibold outline-none' />
        <input type="text" placeholder="Email" className='rounded-md px-2 py-1 text-base font-semibold outline-none' />
        <input type="text" placeholder="image URL" className='rounded-md px-2 py-1 text-base font-semibold outline-none' />
        <input type="submit" className='rounded-md px-5 py-1 bg-blue-500 text-white font-semibold '/>
      </form>
    </div>
  );
}

export default Form;
