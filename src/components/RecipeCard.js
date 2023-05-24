import React from 'react';
import './RecipeCard.css';
import { NavLink } from 'react-router-dom';
import PixabayImage from './PixabayImage';

const RecipeCard = (props) => {
  const recipe = props.recipeData

  return (
      <NavLink to={`/recipe/${recipe.id}`}>
        <div className='recipeCard'>
          <div className='recipeName'>{recipe.dishName}</div>
          <PixabayImage 
            imgRequest = {recipe.dishName}
          />
        </div>
      </NavLink>
  );
};

export default RecipeCard;