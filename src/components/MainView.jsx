import React from 'react'
import Card from './shared/Card'

const MainView = ({countries}) => {
  return (
    <>
      <section className='py-16 px-5 grid grid-cols-1 md:grid-cols-2 lg:px-0 lg:grid-cols-3 2xl:grid-cols-4 gap-16'>
        {countries.map((country) => {
          return <Card key={country.numericCode} country={country} />
        })}
      </section>
    </>
  )
}

export default MainView