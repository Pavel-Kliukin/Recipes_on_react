import React, { useState } from 'react';
import axios from "axios";
import './Add.css';

const Add = () => {
  const [formData, setFormData] = useState({
    id: 0,
    dishName: '',
    author: '',
    country: 'Finland',
    description: '',
    prep_time: '',
    cook_time:'',
    servings: '',
    ingredients: [
      {
        name: '',
        quantity: ''
      }
    ],
    steps: ''
  });

  // This handler is for all fields of the form except ingredients
  const fieldsHandler = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value})
  };

  // This handler is for ingredients field
  const ingredientsHandler = (e) => {
    const { name, value } = e.target;
    const ingredArray = [...formData.ingredients]
    ingredArray[e.target.id][name] = value;
    setFormData({...formData, ingredients: ingredArray})
  }

  //This handler adds new field for a new ingredient
  const addIngredHandler = (e) => {
    e.preventDefault()

    const newIngred = {
      name: '',
      quantity: ''
    }

    const newIngredArray = [...formData.ingredients, newIngred]
    setFormData({...formData, ingredients: newIngredArray})
  }

  const submitHandler = (e) => {
    e.preventDefault();

    //Adds recipe to the db.json file on json-server
    axios.post("http://localhost:3001/recipes", {
      ...formData
      }).then((res) => console.log(res)).catch((error) => console.log(error));

    // Reset the formData after submission
    setFormData({
      dishName: '',
      author: '',
      country: 'Finland',
      description: '',
      prep_time: '',
      cook_time:'',
      servings: '',
      ingredients: [
        {
          name: '',
          quantity: ''
        }
      ],
      steps: ''
    });
  };

  return (
    <div className="Add">
      <h1>Add recipes page</h1>
      <form onSubmit={submitHandler}>
        <div className="name">
          <label htmlFor="dishName">Dish's name</label>
          <input
            type="text"
            id="dishName"
            name="dishName"
            value={formData.dishName}
            onChange={fieldsHandler}
            required
          />
        </div>
        <div className="author">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={fieldsHandler}
          />
        </div>
        <div className="country">
          <label htmlFor="country">Country</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={fieldsHandler}
          >
            <option value="Finland">Finland</option>
            <option value="Russia">Russia</option>
            <option value="Estonia">Estonia</option>
          </select>
        </div>
        <div className="description">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={fieldsHandler}
          ></textarea>
        </div>
        <div className="prep-time">
          <label htmlFor="prep_time">Preparation Time</label>
          <input
            type="text"
            id="prep_time"
            name="prep_time"
            value={formData.prep_time}
            onChange={fieldsHandler}
          />
        </div>
        <div className="cook-time">
          <label htmlFor="cook_time">Cooking Time</label>
          <input
            type="text"
            id="cook_time"
            name="cook_time"
            value={formData.cook_time}
            onChange={fieldsHandler}
          />
        </div>
        <div className="servings">
          <label htmlFor="servings">Servings</label>
          <input
            type="text"
            id="servings"
            name="servings"
            value={formData.servings}
            onChange={fieldsHandler}
          />
        </div>
        {formData.ingredients.map((item, id) => {
          return (
            <div key={id} className="ingredients">
              <label htmlFor="ingredients">Ingredients</label>
              <input
                type="text"
                id={id}
                name="name"
                onChange={ingredientsHandler}
              />
              <input
                type="text"
                id={id}
                name="quantity"
                onChange={ingredientsHandler}
              />
            </div>
          )
        })}
        <button onClick={addIngredHandler}>Add ingredient</button>

        <div className="steps">
          <label htmlFor="steps">Steps</label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={fieldsHandler}
            // required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
  
  
};

export default Add;