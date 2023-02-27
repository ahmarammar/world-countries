import React from 'react'
import {BiArrowBack} from "react-icons/bi"
import { Link } from 'react-router-dom'

const CountryPage = ({country}) => {
  return (
    <div className='p-8'>
      <Link to={"/"}>
        <button className='flex items-center gap-3 shadow-inner border mb-16 pl-6 pr-8 py-1 hover:scale-105 transition-all'>
          <BiArrowBack className='text-2xl mt-0.5' />
          <span className='text-lg'>Back</span>
        </button>
      </Link>
      <img src={country.flags.svg} alt="" className='rounded-lg' />
      <div>
        <h2 class="text-3xl font-bold tarcking-wide mt-14">{country.name}</h2>
        <ul class="text-gray-700 mt-8 flex flex-col gap-3">
          <li><strong>Native Name:</strong> {country.nativeName}</li>
          <li><strong>Population:</strong> {country.population}</li>
          <li><strong>Region:</strong> {country.region}</li>
          <li><strong>Sub Region:</strong> {country.subregion}</li>
          <li><strong>Capital:</strong> {country.capital}</li>
        </ul>
        <ul class="text-gray-700 mt-14 flex flex-col gap-3">
          <li><strong>Top Level Domain:</strong> {country.topLevelDomain}</li>
          <li><strong>Currencies:</strong> {country.currencies[0].name}</li>
          <li><strong>Languages:</strong> {country.languages[0].name}</li>
          
        </ul>
      </div>
    </div>
  )
}

export default CountryPage