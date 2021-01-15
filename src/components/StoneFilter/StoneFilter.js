import React, { useEffect, useState } from 'react'
import StoneFilterListItem from '../StoneFilterListItem/StoneFilterListItem'
import Stone from '../Stone/Stone'
import checkboxesType from './checkboxesType'
import checkboxesColor from './checkboxesColor'

import './StoneFilter.css'

const StoneFilter = ( stones, setCheckedColor, checkedColor ) => {
  console.log('stones in StoneFilter: ', stones)
  const [ filtersType, setFiltersType ] = useState([])

  useEffect(() => {
    const filterValues = [...new Set([ 'all', ...stones.map(n => n.type) ])]
    setFiltersType(filterValues.map((n, i) => ({ active: false, value: n, id: i + 1 })))
  }, [ stones ])

  const onFilterTypeChange = ({ target: { checked: active, dataset: { value } } }) => {
    const
      newFilters = filtersType.map(n => [ n.value, 'all' ].includes(value) ? { ...n, active } : n),
      isAll = newFilters.filter(n => n.value !== 'all').every(n => n.active)

    newFilters.find(n => n.value === 'all').active = isAll

    setFiltersType(newFilters)
  };

  const
    filteredTypes = filtersType.filter(n => n.active).map(n => n.value),
    filteredStones = stones.filter(n => filteredTypes.includes(n.type));

  const handleColorChange = event => {
    setCheckedColor({
      ...checkedColor,
      [event.target.value]: event.target.checked
    })
  }


    return (
        <div className="stone__nav">
            <h2 className="stone__nav-head">Type</h2>
            <div className="stone__nav-list">
              {filtersType.map(n =>
              <StoneFilterListItem
                key={n.id}
                {...n}
                onChange={onFilterTypeChange}
              />)}
                  <span className="checkmark"></span>
              )
              {filteredStones.map(n => 
              <Stone
                key={n.id}
                {...n}
              />)}
            </div>
            <h2 className="stone__nav-head">Couleur</h2>
            <div className="stone__nav-list">
              {checkboxesColor.map(item => (
                <label className="stone__nav-var" key={item.key}>
                  {item.value}
                  <StoneFilterListItem
                    id={item.id}
                    value={item.value}
                    checked={checkedColor[item.value]}
                    onChange={handleColorChange}
                  />
                  <span className="checkmark"></span>
                </label>
              ))}
            </div>
        </div>
    )
}

export default StoneFilter