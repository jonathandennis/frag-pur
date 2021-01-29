import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'

import './navbar.css'

const NavBar = () => {

  useEffect(() => {
    window.onscroll = function() {myFunction()}
            
      const nav = document.querySelector(".nav")
      const sticky = nav.offsetTop
            
      function myFunction() {
        if (window.pageYOffset >= sticky) {
          nav.classList.add("sticky")
        } else {
          nav.classList.remove("sticky")
        }
      }
  })

    return (
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item"><a href="#post1" className="nav__link">Start</a></li>
            <Link to="/#about" className="nav__item">About Us</Link>
            <Link to="/#stones" className="nav__item">Stones</Link>
            <Link to="/#contact" className="nav__item">Contact</Link>
          </ul>
        </nav>
    )
}

export default NavBar