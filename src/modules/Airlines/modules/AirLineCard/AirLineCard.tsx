import React, {MouseEvent, useEffect, useState} from 'react';
import './AirLineCard.scss';
import {useNavigate, Navigate, useParams} from 'react-router-dom';
import {useAction} from '../../../Core/hooks/useAction';
import {useTypeSelector} from '../../../Core/hooks/useTypeSelector';
import axios from 'axios';
import {IAirline} from '../../../Core/models/Airline';
import {CSSTransition} from 'react-transition-group';

/**
 * Карточка авиалинни
 */
const AirLineCard: React.FC = () => {
  const {cards, activeCard} = useTypeSelector((state) => state.cards);
  const navigate = useNavigate();
  const [card, setCard] = useState<IAirline>({} as IAirline);
  const {setIsConfirm} = useAction();
  const {id} = useParams();

  useEffect(() => {
    if (!activeCard) {
      axios
        .get(`https://api.instantwebtools.net/v1/passenger/${id}`)
        .then(({data}) => {
          data ? setCard(data.airline[0]) : navigate('/');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setCard(activeCard.airline[0]);
    }
  }, []);

  const handelClouse = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains('info__button-close') || !target.closest('.info__body')) {
      navigate('/redramka');
    }
  };

  return (
    <div className="info" onClick={handelClouse}>
      <div className="info__body">
        <img src={card.logo} alt={card.name} />
        <article className="info__article">
          <h2>
            Name: <span>{card.name}</span>
          </h2>
          <p>
            Country: <span>{card.country}</span>
          </p>
          <p>
            Established: <span>{card.established}</span>
          </p>
          <p>
            Slogan: <span>{card.slogan}</span>
          </p>
          <p>
            Head quaters: <span>{card.head_quaters}</span>
          </p>
          <p>
            Website:{' '}
            <a href={`http://${card.website}`} target="_blank">
              {card.website}
            </a>
          </p>
        </article>
        <button
          className="info__button-delete"
          onClick={() => {
            setIsConfirm(true);
          }}
        >
          Delete
        </button>
        <button className="info__button-close">&#10008;</button>
      </div>
    </div>
  );
};

export default React.memo(AirLineCard);
