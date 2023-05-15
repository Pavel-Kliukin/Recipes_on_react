import React, { useState, useEffect } from "react"; 
import PixabayImage from '../components/PixabayImage';
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
      <h1>Recipes page</h1>
      <div>{data[1].title}</div>
      <div>
        <PixabayImage 
        imgRequest = {data[1].title}/>
      </div>
    </div>
  );
};

export default Recipes;