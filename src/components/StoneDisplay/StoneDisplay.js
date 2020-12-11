import React from 'react'
import StoneFilter from '../StoneFilter/StoneFilter'
import Stone from '../Stone/Stone'

import '../Stone/Stone.css'

const StoneDisplay = ({ stones }) => {
  
    return (
        <section className="stone">
          <StoneFilter />,
          <Stone stones={stones} />
        </section>
    )
}

    export default StoneDisplay