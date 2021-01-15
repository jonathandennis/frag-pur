import React, { /* useEffect, */ useState } from 'react'
import StoneFilter from '../StoneFilter/StoneFilter'
import Stone from '../Stone/Stone'

import './StoneDisplay.css'

const StoneDisplay = ( stones ) => {
/*   const [checkedType, setCheckedType] = useState([])
  const [checkedColor, setCheckedColor] = useState([])
  //const [stonesToShow, setStonesToShow] = useState(stones)   // for useEffect
    console.log('stones in StoneDisplay: ', stones)
    //console.log('stonesToShow in Display: ', stonesToShow)  // for useEffect
    console.log('checkedType in StoneDisplay: ', checkedType)
    console.log('checkedColor in StoneDisplay: ', checkedColor)
  
  ///// This is code I am trying to filter stones conditionally without instance of state. /////

  const stonesToShow = (checkedType === {} && checkedColor === {}) // (checkedType.length === 0 && checkedColor.length === 0) tried this too, but had difficulty with length and current setup..
  ? stones 
  : stones.filter(item => item.type === checkedType && item.color === checkedColor) // need to figure what is wrond with this filter

  //stones.filter((item) => true) // Use this filter to 'override' filter to show rendering functions work.

  console.log('checkedType.length: ', checkedType.length) // attempt to try and use .length for initial statement for conditional
  console.log('checkedColor.length: ', checkedColor.length)// i.e. (checkedType.length === 0 && checkedColor.length === 0) ? ..

  ///// This code I'm trying to filter stones using state/useEffect that has been recommended. /////

  // useEffect(() => {
  //   setStonesToShow(currentStones => {
  //     console.log('currentStones in useEffect: ', currentStones)

  //     return currentStones.filter((item) => true); // Use this filter to 'override' filter to show rendering functions work.
      
  //     //return currentStones.filter(item => item.type === checkedType && item.color === checkedColor) // Need to fix this
  //   })
  // }, [checkedType, checkedColor])
   */
  return (
    <section className="stone">
      <StoneFilter
      stones={stones}
        /* checkedType={checkedType}
        setCheckedType={setCheckedType}
        checkedColor={checkedColor}
        setCheckedColor={setCheckedColor} */
      />
      {/* <div className="stone__carousel">
        {stonesToShow.map((stone) =>
          <Stone
          key={stone.id}
          stone={stone}
          />
        )}
      </div> */}
    </section>
  )
}

export default StoneDisplay