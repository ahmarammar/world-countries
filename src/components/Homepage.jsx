import React from 'react'
import { useState } from 'react'
import Input from './Input'
import MainView from './MainView'
import data from "../data/data.json"
import Category from './Category'


const Homepage = () => {
  const [countries, setCountries] = useState(data); 

  return (
    <>
      <div className='w-full'>
        <main className='p-8 lg:p-12'>
          <div className='flex flex-col lg:flex-row lg:justify-between gap-14'>
            <Input setCountries={setCountries} countries={countries} data={data} />
            <Category countries={countries} setCountries={setCountries} />
          </div>
          <MainView countries={countries}/>
        </main>
      </div>
    </>
  )
}

export default Homepage