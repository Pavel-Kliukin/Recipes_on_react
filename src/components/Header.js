import React from 'react'
import './Header.css'

const Header = (props) => {
  return <header className="header">
    <h1>It's time to cook!</h1>
    <nav>
      <ul>
        <li>{props.home}</li>
        <li>{props.recipes}</li>
        <li>{props.add}</li>
      </ul>
    </nav>
  </header>
}

export default Header