import React from 'react'
import Card from './shared/Card'

const MainView = ({countries}) => {
  return (
    <>
      <section className='py-12 px-4 grid grid-cols-1 gap-14'>
        {countries.map((country) => {
          return <Card key={country.numericCode} countryName={country.name} countryFlag={country.flags.svg} countryCapital={country.capital} countryPopulation={country.population} countryRegion={country.region} />
        })}
      </section>
    </>
  )
}

export default MainView