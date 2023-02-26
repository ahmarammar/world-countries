import React from 'react'
import { AiOutlineSearch } from "react-icons/ai"

const Input = () => {
  return (
    <>
    <div className='flex items-center gap-8 border py-4 px-8 drop-shadow-md rounded-md border-gray-100 bg-white'>
      <AiOutlineSearch className='text-3xl text-gray-400'/>
      <input type="text" className='w-full outline-none text-base font-medium placeholder:text-gray-400' placeholder='Search for a country...' />
    </div>
    </>
  )
}

export default Input