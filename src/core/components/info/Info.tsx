import React, {memo} from 'react';
import "./Info.scss"
import {IAirline} from "../../models/IAirline";

const Info = ({
                  activeCard,
                  isInfo,
                  setIsInfo,
                  setIsKonfem,
              }: any) => {
    const handlerClose = (event: any) => {
        if (isInfo && (event.target.classList.contains("info__button-close") || !event.target.closest(".info__body"))) {
            setIsInfo(false)

        } else if (isInfo && (event.target.classList.contains("info__button"))) {
            setIsKonfem(true)
        }
    }
    if (activeCard) {
        const [card]:Array<IAirline> = activeCard
        return (
            <div className="info" onClick={(event) => handlerClose(event)}>
                <div className="info__body">
                    <img src={card.logo} alt={card.name}/>
                    <h2>Name: {card.name}</h2>
                    <p>Country: {card.country}</p>
                    <p>Established: {card.established}</p>
                    <p>Slogan: {card.slogan}</p>
                    <p>Head quaters: {card.head_quaters}</p>
                    <p>Website: <a href={card.website}>{card.website}</a></p>
                    <button className="info__button">Удалить</button>
                    <button className="info__button-close">&#10008;</button>
                </div>
            </div>
        );
    }
    return null
};

export default memo(Info);
