import React from 'react'
import Modal from "./Modal"
import useModal from './useModal'

import './Stone.css'
import './Modal.css'

const Stone = ({ stone }) => {
//console.log('stone in Stone: ', stone)
    const {isShowing, toggle} = useModal()

    return (
      <div>
        <figure className="stone__card" onClick={toggle}>
            <img className="stone__img"
                src={`${process.env.PUBLIC_URL}/${stone.image}`}
                alt={stone.name}
            />
            <h3 className="stone__card-head">{stone.name}</h3>
            <p className="stone__card-type">{stone.type}</p>
        </figure>
        <Modal
          stone={stone}
          isShowing={isShowing}
          hide={toggle}
        />
      </div>
    )
}

export default Stone