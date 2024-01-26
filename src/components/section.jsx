// Section.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Section({ product, onButtonClick, updateCounter }) {
  const [buttonText, setButtonText] = useState('Add To Card');

  const handleClick = () => {
    // Pass the buttonText to the parent component
    onButtonClick(product, buttonText);

    // Update the counter based on the buttonText
    if (buttonText === 'Add To Card') {
      updateCounter(1); // Increment by 1
    } else {
      updateCounter(-1); // Decrement by 1
    }

    // Change the button text based on some condition
    const newButtonText = buttonText === 'Add To Card' ? 'Remove from Card' : 'Add To Card';
    setButtonText(newButtonText);
  };
  const isSale = product.price <= 250;

  const priceStyle = {
    textDecoration: isSale ? 'line-through' : 'none',
  };
  
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img className="img-fluid rounded mx-auto " src={product.img} alt="..." style={{width: '12rem'}} />
        <div className="card-body p-4">
          <div class="badge bg-dark text-white position-absolute" style={{ top: " 0.5rem", right: "0.5rem" }}>
            {
              product.sale === true ? 'sale' : ''
            }
          </div>

          <div className="text-center">
            <h5 className="fw-bolder">{product.title}</h5>

            <div className={`d-flex justify-content-center small text-warning mb-2`}>
             <FontAwesomeIcon icon={faStar} /> 
             <FontAwesomeIcon icon={faStar} /> 
             <FontAwesomeIcon icon={faStar} /> 
             <FontAwesomeIcon icon={faStar} /> 
             <FontAwesomeIcon icon={faStar} /> 

            </div>
            <div style={{display:'flex',justifyContent: 'center'}}>
            <p style={priceStyle}>${product.price} </p> <span style={{margin:'0 0 0 10px'}}>{product.price1}</span>
            </div>
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              className={`
              ${buttonText === 'Add To Card' ? 'btn btn-primary mt-auto ' : 'btn btn-danger mt-auto '}
              `}
              onClick={handleClick}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
