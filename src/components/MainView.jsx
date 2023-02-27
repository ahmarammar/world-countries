import React from 'react'
import Card from './shared/Card'

const MainView = ({countries,setCountry}) => {
  return (
    <>
      <section className='py-16 px-5 grid grid-cols-1 gap-16'>
        {countries.map((country) => {
          return <Card key={country.numericCode} country={country} setCountry={setCountry} />
        })}
      </section>
    </>
  )
}

export default MainView