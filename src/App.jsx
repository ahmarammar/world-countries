import React, { useState } from 'react'
import Header from './components/Header'
import Input from './components/Input'
import MainView from './components/MainView'
import data from "./data/data.json"


const App = () => {
  const [countries, setCountries] = useState(data);
  return (
    <>
      <div className='w-full'>
        <Header />
        <main className='p-8'>
          <Input />
          <MainView countries={countries}/>
        </main>
      </div>
    </>
  )
}

export default App