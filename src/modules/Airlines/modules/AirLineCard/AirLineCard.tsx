import React from 'react';
import "./AirLineCard.scss"
import {useNavigate, Navigate} from "react-router-dom";
import Confirm from "../components/Confirm/Confirm";
import {useAction} from "../../../Core/hooks/useAction";
import {useTypeSelector} from "../../../Core/hooks/useTypeSelector";

/**
 * Карточка авиалинни
 */
const AirLineCard: React.FC = () => {
    const {cards, activeCardId} = useTypeSelector(state => state.cards)
    const navigate = useNavigate()
    const {setIsConfirm} = useAction()

    if (cards.find(({_id}) => _id === activeCardId)) {
        const [card] = cards.find(({_id}) => _id === activeCardId)!.airline

        return (
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
        )
    }
    return <Navigate to="/redramka"/>

}

export default React.memo(AirLineCard);
