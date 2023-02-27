import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({country, setCountry}) => {
  const handleCard = () => {
    setCountry(country);
  }
  return (
    <>
      <Link to={`/${country.numericCode}`} onClick={handleCard}>
        <div className='drop-shadow-md bg-white cursor-pointer hover:scale-105 transition-all'>
            <img src={country.flags.svg} alt="" className='object-cover w-full' />
            <div className='pt-8 pb-12 px-8'>
              <h2 className='font-bold text-2xl'>{country.name}</h2>
              <div className='flex flex-col gap-1 mt-6 text-lg tracking-wide text-gray-400'>
                <p className='text-gray-900'><strong>Population: </strong>{country.population}</p>
                <p className='text-gray-900'><strong>Region: </strong> {country.region}</p>
                <p className='text-gray-900'><strong>Capital: </strong>{country.capital}</p>
              </div>
            </div>
        </div>
      </Link>
    </>
  )
}

export default Card