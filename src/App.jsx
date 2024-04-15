import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Forecast from './Components/Forecast'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Footer from './Components/Footer'

function App() {
  // const apiKey = "5336641a65286fc57c9b2a43889bdde4"
  const navigate = useNavigate()
  const [city, setCity] = useState("")
  const [searchIn, setSearchIn] = useState("")
  // const [cities, setCities] = useState(CityData)
  
  const handleinput = (e) =>{
    setSearchIn(e.target.value)
    console.log(searchIn)

  }
  
  const handlepage = async(name) => {
    setCity(name)
    navigate(`/${name}`)
    
  }

  return (
    <>
      <Header handleinput={handleinput}  />
      <Routes >
        <Route path="/" element={<Hero handlepage={handlepage} searchIn={searchIn}/>} />
        <Route path="/:city" element={<Forecast city={city}/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
