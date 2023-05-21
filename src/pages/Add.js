import React, { useState } from 'react';
import './Add.css';

const Add = () => {
  const [formData, setFormData] = useState({
    dishName: '',
    author: '',
    country: 'Finland',
    description: '',
    prep_time: '',
    cook_time:'',
    servings: '',
    // ingredients: [
    //   {
    //     name: '',
    //     quantity: ''
    //   }
    // ],
    steps: ''
  });

  const [ingredients, setIngredients] = useState(
    [
      {
        name: '',
        quantity: ''
      }
    ]
  );

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const ingredientsHandler = (event) => {
    const { name, value } = event.target;
    const ingredArray = [...ingredients]
    ingredArray[event.target.id][name] = value;
    setIngredients(ingredArray)
  }

  const addIngredHandler = (event) => {
    event.preventDefault()
    const newIngred = {
      name: '',
      quantity: ''
    }
    setIngredients([...ingredients, newIngred])
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
    console.log(ingredients);
    // Reset the form after submission
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
            onChange={changeHandler}
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
            onChange={changeHandler}
          />
        </div>
        <div className="country">
          <label htmlFor="country">Country</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={changeHandler}
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
            onChange={changeHandler}
          ></textarea>
        </div>
        <div className="prep-time">
          <label htmlFor="prep_time">Preparation Time</label>
          <input
            type="text"
            id="prep_time"
            name="prep_time"
            value={formData.prep_time}
            onChange={changeHandler}
          />
        </div>
        <div className="cook-time">
          <label htmlFor="cook_time">Cooking Time</label>
          <input
            type="text"
            id="cook_time"
            name="cook_time"
            value={formData.cook_time}
            onChange={changeHandler}
          />
        </div>
        <div className="servings">
          <label htmlFor="servings">Servings</label>
          <input
            type="text"
            id="servings"
            name="servings"
            value={formData.servings}
            onChange={changeHandler}
          />
        </div>
        {ingredients.map((item, id) => {
          return (
            <div key={id} className="ingredients">
              <label htmlFor="ingredients">Ingredients</label>
              <input
                type="text"
                id={id}
                name="name"
                // value={formData.ingredients[0].name}
                onChange={ingredientsHandler}
              />
              <input
                type="text"
                id={id}
                name="quantity"
                // value={formData.ingredients[0].quantity}
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
            onChange={changeHandler}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
  
  
};

export default Add;