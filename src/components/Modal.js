import React from 'react';
import './Modal.css'

// Images imports
import addedImg from '../assets/added.png'

const Modal = (props) => {

  

  return (
    <div className='overlay'>
      <div className="modal">
        <h2>Your recipe was added successfully</h2>
        <img src={addedImg} className='addedImg' alt='Recipe added'/>
        <button id="closeButton" className="btn" onClick={props.btnClicked}>x</button>
      </div>
    </div>
  );
};

export default Modal;