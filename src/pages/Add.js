import React, { useState } from 'react';
import './Add.css';

const Add = () => {
  const [formData, setFormData] = useState({
    dishName: '',
    author: '',
    country: 'Finland',
    steps: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Reset the form after submission
    setFormData({
      dishName: '',
      author: '',
      country: 'Finland',
      steps: ''
    });
  };

  return (
    <div className="Add">
      <h1>Add recipes page</h1>
      <form onSubmit={handleSubmit}>
        <div className='name'>
          <label>Dish's name</label>
          <input type="text" name="dishName" value={formData.dishName} onChange={handleChange} required />
        </div>
        <div className='author'>
          <label>Author</label>
          <input type="text" name="author" value={formData.author} onChange={handleChange} />
        </div>
        <div className='country'>
          <label>Country</label>
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="Finland">Finland</option>
            <option value="Russia">Russia</option>
            <option value="Estonia">Estonia</option>
          </select>
        </div>
        <div className='steps'>
          <label>Steps</label>
          <textarea name="steps" value={formData.steps} onChange={handleChange} required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Add;