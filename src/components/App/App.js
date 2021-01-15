import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import About from '../About/About'
import StoneFilterListItem from '../StoneFilterListItem/StoneFilterListItem'
import Stone from '../Stone/Stone'
import Contact from '../Contact/Contact'
/* import stoneService from '../../services/stones' */
import axios from 'axios'

import './App.css'

const App = () => {
  const [stones, setStones] = useState([])
  const [ filtersType, setFiltersType ] = useState([])

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

  ////////// Filter logic //////////

  useEffect(() => {
    const filterValues = [...new Set([ 'all', ...stones.map(stone => stone.type) ])]
    setFiltersType(filterValues.map((stone, i) => ({ active: false, value: stone, id: i + 1 })))
  }, [ stones ])

  const onFilterTypeChange = ({ target: { checked: active, dataset: { value } } }) => {
    const
      newFilters = filtersType.map(stone => [ stone.value, 'all' ].includes(value) ? { ...stone, active } : stone),
      isAll = newFilters.filter(stone => stone.value !== 'all').every(stone => stone.active)

    newFilters.find(stone => stone.value === 'all').active = isAll

    setFiltersType(newFilters)
  };

  const
    filteredTypes = filtersType.filter(stone => stone.active).map(stone => stone.value),
    filteredStones = stones.filter(stone => filteredTypes.includes(stone.type));

  ////////// END Filter logic //////////

  return (
    <div className="appContainer">
      <Header />
      <NavBar />
      <About />
      {/* <StoneDisplay stones={stones} /> */}
      <div>
      <h2 className="stone__nav-head">Type</h2>
            <div className="stone__nav-list">
              {filtersType.map(n =>
              <StoneFilterListItem
                key={n.id}
                {...n}
                onChange={onFilterTypeChange}
              />)}
                  <span className="checkmark"></span>
              {filteredStones.map(n => 
              <Stone
                stone={n}
                key={n.id}
                {...n}
              />)}
            </div>
      </div>
      <Contact />
    </div>
  )
}

export default App
