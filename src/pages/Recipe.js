import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

import './Recipe.css'

const Recipe = () => {

  const {id} = useParams(); // gets id from the url
  const [data, setData] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

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

  const imageURL='https://www.telegraph.co.uk/content/dam/food-and-drink/2015/12/16/turkey-xanthe_trans_NvBQzQNjv4BqpJliwavx4coWFCaEkEsb3kvxIt-lGGWCWqwLa_RXJU8.jpg?imwidth=1280'

  const divStyle = {
    backgroundImage: `url(${imageURL})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return (
    <div className="recipePage">
      <h2>{data.dishName}</h2>
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
                  {data.ingredients.map(item => {
                    return (
                      <p key={data.id}>{item.name}:</p>
                    )
                  })}
                </div>
                <div className="ingredQuantities">
                  {data.ingredients.map(item => {
                    return (
                      <p key={data.id}>{item.quantity}</p>
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