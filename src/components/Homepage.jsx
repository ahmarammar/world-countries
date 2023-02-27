import React from 'react'
import { useState } from 'react'
import Header from './Header'
import Input from './Input'
import MainView from './MainView'
import data from "../data/data.json"


const Homepage = ({setCountry}) => {
  const [countries, setCountries] = useState(data); 

  return (
    <>
      <div className='w-full'>
        <Header />
        <main className='p-8'>
          <Input setCountries={setCountries} countries={countries} data={data} />
          <MainView countries={countries} setCountry={setCountry}/>
        </main>
      </div>
    </>
  )
}

export default Homepage