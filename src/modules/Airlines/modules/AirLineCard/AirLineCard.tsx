import React from 'react';
import "./AirLineCard.scss"
import {CSSTransition} from 'react-transition-group';
import {useNavigate, useParams} from "react-router-dom";
import Confirm from "../../../Core/components/konfem/Confirm";
import {useAction} from "../../../Core/hooks/useAction";
import {useTypeSelector} from "../../../Core/hooks/useTypeSelector";

/**
 * Карточка авиалинни
 */
const AirLineCard: React.FC = () => {
    const {cards} = useTypeSelector(state => state.cards)
    const navigate = useNavigate()
    const {setIsConfirm} = useAction()
    const {id} = useParams()
    const [card] = cards.find(({_id}) => _id === id)!.airline
    return (
        <CSSTransition timeout={500} classNames="confirm">
            <div className="info">
                <Confirm/>
                <div className="info__body">
                    <img src={card.logo} alt={card.name}/>
                    <article className="info__article">
                        <h2>Name: <span>{card.name}</span></h2>
                        <p>Country: <span>{card.country}</span></p>
                        <p>Established: <span>{card.established}</span></p>
                        <p>Slogan: <span>{card.slogan}</span></p>
                        <p>Head quaters: <span>{card.head_quaters}</span></p>
                        <p>Website: <span><a href={card.website}>{card.website}</a></span></p>
                    </article>
                    <button className="info__button" onClick={() => {
                        setIsConfirm(true)
                    }}>Delete
                    </button>
                    <button className="info__button-close" onClick={() => navigate(-1)}>&#10008;</button>
                </div>
            </div>
        </CSSTransition>
    )
}

export default React.memo(AirLineCard);
