import React from 'react'
import './header.css'

import logoMain from '../../assets/img/FP-13.png'

const Header = () => {

    return (
            <header>
                  <div>
                    <img src={logoMain} className="headerLogo" alt="Fragment Pur logo"/>
                  </div>
            </header>
    )
}

export default Header