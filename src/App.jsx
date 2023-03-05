import { Route, Routes } from 'react-router'
import CountryPage from './components/CountryPage'
import Header from './components/Header'
import Homepage from './components/Homepage'
import data from "./data/data.json"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/:countryID' element={<>
          <CountryPage data={data} />
        </>} />
      </Routes>
    </>
  )
}

export default App