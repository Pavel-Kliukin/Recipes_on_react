import React, { useState, useEffect } from 'react';
import axios from "axios";
import './Add.css';
import Modal from '../components/Modal';

const Add = () => {
  const [formData, setFormData] = useState({
    id: 0,
    dishName: '',
    author: '',
    country: 'Finland',
    description: '',
    imgUrl: '',
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

  // This handler adds new field for a new ingredient
  const addIngredHandler = (e) => {
    e.preventDefault()

    const newIngred = {
      name: '',
      quantity: ''
    }

    const newIngredArray = [...formData.ingredients, newIngred]
    setFormData({...formData, ingredients: newIngredArray})
  }
  // This handler is for submit button
  const submitHandler = (e) => {
    e.preventDefault();

    // Adds recipe to the db.json file on json-server
    if (formData.imgUrl === '') { // If user didn't set the img url, the default "no image" picture will be set:
      axios.post("http://localhost:3001/recipes", {
        ...formData, imgUrl:"https://drive.bc.fi/portal/s/012324799202027485390.png"
      }).catch((error) => console.log(error));
    } else {
      axios.post("http://localhost:3001/recipes", {
        ...formData
      }).catch((error) => console.log(error));
    }

    // Makes Modal window visible
    setModalShow(true)

    // Reset the formData after submission
    setFormData({
      dishName: '',
      author: '',
      country: 'Finland',
      description: '',
      imgUrl: '',
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

  // Hook and Handler for Modal component
  const [modalShow, setModalShow] = useState(false)

  // Hide Modal window after close button pressed
  const modalButtonHandler = () => {
    setModalShow(false)
  }

  // Getting array of countries names from restcountries.com
  const [countriesNames, setCountriesNames] = useState([])

  useEffect(() => {
    const fetchCountriesNames = async () => {
      try {
        const response = await axios.get(
          'https://restcountries.com/v3.1/all'
        );
        const countriesNames = response.data.map(country => country.name.common);
        setCountriesNames(countriesNames.sort())
      } catch (error) {
        console.log('Error from restcountries.com: ', error);
        return[] // Return an empty array in case of an error
      }
    };

    fetchCountriesNames()
  }, [countriesNames]);

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
        <div className="imgURL forms_element">
          <label htmlFor="imgURL">Image URL</label>
          <input
            type="text"
            id="imgUrl"
            name="imgUrl"
            value={formData.imgUrl}
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
            {countriesNames.map(country => 
              <option key={country} value={country}>{country}</option>
            )}
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
                  required
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
          ></textarea>
        </div>
        <div className='submitButtonBox'>
          <button id='submitButton' type="submit">Submit recipe</button>
        </div>
      </form>
      {modalShow && <Modal btnClicked={modalButtonHandler}/>}
    </div>
  );
  
  
};

export default Add;