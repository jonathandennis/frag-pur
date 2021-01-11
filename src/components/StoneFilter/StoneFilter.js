import React from 'react'
import StoneFilterListItem from '../StoneFilterListItem/StoneFilterListItem'
import checkboxesType from './checkboxesType'
import checkboxesColor from './checkboxesColor'

import './StoneFilter.css'

const StoneFilter = ({ stoneType, setStoneType, stoneColor, setStoneColor }) => {


  const handleTypeChange = event => {
    setStoneType({
      ...stoneType,
      [event.target.value]: event.target.checked
    })
    console.log('checked types: ', stoneType)
  }

  const handleColorChange = event => {
    setStoneColor({
      ...stoneColor,
      [event.target.value]: event.target.checked
    })
    console.log('checked colors: ', stoneColor)
  }


    return (
        <div className="stone__nav">
            <h2 className="stone__nav-head">Type</h2>
            <div className="stone__nav-list">
              {checkboxesType.map(item => (
                <label className="stone__nav-var" key={item.key}>
                  {item.value}
                  <StoneFilterListItem
                    id={item.id}
                    name={item.name}
                    value={item.value}
                    checked={stoneType[item.value]}
                    onChange={handleTypeChange}
                  />
                  <span className="checkmark"></span>
                </label>
              ))}
            </div>
            <h2 className="stone__nav-head">Couleur</h2>
            <div className="stone__nav-list">
              {checkboxesColor.map(item => (
                <label className="stone__nav-var" key={item.key}>
                  {item.value}
                  <StoneFilterListItem
                    id={item.id}
                    name={item.name}
                    value={item.value}
                    checked={stoneColor[item.value]}
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