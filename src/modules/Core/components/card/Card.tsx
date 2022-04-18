import React from 'react';
import './Card.scss';

interface props {
  name: string;
  trips: number;
}

const Card = ({name, trips}: props) => (
  <div className="card">
    <div className="card__info">
      <h2>Name: {name}</h2>
      <p>Trips: {trips}</p>
      <button className="card__button">&#10008;</button>
    </div>
  </div>
);

export default Card;
