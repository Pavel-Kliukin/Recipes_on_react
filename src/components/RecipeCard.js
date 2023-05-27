import React, { useState, useEffect } from 'react';
import './RecipeCard.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
// import PixabayImage from './PixabayImage';

const RecipeCard = (props) => {
  const recipe = props.recipeData

  // This is for styling 'recipeImage' div
  // The photo of the recipe will be set as a background of 'recipeImage' div
  const divStyle = {
    backgroundImage: `url(${recipe.imgUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  // Getting the URL for the Flag image via REST Countries API
  const [flagUrl, setFlagUrl] = useState('');

  useEffect(() => {
    const fetchCountryFlag = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${recipe.country}`
        );
        const flagUrl = response.data[0].flags.svg;
        setFlagUrl(flagUrl);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountryFlag();
  }, [recipe.country]);

  //This variable contains the flag url that I want to pass to Recipe.js
  const DataForRecipeJsFile = {flagUrl : flagUrl}

  return (
    <div className='recipeCard'>
      <NavLink to={`/recipe/${recipe.id}`} state = {DataForRecipeJsFile}>
        <div className='recipeImage' style={divStyle}></div>
      </NavLink>
      <div className='cardLowerPart'>
        <div className='recipeName'>{recipe.dishName}</div>
        <div className='recipeDescription'>{recipe.description}</div>
        <div className='recipeAuthorFlag'>
          <div className='recipeAuthor'>
            by {recipe.author}
          </div>
          <div className='recipeFlag'>
            {flagUrl && <img className='flagImg' src={flagUrl} alt="Country Flag" />}
          </div>
          </div>
      </div>
    </div>
  );
};

export default RecipeCard;

{/* <PixabayImage 
imgRequest = {recipe.dishName}
/> */}