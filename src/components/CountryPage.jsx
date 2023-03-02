import React from 'react'
import {BiArrowBack} from "react-icons/bi"
import { Link, useParams } from 'react-router-dom'

const CountryPage = ({data}) => {
  const {countryID} = useParams();
  let country = data.find((country) => country.numericCode === countryID);
  if(country !== undefined){
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
          <h2 className="text-3xl font-bold tarcking-wide mt-14">{country.name}</h2>
          <ul className="text-gray-700 mt-8 flex flex-col gap-3">
            <li><strong>Native Name:</strong> {country.nativeName}</li>
            <li><strong>Population:</strong> {country.population}</li>
            <li><strong>Region:</strong> {country.region}</li>
            <li><strong>Sub Region:</strong> {country.subregion}</li>
            {country.capital && <li><strong>Capital:</strong> {country.capital}</li>}
          </ul>
          <ul className="text-gray-700 mt-14 flex flex-col gap-3">
            <li><strong>Top Level Domain:</strong> {country.topLevelDomain}</li>
            {country.currencies && <li><strong>Currencies:</strong> {country.currencies[0].name}</li>}
            <li><strong>Languages:</strong> {country.languages[0].name}</li>
          </ul>
          {country.borders !== undefined && <div className='mt-10'>
            <h2 className='text-xl font-semibold tracking-wide'>Borders Countries:</h2>
            <ul className='flex flex-wrap gap-4 mt-6'>
            {country.borders.map((b, idX) => {
                return <li key={idX}>
                <Link to={`/${data.find((country) => {
                        return b === country.alpha3Code;
                      }).numericCode}`}>
                  <button className='shadow-inner border px-6 py-1 hover:scale-105 transition-all'>
                    {
                      data.find((country) => {
                        return b === country.alpha3Code;
                      }).name
                    }
                  </button>
                </Link>
              </li>
              })}
            </ul>
          </div>}
        </div>
      </div>
    )
  }else{
    return (
      <>
       <div className='h-[calc(100vh-6.75rem)] flex flex-col gap-16 justify-center items-center'>
          <div className='text-center space-y-6'>
            <h2 className='text-6xl font-bold tracking-wider font-mono'>Error 404</h2>
            <h4 className='uppercase font-semibold font-mono tracking-wide'>Page not Found</h4>
          </div>
          <Link to={"/"}>
            <button className='flex items-center gap-3 shadow-inner border mb-16 pl-6 pr-8 py-1 hover:scale-105 transition-all'>
              <BiArrowBack className='text-2xl mt-0.5' />
              <span className='text-lg'>Back</span>
            </button>
          </Link>
        </div> 
      </>
    )
  }
  
}

export default CountryPage