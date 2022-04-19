import React, {MouseEvent} from 'react';
import Loading from "./components/loading/Loading";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Success from "./components/success/Success";
import Confirm from "../components/Confirm/Confirm";
import Card from "./components/card/Card";
import {useTypeSelector} from "../../../Core/hooks/useTypeSelector";
import {useAction} from "../../../Core/hooks/useAction";
import "./CardsList.scss"
import ErrorCard from "./components/ErrorCard/ErrorCard";
import {Outlet, useParams} from 'react-router-dom';

/**
 * Страница со списком авиалиний
 */
const PassengersList: React.FC = () => {
        const {id} = useParams()

        const {
            isLoading,
            cards
        } = useTypeSelector(state => state.cards)
        const {setId, setIsConfirm} = useAction()



        return (

            <div className="cards-list">
                <ErrorCard/>
                <Loading isLoading={isLoading}/>
                <Success/>
                <Confirm/>
                <div className="cards-list__body">
                    <TransitionGroup component="ul">
                        {cards.map(({_id: id, trips, name}) => (
                            <CSSTransition timeout={500} key={id} classNames="item">
                                <li
                                    className="item"
                                    onClick={(event: MouseEvent<HTMLLIElement>) => {
                                        setId(id);
                                        const target = event.target as HTMLElement;
                                        if (target.classList.contains('card__button')) {
                                            setIsConfirm(true);
                                        }
                                    }}
                                >
                                    <Card id={id} trips={trips} name={name}/>
                                </li>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </div>
                <CSSTransition
                    timeout={1000}
                    classNames="info"
                    in={!!id}
                >
                    <Outlet/>
                </CSSTransition>

            </div>


        );
    }
;

export default React.memo(PassengersList);
