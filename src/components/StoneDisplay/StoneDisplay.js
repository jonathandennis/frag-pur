import React from 'react'
import StoneFilter from '../StoneFilter/StoneFilter'
import Stone from '../Stone/Stone'

import './StoneDisplay.css'

const StoneDisplay = ({ stones }) => {
    console.log('stones in StoneDisplay: ', stones);
  
    return (
        <section className="stone">
          <StoneFilter />
          <div className="stone__carousel">
            {stones.map((stone) =>
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