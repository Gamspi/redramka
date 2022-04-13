import React, {useEffect, useRef, useState} from 'react';
import "./Card.scss"
import Info from "../imfo/Info";
import useTheme from "../../hooks/useTheme";

const Card = ({name, trips, airline: [air], setDeleteNum, setIsKonfem, _id: id}) => {
    const [isInfo, setIsInfo] = useState(false)
    const ref = useRef()
    const [setTheme] = useTheme()

    useEffect(()=>{
        isInfo? setTheme("true"):setTheme('')
    },[isInfo])
    return (
        <div className="card" onClick={(event) => {
            setDeleteNum(id)
            if (event.target === ref.current) {
                setIsKonfem(true)

            } else {
                setIsInfo(!isInfo)
                if (isInfo) {

                }
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
