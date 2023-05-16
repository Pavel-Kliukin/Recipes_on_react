import React from 'react'
import './Recipe.css'

const Recipe = (props) => {
  return <div className="recipePage">
    <h1>{props.title}</h1>
  </div>
}

export default Recipe