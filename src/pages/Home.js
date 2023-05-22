import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';
import backgroundVideo from '../assets/backgroundvideo.mp4'

const Home = () => {
  return (
    <div className="home">
      <div className='videoBox'>
        <video autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>
      <div className='lowerBox'>
        <p className='cookingTime'>It's cooking time!</p>
        <div className='linksBlock'>
          <div className='linkBox'>
            <div>
              <h3>Recipies book</h3>
              <p>We have recipies from all over the world!</p>
              <p>Click and find what you want to cook today.</p>
            </div>
            <div className='link'>
              <NavLink to="/recipes">Find what to cook</NavLink>
            </div>
          </div>
          <div className='linkBox'>
            <div>
              <h3>Add your recipe</h3>
              <p>Do you want to share one of your favorite recipies with the world?</p>
              <p>Go ahead! We appreciate that.</p>
            </div>
            <div className='link'>
              <NavLink to="/add">Add a recipe</NavLink>
            </div>
          </div>
          <div className='linkBox'>
            <div>
              <h3>Business College Helsinki</h3>
              <p>This app was created by a student of the Business College of Helsinki.</p>
              <p>Do you want to know more about this awsome college?</p>
            </div>
            <div className='link'>
              <NavLink target="_blank" to="https://en.bc.fi/">Know more</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;