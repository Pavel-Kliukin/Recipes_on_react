import React, { useState, useEffect } from "react"; 
import RecipeCard from '../components/RecipeCard';
import axios from "axios";
import './Recipes.css';

const Recipes = () => {

  const [data, setData] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  const [searchFilter, setSearchFilter] = useState('')

  useEffect(() => { 
    setIsLoading(true);

    axios.get('http://localhost:3001/recipes/')
    .then((res) => {
      setData(res.data)
      setIsLoading(false)
    });
  }, [] );

  const searchHandler = (e) => {
    setSearchFilter(e.target.value)
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div className="Recipes">
      <div className="titleAndSearchBox">
        <div className="titleAndSearch">
          <h2>Recipes of the world</h2>
          <div className="searchByDishName">  
            <label htmlFor="search">Search by dish name</label>
                <input
                  type="text"
                  name="search"
                  onChange={searchHandler}
                />
          </div>
        </div>
      </div>
      <div className="cards">
        {data.map(recipe => {
          if (recipe.dishName.toLowerCase().includes(searchFilter.toLocaleLowerCase())) {
            return (
              <RecipeCard 
                key = {recipe.id}
                recipeData = {recipe}
              />
            )
          }
        }
        )}
      </div>
    </div>
  );
};

export default Recipes;