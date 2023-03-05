import React from 'react'
import { AiOutlineSearch } from "react-icons/ai"
import { motion } from 'framer-motion';

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
    <motion.div 
    initial={{x: "-100vw"}} 
    animate={{ x: 0 }}
    transition={{ delay: 0.2, type: "spring", stiffness: 120 }} 
    className='flex items-center gap-8 border py-4 px-8 drop-shadow-md rounded-md border-gray-100 bg-white max-w-lg'
    >
      <AiOutlineSearch className='text-3xl text-gray-400'/>
      <input type="text" className='w-full outline-none text-base font-medium placeholder:text-gray-400' placeholder='Search for a country...' onChange={handleInput} />
    </motion.div>
    </>
  )
}

export default Input