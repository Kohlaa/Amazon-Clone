import React from 'react';

const Card = ({ name, price, image, description }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-description">{description}</p>
        <p className="card-price">${price}</p>
      </div>
    </div>
  );
};

export default Card;
