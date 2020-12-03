import React from 'react'

const NavBar = () => {
    
    const navStyle = {
      backgroundColor: '#666666',
      height: '4.5rem',
      width: '100%',
      padding: '.8rem',
      overflow: 'hidden'
    }

    const listStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      listStyleType: 'none'
    }

    const itemStyle = {
      transition: 'all .2s',
      fontFamily: 'Galvji',
      listStyleType: 'none'
    }

    const linkStyle = {
        fontSize: '1.8rem',
        textTransform: 'uppercase',
        color: '#bcbcbc',
    }

    return (
        <nav style={navStyle}>
          <ul style={listStyle}>
            <li style={itemStyle}><a href="#post1" style={linkStyle}>Start</a></li>
            <li style={itemStyle}><a href="#post2" style={linkStyle}>About Us</a></li>
            <li style={itemStyle}><a href="#post3" style={linkStyle}>News</a></li>
            <li style={itemStyle}><a href="#post4" style={linkStyle}>Contact</a></li>
          </ul>
        </nav>
    )
}

export default NavBar