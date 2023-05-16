import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

import './Recipe.css'

const Recipe = () => {

  const {id} = useParams();
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

  return <div className="recipePage">
    <h1>Recipe with ID {data.id}</h1>
    <div>{data.title}</div>
  </div>
}

export default Recipe