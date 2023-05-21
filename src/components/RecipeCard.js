import React from 'react';
import './RecipeCard.css';
import { NavLink } from 'react-router-dom';
import PixabayImage from './PixabayImage';

const RecipeCard = (props) => {
  const recipe = props.recipeData

  return (
    <div className='recipeCard'>
      <div className='recipeName'>{recipe.dishName}</div>
      <PixabayImage 
        imgRequest = {recipe.dishName}
      />
      <NavLink to={`/recipe/${recipe.id}`}>See more</NavLink>
    </div>
  );
};

export default RecipeCard;