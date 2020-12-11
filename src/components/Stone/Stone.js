import React from 'react'

import './Stone.css'

const Stone = () => {

    return (
        <div className="stone__display">
            <figure className="stone__card">
                <img className="stone__img"
                    src={`${process.env.PUBLIC_URL}/assets/img/stone/BiancoSivec1.jpg`}
                    alt="BiancoSivec"
                />
                <h3 className="stone__card-head">Bianco Sivec</h3>
                <p className="stone__card-type">Marbre</p>
            </figure>
            <figure className="stone__card">
                <img className="stone__img"
                    src={`${process.env.PUBLIC_URL}/assets/img/stone/FantasyWhite1.jpg`}
                    alt="Fantasy White"
                />
                <h3 className="stone__card-head">Fantasy White</h3>
                <p className="stone__card-type">Marbre</p>
            </figure>
            <figure className="stone__card">
                <img className="stone__img"
                    src={`${process.env.PUBLIC_URL}/assets/img/stone/ImperialWhite1.jpg`}
                    alt="Imperial White" />
                <h3 className="stone__card-head">Imperial White</h3>
                <p className="stone__card-type">Marbre</p>
            </figure>
            <figure className="stone__card">
                <img className="stone__img"
                    src={`${process.env.PUBLIC_URL}/assets/img/stone/Infinito1.jpg`}
                    alt="Infinito" />
                <h3 className="stone__card-head">Infinito</h3>
                <p className="stone__card-type">Marbre</p>
            </figure>
        </div>
    )
}

export default Stone