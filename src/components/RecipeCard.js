import React from 'react';
import './RecipeCard.css';
import PixabayImage from './PixabayImage';

const RecipeCard = (props) => {
  const recipe = props.recipeData

  return (
    <div className='recipeCard'>
      <div className='recipeName'>{recipe.title}</div>
      <PixabayImage 
        imgRequest = {recipe.title}
      />
      <div>See more</div>
    </div>
  );
};

export default RecipeCard;