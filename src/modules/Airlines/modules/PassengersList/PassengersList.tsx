import React, {MouseEvent,  useEffect} from 'react';
import useObserver from "../../../Core/hooks/useObserver";
import useTheme from "../../../Core/hooks/useTheme";
import Loading from "../../../Core/components/loading/Loading";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Success from "../../../Core/components/success/Success";
import Confirm from "../../../Core/components/konfem/Confirm";
import Card from "../../../Core/components/card/Card";
import {useTypeSelector} from "../../../Core/hooks/useTypeSelector";
import {useAction} from "../../../Core/hooks/useAction";
import "./CardsList.scss"
import ErrorCard from "../../../Core/components/ErrorCard/ErrorCard";

/**
 * Страница со списком авиалиний
 */
const PassengersList: React.FC = () => {
        const [ref, is] = useObserver();
        const [setTheme] = useTheme('fixed');

        const {
            totalPassengers,
            isLoading,
            cards,
            page,
            activeCardId,
            isConfirm
        } = useTypeSelector(state => state.cards)
        const {downloadCards, setId, setIsConfirm} = useAction()
        useEffect(() => {
            isConfirm  ? setTheme('true') : setTheme('');
        }, [isConfirm]);
        useEffect(() => {
            if (is && totalPassengers > cards.length) {
                downloadCards(page)
            }
        }, [is]);
        useEffect(() => {
        }, [activeCardId])

        return (
            <>
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
                                        if (!target.classList.contains('card__button')) {
                                            // setIsInfo(true);
                                        } else {
                                            setIsConfirm(true);
                                        }
                                    }}
                                >
                                        <Card id = {id} trips={trips} name={name}/>
                                </li>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </div>
                <div ref={ref}/>
            </div>

            </>
        );
    }
;

export default React.memo(PassengersList);
