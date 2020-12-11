import React/* , { useState, useEffect } */ from 'react'
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import About from '../About/About'
import StoneDisplay from '../StoneDisplay/StoneDisplay'
import Contact from '../Contact/Contact'
//import stoneService from '../../services/stones'

import './App.css'

const App = () => {
  // const [stones, setStones] = useState([])

  // useEffect(() => {
  //   stoneService
  //     .getAll()
  //     .then(initialStones => {
  //       setStones(initialStones)
  //     })
  // }, [])

  return (
    <div className="appContainer">
      <Header />
      <NavBar />
      <About />
      <StoneDisplay /* stones={stones} */ />
      <Contact />
    </div>
  )
}

export default App
