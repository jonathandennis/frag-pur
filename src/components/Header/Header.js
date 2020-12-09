import React from 'react'
import './Header.css'

const Header = () => {

    return (
            <header>
                  <div>
                    <img src={`${process.env.PUBLIC_URL}/assets/img/FP-13.png`} className="headerLogo" alt="Fragment Pur logo"/>
                  </div>
            </header>
    )
}

export default Header