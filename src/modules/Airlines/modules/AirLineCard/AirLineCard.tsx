import React, {MouseEvent, useEffect, useState} from 'react';
import './AirLineCard.scss';
import {useNavigate, Navigate, useParams} from 'react-router-dom';
import {useAction} from '../../../Core/hooks/useAction';
import {useTypeSelector} from '../../../Core/hooks/useTypeSelector';
import axios from 'axios';
import {IAirline} from '../../../Core/models/Airline';
import {CSSTransition} from 'react-transition-group';
import {useGetInfo} from '../../../Core/hooks/useGetInfo';

/**
 * Карточка авиалинни
 */
const AirLineCard: React.FC = () => {
  const [animation, setAnimation] = useState(true);
  const {cards, activeCard} = useTypeSelector((state) => state.cards);
  const navigate = useNavigate();
  const {setIsConfirm} = useAction();
  const {id} = useParams();
  const [card] = useGetInfo(id);

  const handelClouse = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains('airLineCard__button-close') || !target.closest('.airLineCard__body')) {
      setAnimation(false);
      setTimeout(() => {
        navigate('/redramka');
      }, 300);
    }
  };

  return (
    <CSSTransition timeout={500} classNames="airLineCard" in={animation && !!card.name} unmountOnExit mountOnEnter>
      <div className="airLineCard" onClick={handelClouse}>
        <div className="airLineCard__body">
          <img src={card.logo} alt={card.name} />
          <article className="airLineCard__article">
            <h2>
              Name: <span>{card.name || 'Undefined'}</span>
            </h2>
            <p>
              Country: <span>{card.country || 'Undefined'}</span>
            </p>
            <p>
              Established: <span>{card.established || 'Undefined'}</span>
            </p>
            <p>
              Slogan: <span>{card.slogan || 'Undefined'}</span>
            </p>
            <p>
              Head quaters: <span>{card.head_quaters || 'Undefined'}</span>
            </p>
            <p>
              Website:{' '}
              <a href={`http://${card.website}`} target="_blank">
                {card.website || 'Undefined'}
              </a>
            </p>
          </article>
          <button
            className="airLineCard__button-delete"
            onClick={() => {
              setIsConfirm(true);
            }}
          >
            Delete
          </button>
          <button className="airLineCard__button-close">&#10008;</button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default React.memo(AirLineCard);
