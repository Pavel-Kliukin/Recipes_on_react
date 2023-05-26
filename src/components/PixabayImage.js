import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PixabayImage = (props) => {
  const [imageURL, setImageURL] = useState('');
  const dishName = props.imgRequest

  useEffect(() => {
    const fetchData = async (dishName) => {
      try {
        const response = await axios.get(
          'https://pixabay.com/api/',
          {
            params: {
              key: '36430210-211a4a73660233291f9ac05a5',
              q: dishName,
              image_type: 'photo',
              safesearch: true,
            },
          }
        );

        if (response.data.hits.length > 0) {
          setImageURL(response.data.hits[0].webformatURL);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData(dishName);
  }, [dishName]);

  const divStyle = {
    backgroundImage: `url(${imageURL})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return (
    <div className='imgBox' style={divStyle}></div>
  );
};

export default PixabayImage