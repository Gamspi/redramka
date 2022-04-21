import './PassengersList.scss';

import React, {MouseEvent, useEffect} from 'react';
import Loading from './components/loading/Loading';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Success from './components/success/Success';
import Confirm from './components/Confirm/Confirm';
import Card from './components/card/Card';
import {useTypeSelector} from '../../../Core/hooks/useTypeSelector';
import {useAction} from '../../../Core/hooks/useAction';
import ErrorCard from './components/ErrorCard/ErrorCard';
import {Outlet, useParams} from 'react-router-dom';
import useTheme from '../../../Core/hooks/useTheme';

/**
 * Страница со списком авиалиний
 */
const PassengersList: React.FC = () => {
  const {id} = useParams();
  const {isLoading, cards, isConfirm, isError} = useTypeSelector((state) => state.cards);
  const {setActivCard, setIsConfirm} = useAction();
  const [setTheme] = useTheme('fixed');

  useEffect(() => {
    isConfirm || isError || !!id ? setTheme('true') : setTheme('');
  }, [isConfirm, isError, id]);
  return (
    <div className="cards-list">
      <ErrorCard />
      <Loading isLoading={isLoading} />
      <Success />
      <Confirm />
      <div className="cards-list__body">
        <TransitionGroup component="ul">
          {cards.map((element) => (
            <CSSTransition timeout={500} key={element._id} classNames="item">
              <li className="item" onClick={() => setActivCard(element)}>
                <Card id={element._id} trips={element.trips} name={element.name} />
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>

        <Outlet />

    </div>
  );
};
export default React.memo(PassengersList);
