import React, {useRef, useState} from 'react';
import "./Card.scss"
import Info from "../imfo/Info";

const Card = ({name, trips, airline: [air], setDeleteNum, setIsKonfem, _id: id}) => {
    const [isInfo, setIsInfo] = useState(false)
    const ref = useRef()
    return (
        <div className="card" onClick={(event) => {
            if (event.target === ref.current) {
                setIsKonfem(true)
                setDeleteNum(id)
            } else {
                setIsInfo(!isInfo)
            }

        }}>
            <Info {...air} isInfo={isInfo}/>
            <div className="card__info">
                <h2>Name: {name}</h2>
                <p>Trips: {trips}</p>
                <button ref={ref}>X</button>
            </div>
        </div>
    );
};

export default Card;
