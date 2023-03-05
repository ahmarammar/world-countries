import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({country}) => {
  return (
    <>
      <Link to={`/${country.numericCode}`}>
        <div className='drop-shadow-2xl rounded-lg bg-white cursor-pointer md:hover:scale-105 transition-all h-[28rem] md:h-[32rem] select-none'>
            <img src={country.flags.svg} alt="" className='object-cover h-48 md:h-64 w-full rounded-t-lg' />
            <div className='pt-8 pb-12 px-8'>
              <h2 className='font-bold text-2xl'>{country.name}</h2>
              <div className='flex flex-col gap-1 mt-6 text-lg tracking-wide text-gray-400'>
                <p className='text-gray-900'><strong>Population: </strong>{country.population}</p>
                <p className='text-gray-900'><strong>Region: </strong> {country.region}</p>
                {country.capital && <p className='text-gray-900'><strong>Capital: </strong>{country.capital}</p>}
              </div>
            </div>
        </div>
      </Link>
    </>
  )
}

export default Card