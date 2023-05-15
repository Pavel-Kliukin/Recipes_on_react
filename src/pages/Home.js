import React from 'react';
import './Home.css';


const Home = (props) => {
  return (
    <div className="mainBox">
      <div className="animalsLink">
        <div className='aLinkHeader'></div>
        {props.animalslink}
      </div>
      <div className="birdsLink">
        <div className='bLinkHeader'></div>
        {props.birdslink}
      </div>
    </div>
  );
};

export default Home;