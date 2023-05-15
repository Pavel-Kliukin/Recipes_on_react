import React from 'react'
import './Recipe.css'

const Recipe = (props) => {
  return <header className="recipe">
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

export default Recipe