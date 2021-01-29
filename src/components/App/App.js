import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import About from '../About/About'
import StoneFilter from '../StoneFilter/StoneFilter'
import Contact from '../Contact/Contact'
/* import stoneService from '../../services/stones' */
import axios from 'axios'

import './App.css'

import { Route, useLocation } from 'react-router-dom'

const App = () => {
  const [stones, setStones] = useState([])
  const { pathname, hash } = useLocation()


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
      <NavBar />
        <Route exact path="/" component={About} />
        <Route exact path="/">
          <StoneFilter stones={stones} />
        </Route>
        <Route exact path="/" component={Contact} />
    </div>
  )
}

export default App
