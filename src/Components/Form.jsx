import React from 'react';
import { useForm } from 'react-hook-form';

function Form({handleFormSubmitData}) {
    const {register, handleSubmit,reset} = useForm();
    const handleFormSubmit =(data) => {
      handleFormSubmitData(data);
      reset();
    }

  return (
    <div className='mt-10 flex gap-10 justify-center'>
      <form className='flex gap-4' onSubmit={handleSubmit(handleFormSubmit)}>
        <input {...register('name')}
          type="text"
          placeholder="Name"
          className='rounded-md px-2 py-1 text-base font-semibold outline-none bg-white'
        />
        <input {...register('email')}
          type="text"
          placeholder="Email"
          className='rounded-md px-2 py-1 text-base font-semibold outline-none bg-white'
        />
        <input {...register('image')}
          type="text"
          placeholder="image URL"
          className='rounded-md px-2 py-1 text-base font-semibold outline-none bg-white'
        />
        <input
          type="submit"
          className='rounded-md px-5 py-1 bg-blue-500 text-white font-semibold cursor-pointer'
        />
      </form>
    </div>
  );
}

export default Form;
