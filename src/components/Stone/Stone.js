import React from 'react'

import './Stone.css'

const Stone = ({ stone }) => {
//console.log('stone in Stone: ', stone)

    return (
      <figure className="stone__card">
          <img className="stone__img"
              src={`${process.env.PUBLIC_URL}/${stone.image}`}
              alt={stone.name}
          />
          <h3 className="stone__card-head">{stone.name}</h3>
          <p className="stone__card-type">{stone.type}</p>
      </figure>
    )
}

export default Stone