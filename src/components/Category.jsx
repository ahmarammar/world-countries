import React, { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md" 
import data from "../data/data.json"

const Category = ({ setCountries}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChoice = (e) => {
    setMenuOpen(false);
    setCountries(data.filter((country) => {
      return country.region === e.target.innerText;
    }));
  }

  return (
    <>
      <div className='relative'>
        <div className='flex items-center gap-8 border py-4 pl-8 pr-6 drop-shadow-md rounded-md border-gray-100 bg-white max-w-[14.9rem] lg:max-w-none'
        onClick={() => menuOpen === true ? setMenuOpen(false) : setMenuOpen(true)}
        >
          <p className='text-lg select-none'>Filter by Region</p>
          <MdKeyboardArrowDown className='text-2xl mt-1 cursor-pointer'/>
        </div>
        {menuOpen && <ul className='flex flex-col mt-2 gap-3 text-gray-800 border py-6 pl-8 pr-6 drop-shadow-md rounded-md border-gray-100 bg-white max-w-[14.9rem] w-[14.9rem] absolute z-20'>
          <li className='select-none cursor-pointer hover:text-gray-600 transition-all' onClick={handleChoice}>Africa</li>
          <li className='select-none cursor-pointer hover:text-gray-600 transition-all' onClick={handleChoice}>Americas</li>
          <li className='select-none cursor-pointer hover:text-gray-600 transition-all' onClick={handleChoice}>Asia</li>
          <li className='select-none cursor-pointer hover:text-gray-600 transition-all' onClick={handleChoice}>Europe</li>
          <li className='select-none cursor-pointer hover:text-gray-600 transition-all' onClick={handleChoice}>Oceania</li>
        </ul>}
      </div>
    </>
  )
}

export default Category