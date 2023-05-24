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
      <h2>Share you recipe with the world!</h2>
      <form onSubmit={submitHandler}>
        <div className="name forms_element">
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
        <div className="author forms_element">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={fieldsHandler}
          />
        </div>
        <div className="country forms_element">
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
        <div className="description forms_element">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={fieldsHandler}
          ></textarea>
        </div>
        <div className="prep-time forms_element">
          <label htmlFor="prep_time">Preparation Time</label>
          <input
            type="text"
            id="prep_time"
            name="prep_time"
            value={formData.prep_time}
            onChange={fieldsHandler}
          />
        </div>
        <div className="cook-time forms_element">
          <label htmlFor="cook_time">Cooking Time</label>
          <input
            type="text"
            id="cook_time"
            name="cook_time"
            value={formData.cook_time}
            onChange={fieldsHandler}
          />
        </div>
        <div className="servings forms_element">
          <label htmlFor="servings">Servings</label>
          <input
            type="text"
            id="servings"
            name="servings"
            value={formData.servings}
            onChange={fieldsHandler}
          />
        </div>
        <p>Ingredients:</p>
        {formData.ingredients.map((item, id) => {
          return (
            <div key={id} className="ingredients">
              <div className='ingredNameBox'>
                <label htmlFor="name">name</label>
                <input
                  type="text"
                  id={id}
                  name="name"
                  onChange={ingredientsHandler}
                />
              </div>
              <div className='ingredQuantityBox'>  
                <label htmlFor="quantity">quantity</label>
                <input
                  type="text"
                  id={id}
                  name="quantity"
                  onChange={ingredientsHandler}
                />
              </div>
            </div>
          )
        })}
        <div className='addIngredButtonBox'>
          <button id='addIngredButton' onClick={addIngredHandler}>Add one more</button>
        </div>

        <div className="steps forms_element">
          <label htmlFor="steps">Steps</label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={fieldsHandler}
            // required
          ></textarea>
        </div>
        <div className='submitButtonBox'>
          <button id='submitButton' type="submit">Submit recipe</button>
        </div>
      </form>
    </div>
  );
  
  
};

export default Add;