import React, { MouseEvent} from 'react';
import "./Info.scss"
import {useAction} from "../../hooks/useAction";
import {useTypeSelector} from "../../hooks/useTypeSelector";


const Info = () => {
    const {activeCardId,cards}=useTypeSelector(state => state.cards)
    const{setIsConfirm}=useAction()
    const handlerClose = (event: MouseEvent<HTMLElement>) => {
        const target = event.target as  HTMLElement
        if ((target.classList.contains("info__button-close") || !target.closest(".info__body"))) {
            // setIsInfo(false)

        } else if ((target.classList.contains("info__button"))) {
            setIsConfirm(true)
        }
    }
    if (activeCardId) {
        const [card] = cards.find(({_id:id})=>id===activeCardId)!.airline
        console.log(true)
        return (
            <div className="info" onClick={(event) => handlerClose(event)}>
                <div className="info__body">
                    <img src={card.logo} alt={card.name}/>
                    <article className="info__article">
                        <h2>Name: <span>{card.name}</span> </h2>
                        <p>Country: <span>{card.country}</span></p>
                        <p>Established: <span>{card.established}</span></p>
                        <p>Slogan: <span>{card.slogan}</span></p>
                        <p>Head quaters: <span>{card.head_quaters}</span></p>
                        <p>Website: <span><a href={card.website}>{card.website}</a></span></p>
                    </article>
                    <button className="info__button">Delete</button>
                    <button className="info__button-close">&#10008;</button>
                </div>
            </div>
        );
    }
    return null
};

export default React.memo(Info);
