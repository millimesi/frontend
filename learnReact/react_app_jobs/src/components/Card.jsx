import React from 'react';
import './homeCard.css';

const Card = ({ children, bg = '' }) => {
  return (
    <div className={`card-container${bg}`}>{children}</div>
  )
}

export default Card;
