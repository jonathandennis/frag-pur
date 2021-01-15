import React, { useEffect } from 'react'

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
            <li className="nav__item"><a href="#post2" className="nav__link">About Us</a></li>
            <li className="nav__item"><a href="#post3" className="nav__link">News</a></li>
            <li className="nav__item"><a href="#post4" className="nav__link">Contact</a></li>
          </ul>
        </nav>
    )
}

export default NavBar