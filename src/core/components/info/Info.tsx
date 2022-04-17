import React, {Dispatch, memo, MouseEvent, SetStateAction} from 'react';
import "./Info.scss"
import {IAirline} from "../../models/IAirline";

interface props {
    activeCard: Array<IAirline>
    isInfo: boolean
    setIsInfo: Dispatch<SetStateAction<boolean>>
    setIsConfirm: Dispatch<SetStateAction<boolean>>
}

const Info = ({
                  activeCard,
                  isInfo,
                  setIsInfo,
                  setIsConfirm
              }: props) => {
    const handlerClose = (event: MouseEvent<HTMLElement>) => {
        const target = event.target as  HTMLElement
        if (isInfo && (target.classList.contains("info__button-close") || !target.closest(".info__body"))) {
            setIsInfo(false)

        } else if (isInfo && (target.classList.contains("info__button"))) {
            setIsConfirm(true)
        }
    }
    if (activeCard) {
        const [card]: Array<IAirline> = activeCard
        return (
            <div className="info" onClick={(event) => handlerClose(event)}>
                <div className="info__body">
                    <img src={card.logo} alt={card.name}/>
                    <h2>Name: <span>{card.name}</span> </h2>
                    <p>Country: <span>{card.country}</span></p>
                    <p>Established: <span>{card.established}</span></p>
                    <p>Slogan: <span>{card.slogan}</span></p>
                    <p>Head quaters: <span>{card.head_quaters}</span></p>
                    <p>Website: <span><a href={card.website}>{card.website}</a></span></p>
                    <button className="info__button">Удалить</button>
                    <button className="info__button-close">&#10008;</button>
                </div>
            </div>
        );
    }
    return null
};

export default memo(Info);
