import React from 'react';
import "./Card.scss"
const Card = ({name, trips, setIsKonfem}) => {
    return (
        <div className="card" onClick={(event) => {
            if (
                event.target.classList.contains("card__button")
            ) {
                setIsKonfem(true)
            }
        }}>

            <div className="card__info">
                <h2>Name: {name}</h2>
                <p>Trips: {trips}</p>
                <button className="card__button">X</button>
            </div>
        </div>
    );
};

export default Card;
