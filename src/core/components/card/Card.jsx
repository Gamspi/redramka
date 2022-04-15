import React from 'react';
import "./Card.scss"

const Card = ({name, trips}) => (
        <div className="card" >
            <div className="card__info">
                <h2>Name: {name}</h2>
                <p>Trips: {trips}</p>
                <button className="card__button">&#10008;</button>
            </div>
        </div>
    );

export default Card;
