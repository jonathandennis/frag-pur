import React from 'react'
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import About from '../About/About'
import Stone from '../Stone/Stone'
import './App.css'

const App = () => {


  return (
    <div className="appContainer">
      <NavBar />
      <Header />
      <About />
      <Stone />
    </div>
  )
}

export default App
