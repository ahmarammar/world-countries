import { useState } from 'react'
import { Route, Routes } from 'react-router'
import CountryPage from './components/CountryPage'
import Header from './components/Header'
import Homepage from './components/Homepage'

const App = () => {
  const [country, setCountry] = useState([]);
  return (
    <Routes>
      <Route path='/' element={<Homepage setCountry={setCountry} />} />
      <Route path={country.numericCode} element={<>
        <Header />
        <CountryPage country={country} />
      </>} />
    </Routes>
  )
}

export default App