import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import About from '../About/About'
import StoneFilter from '../StoneFilter/StoneFilter'
import Contact from '../Contact/Contact'
import stoneService from '../../services/stones'
//import axios from 'axios'

import './App.css'

import { useLocation } from 'react-router-dom'


const App = () => {
  const [stones, setStones] = useState([])
  const { pathname, hash } = useLocation()
  console.log('stones: ', stones)


  useEffect(() => {
    stoneService
    .getAll()
    .then(response => {
      console.log('App response: ', response)
      setStones(response)
      })
  }, [])
  //console.log('render', stones.length, 'stones')

  useEffect(() => {
    // if not a hash link scroll to top
    if(hash===''){
        window.scrollTo(0, 0)
    }
    // else scroll to id
    else{
        setTimeout(
            () => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView();
                }
            },
            0
        );
    }
}, [hash, pathname]) // do this on route change

  return (
    <div className="appContainer">
      <Header />
      {/* <Route exact path="/" component={Header} /> */}
      <NavBar />
      {/* <Route exact path="/" component={About} /> */}
      <About />
      {/* <Route exact path="/">
        <StoneFilter stones={stones} />
      </Route> */}
      <StoneFilter stones={stones} />
      {/* <Route exact path="/" component={Contact} /> */}
      <Contact />
    </div>
  )
}

export default App
