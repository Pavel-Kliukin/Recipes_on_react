import React, { useState, useEffect } from "react"; 
import RecipeCard from '../components/RecipeCard';
import axios from "axios";
import './Recipes.css';

const Recipes = () => {

  const [data, setData] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => { 
    setIsLoading(true);

    axios.get('http://localhost:3001/recipes/')
    .then((res) => {
      setData(res.data)
      setIsLoading(false)
    });
  }, [] );


  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div className="Recipes">
      <h2>Recipes of the world</h2>
      <div className="cards">
        {data.map(recipe => <RecipeCard 
          key = {recipe.id}
          recipeData = {recipe}
        />)}
      </div>
    </div>
  );
};

export default Recipes;