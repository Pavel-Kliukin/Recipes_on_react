import React from 'react';
import './RecipeCard.css';
import { NavLink } from 'react-router-dom';
import PixabayImage from './PixabayImage';

const RecipeCard = (props) => {
  const recipe = props.recipeData

  const divStyle = {
    backgroundImage: `url(${recipe.imgUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return (
      <NavLink to={`/recipe/${recipe.id}`}>
        <div className='recipeCard'>
          <div className='recipeImage' style={divStyle}></div>
          <div className='cardLowerPart'>
            <div className='recipeName'>{recipe.dishName}</div>
            <div className='recipeDescription'>{recipe.description}</div>
            <div className='recipeAuthorFlag'>{recipe.author}</div>
          </div>
        </div>
      </NavLink>
  );
};

export default RecipeCard;

{/* <PixabayImage 
imgRequest = {recipe.dishName}
/> */}