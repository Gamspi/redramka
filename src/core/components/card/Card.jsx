import React, {useState} from 'react';
import "./Card.scss"
import Info from "../imfo/Info";
import {CSSTransition} from "react-transition-group";

const Card = ({name, trips, airline: [air]}) => {
    const [isInfo, setIsInfo] = useState(false)
    return (
        <div className="card" onClick={() => {
            setIsInfo(!isInfo)
        }}>

            <CSSTransition
                in={isInfo}
                timeout={1000}
                classNames="info"
                unmountOnExit
                mountOnEnter
            >
                <Info {...air}/>
            </CSSTransition>
            <div className="card-info">
                <h2>Name: {name}</h2>
                <p>Trips: {trips}</p>

            </div>
        </div>
    );
};

export default Card;
