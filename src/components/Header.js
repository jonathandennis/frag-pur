import React from 'react'

import bgImage from '../img/marblequarry.jpg'
import logoMain from '../img/FP-13.png'

const Header = () => {

    return (
            <header>
                <div
                  class="bg_img"
                  style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    height: '94vh',
                    width: '100%'
                  }}
                >
                  <div class="header__logo">
                    <img src={logoMain} alt="Fragment Pur logo"
                      style={{
                        height: 200,
                        margin: '5% 35%'
                      }}
                    />
                  </div>
                </div>
            </header>
    )
}

export default Header