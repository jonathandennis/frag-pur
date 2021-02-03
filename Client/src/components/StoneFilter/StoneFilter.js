import React, { useEffect, useState } from 'react'
import StoneFilterListItem from '../StoneFilterListItem/StoneFilterListItem'
import Stone from '../Stone/Stone'

import './StoneFilter.css'

const StoneFilter = ({ stones }) => {
  const [ filtersType, setFiltersType ] = useState([])
  const [ filtersColor, setFiltersColor ] = useState([])

  ////////// Filter Type logic //////////
  useEffect(() => {
    const filterValues = [...new Set([ 'all', ...stones.map(stone => stone.type) ])]
    setFiltersType(filterValues.map((stone, i) => ({ active: true, value: stone, id: i + 1 })))
  }, [ stones ])

  const onFilterTypeChange = ({ target: { checked: active, dataset: { value } } }) => {
    const
      newFilters = filtersType.map(stone => [ stone.value, 'all' ].includes(value) ? { ...stone, active } : stone),
      isAll = newFilters.filter(stone => stone.value !== 'all').every(stone => stone.active)

    newFilters.find(stone => stone.value === 'all').active = isAll

    setFiltersType(newFilters)
  }
  ////////// Filter Color logic //////////
  useEffect(() => {
    const filterValues = [...new Set([ 'all', ...stones.map(stone => stone.color) ])]
    setFiltersColor(filterValues.map((stone, i) => ({ active: false, value: stone, id: i + 1 })))
  }, [ stones ])

  const onFilterColorChange = ({ target: { checked: active, dataset: { value } } }) => {
    const
      newFilters = filtersColor.map(stone => [ stone.value, 'all' ].includes(value) ? { ...stone, active } : stone),
      isAll = newFilters.filter(stone => stone.value !== 'all').every(stone => stone.active)

    newFilters.find(stone => stone.value === 'all').active = isAll

    setFiltersColor(newFilters)
  }

  const
  filteredTypes = filtersType.filter(stone => stone.active).map(stone => stone.value),
  filteredColors = filtersColor.filter(stone => stone.active).map(stone => stone.value),
  filteredStones = stones.filter(stone => filteredTypes.includes(stone.type) || filteredColors.includes(stone.color))

    return (
      <section id="stones" className="stone">
        <div className="stone__nav">
            <h2 className="stone__nav-head">Type</h2>
            <div className="stone__nav-list">
              {filtersType.map(stone =>
              <StoneFilterListItem
                key={stone.id}
                {...stone}
                onChange={onFilterTypeChange}
              />)}
                  <span className="checkmark"></span>
            </div>
            <h2 className="stone__nav-head">Couleur</h2>
            <div className="stone__nav-list">
              {filtersColor.map(stone =>
              <StoneFilterListItem
                key={stone.id}
                {...stone}
                onChange={onFilterColorChange}
              />)}
                  <span className="checkmark"></span>
            </div>
        </div>
            <div className="stone__carousel">
              {filteredStones.map(stone => 
              <Stone
                stone={stone}
                key={stone.id}
                {...stone}
              />)}
            </div>
      </section>       
    )
}

export default StoneFilter