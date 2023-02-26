import React from 'react'

const Card = ({countryName, countryFlag, countryPopulation, countryRegion, countryCapital}) => {
  return (
    <>
      <div className='drop-shadow-md bg-white'>
          <img src={countryFlag} alt="" className='object-cover' />
          <div className='pt-8 pb-12 px-8'>
            <h2 className='font-bold text-2xl'>{countryName}</h2>
            <div className='flex flex-col gap-1 mt-6 text-lg tracking-wide text-gray-400'>
              <p className='text-gray-900'><strong>Population: </strong>{countryPopulation}</p>
              <p className='text-gray-900'><strong>Region: </strong> {countryRegion}</p>
              <p className='text-gray-900'><strong>Capital: </strong>{countryCapital}</p>
            </div>
          </div>
      </div>
    </>
  )
}

export default Card