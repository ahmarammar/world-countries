import React from 'react'
import { AiOutlineSearch } from "react-icons/ai"

const Input = ({setCountries, data}) => {
  let assumableData = data;
  const handleInput = (e) => {
    if(e.target.value === ""){
      setCountries(data);
    }
    if(e.target.value !== ""){
      setCountries(assumableData.filter((country) => {
        return country.name.toLowerCase().replace(/\s/g,"").includes((e.target.value).toLowerCase().replace(/\s/g,"")) === true;
      }))
    }
  }
  return (
    <>
    <div className='flex items-center gap-8 border py-4 px-8 drop-shadow-md rounded-md border-gray-100 bg-white max-w-md'>
      <AiOutlineSearch className='text-3xl text-gray-400'/>
      <input type="text" className='w-full outline-none text-base font-medium placeholder:text-gray-400' placeholder='Search for a country...' onChange={handleInput} />
    </div>
    </>
  )
}

export default Input