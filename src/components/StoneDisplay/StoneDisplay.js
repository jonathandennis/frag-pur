import React, { useEffect, useState } from 'react'
import StoneFilter from '../StoneFilter/StoneFilter'
import Stone from '../Stone/Stone'

import './StoneDisplay.css'

const StoneDisplay = ({ stones }) => {
  const [stoneType, setStoneType] = useState({})
  const [stoneColor, setStoneColor] = useState({})
  //const [stonesToShow, setStonesToShow] = useState(stones)
    console.log('stones in StoneDisplay: ', stones)
    //console.log('stonesToShow in Display: ', stonesToShow)
    console.log('stoneType in Display: ', stoneType)
    console.log('stoneColor in Display: ', stoneColor)
  
  ///// This is code I tried to filter stones conditionally without instance of state. /////

  const stonesToShow = (stoneType.checked && stoneColor.checked === false) ?
  stones :
  //stones.filter(item => item.type === stoneType.checked && stoneColor.checked)
  stones.filter((item) => true)
  //console.log('item.type: ', item.type)
  console.log('stoneType.checked: ', stoneType)

  ///// This code I'm trying to filter stones using state. /////

  // useEffect(() => {
  //   setStonesToShow(currentStones => {
  //     console.log('currentStones in useEffect: ', currentStones)

  //     ///// This return statement just to display all/confirm data passing correctly /////
  //     return currentStones.filter((item) => true);

  //     /* **Need to fix the return below to show/filter items according to checkboxes selected**
  //     **I believe I also need a conditional statement that displays all stones when nothing is checked** */
      
  //     //return currentStones.filter(item => item.type === stoneType.checked && stoneColor.checked)
  //   })
  // }, [stoneType.checked, stoneColor.checked])
  
  return (
    <section className="stone">
      <StoneFilter
        stoneType={stoneType}
        setStoneType={setStoneType}
        stoneColor={stoneColor}
        setStoneColor={setStoneColor}
      />
      <div className="stone__carousel">
        {stonesToShow.map((stone) =>
          <Stone
          key={stone.id}
          stone={stone}
          />
        )}
      </div>
    </section>
  )
}

export default StoneDisplay