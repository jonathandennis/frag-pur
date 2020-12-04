import React from 'react'
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import About from '../About/About'
import './App.css'

const App = () => {


  return (
    <div className="appContainer">
      <NavBar />
      <Header />
      <About />
    </div>
  )
}

export default App
