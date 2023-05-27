import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useLocation } from 'react-router-dom';

import './Recipe.css'

const Recipe = () => {

  const {id} = useParams(); // gets id from the url
  const [data, setData] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  
  //getting url for the flag image from RecipeCard.js via 'useLocation' hook and 'state'
  const location = useLocation()
  const flagUrl = location.state.flagUrl

  useEffect(() => { 
    setIsLoading(true);

    axios.get('http://localhost:3001/recipes/')
      .then((res) => {
        const recipe = res.data.find(recipe => recipe.id == id);
        if (recipe) {
          setData(recipe);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [id] );


  if (isLoading) {
    return <p>Loading...</p>
  }

  // This is for styling 'imgBox' div
  // The photo of the recipe will be set as a background of 'imgBox' div
  const divStyle = {
    backgroundImage: `url(${data.imgUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return (
    <div className="recipePage">
      <div className="nameAndFlag">
        <h2>{data.dishName}</h2>
        {flagUrl && <img className="flag" src={flagUrl} alt="Country flag"/>}
      </div>
      <p id='author'>by {data.author}</p>
      <div className="recipeBox">
        <div className="leftSide">
          <div className="leftBlock">
            <div className='imgBox' style={divStyle}></div>
            <div className="underImageBlock">
              <div className="underImageTitles">
                <p className="itemTitle">Preparation time:</p>
                <p className="itemTitle">Cook time:</p>
                <p className="itemTitle">Servings:</p>
              </div>
              <div className="underImageTexts">
                <p className="itemText">{data.prep_time}</p>
                <p className="itemText">{data.cook_time}</p>
                <p className="itemText">{data.servings}</p>
              </div>
            </div>
            <div className="ingredBox">
              <p className="itemTitle">Ingredients:</p>
              <div className="ingredBlock">
                <div className="ingredNames">
                  {data.ingredients.map((item, i) => {
                    return (
                      <p key={i}>{item.name}:</p>
                    )
                  })}
                </div>
                <div className="ingredQuantities">
                  {data.ingredients.map((item, i) => {
                    return (
                      <p key={i}>{item.quantity}</p>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rightSide">
          <h3>Description:</h3>
          <p id='description'>{data.description}</p>
          <h3>Preparation:</h3>
          <p>{data.steps}</p>
        </div>
      </div>
    </div>
  )
    
}

export default Recipe