import './Card.scss';


import React from 'react';
import {Link} from "react-router-dom";
import {useAction} from "../../hooks/useAction";


interface props {
    name: string;
    trips: number;
    id: string
}

const Card = ({name, trips, id}: props) => {

    const {setIsConfirm} = useAction()
    return (
            <div className="card">

                <Link to={`card/${id}`}>
                    <div className="card__body">
                        <div className="card__info">
                            <h2>Name: {name}</h2>
                            <p>Trips: {trips}</p>
                        </div>

                    </div>

                </Link>

                <button className="card__button" onClick={() => setIsConfirm(true)}>&#10008;</button>
            </div>


    )
};

export default Card;
