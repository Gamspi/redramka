import React, {useRef, useState} from 'react';
import "./Card.scss"
import Info from "../imfo/Info";

const Card = ({name, trips, airline: [air], setDeleteNum, setIsKonfem, _id: id}) => {
    const [isInfo, setIsInfo] = useState(false)
    const ref = useRef()
    return (
        <div className="card" onClick={(event) => {
            setDeleteNum(id)
            if (event.target === ref.current) {
                setIsKonfem(true)

            } else {
                setIsInfo(!isInfo)

            }

        }}>
            <Info {...air}
                  isInfo={isInfo}
                  setIsKonfem={setIsKonfem}
            />
            <div className="card__info">
                <h2>Name: {name}</h2>
                <p>Trips: {trips}</p>
                <button ref={ref}>X</button>
            </div>
        </div>
    );
};

export default Card;
