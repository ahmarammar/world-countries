import React from 'react'
import { useState } from 'react'
import Input from './Input'
import MainView from './MainView'
import data from "../data/data.json"


const Homepage = () => {
  const [countries, setCountries] = useState(data); 

  return (
    <>
      <div className='w-full'>
        <main className='p-8 lg:p-12'>
          <Input setCountries={setCountries} countries={countries} data={data} />
          <MainView countries={countries}/>
        </main>
      </div>
    </>
  )
}

export default Homepage