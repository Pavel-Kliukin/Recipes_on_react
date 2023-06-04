import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = (props) => {
  return <header className="header">
    <div className='headerSection'>
    <NavLink to="/" aria-label="Home"><h1>Cook IT!</h1></NavLink>
      <nav>
        <ul>
          <li>{props.home}</li>
          <li>{props.recipes}</li>
          <li>{props.add}</li>
        </ul>
      </nav>
    </div>
  </header>
}

export default Header