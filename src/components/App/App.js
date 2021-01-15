import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import About from '../About/About'
import StoneFilter from '../StoneFilter/StoneFilter'
import Contact from '../Contact/Contact'
/* import stoneService from '../../services/stones' */
import axios from 'axios'

import './App.css'

const App = () => {
  const [stones, setStones] = useState([])

  useEffect(() => {
    console.log('effect');
    axios
    .get('http://localhost:3001/stones')
    .then(response => {
      console.log('promise fulfilled')
      setStones(response.data)
      })
  }, [])
  console.log('render', stones.length, 'stones')

  return (
    <div className="appContainer">
      <Header />
      <NavBar />
      <About />
      <StoneFilter stones={stones} />
      <Contact />
    </div>
  )
}

export default App
