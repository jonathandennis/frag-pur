import React from 'react'
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import About from '../About/About'
import Stone from '../Stone/Stone'
import Contact from '../Contact/Contact'

import './App.css'

const App = () => {


  return (
    <div className="appContainer">
      <Header />
      <NavBar />
      <About />
      <Stone />
      <Contact />
    </div>
  )
}

export default App
