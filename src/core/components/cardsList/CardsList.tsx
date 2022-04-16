import React, {FC, MouseEvent, useEffect, useState} from 'react';
import Loading from "../loading/Loading";
import Card from "../card/Card";
import "./CardsList.scss"
import {CSSTransition, TransitionGroup,} from 'react-transition-group';
import Success from "../success/Success";
import useObserver from "../../hooks/useObserver";
import useTheme from "../../hooks/useTheme";
import Info from "../info/Info";
import useFetch from "../../hooks/useFetch";
import Confirm from "../konfem/Confirm";
import {IPassengers} from "../../models/IPassengers";
import {ISuccess} from "../../models/ISuccess";

const CardsList: FC = () => {
    const [isConfirm, setIsConfirm] = useState(false)
    const [success, setSuccess] = useState<Array<ISuccess>>([])
    const [isInfo, setIsInfo] = useState(false)
    const [activeCard, setActiveCard] = useState<IPassengers>({} as IPassengers)
    const [ref, is] = useObserver()
    const [setTheme] = useTheme("fixed")
    const {totalPassengers, isLoading, fetchData, cards, setCards} = useFetch()
    useEffect(() => {
        (isConfirm || isInfo) ? setTheme("true") : setTheme('')
    }, [isConfirm, isInfo])

    useEffect(() => {
        if (is && totalPassengers > cards.length) {
            fetchData()
        }
    }, [is])
    const handelDelete = (): void => {

        setSuccess((prev) => [...prev, {name: activeCard.name, id: activeCard._id,}])
        setCards(cards => [...cards.filter(({_id}) => _id !== activeCard._id)])
        setIsInfo(false)
        // setTimeout(() => {
        //     setActiveCard({} as IPassengers)
        // }, 300)
        setTimeout(() => {
            setSuccess(prev => [...prev.filter(({id}, i, a) => id !== a[0].id)])
        }, 1700)
    }
    return (
        <div className="cards-list">
            <Loading isLoading={isLoading}/>
            <div className="cards-list__success">
                <TransitionGroup component='ul'>
                    {success?.map(({name, id}) => (
                        <CSSTransition
                            timeout={500}
                            key={id}
                            classNames="success"
                        >
                            <li>
                                <Success name={name}/>
                            </li>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
            <Confirm
                handelDelete={handelDelete}
                setIsConfirm={setIsConfirm}
                isConfirm={isConfirm}
            />
            <CSSTransition
                in={isInfo}
                timeout={1000}
                classNames="info"
                unmountOnExit
                mountOnEnter
            >
                <Info
                    activeCard={activeCard.airline}
                    isInfo={isInfo}
                    setIsInfo={setIsInfo}
                    setIsConfirm={setIsConfirm}
                />
            </CSSTransition>
            <div className="cards-list__body">
                <TransitionGroup component='ul'>
                    {
                        cards.map(element => (
                                <CSSTransition
                                    timeout={500}
                                    key={element._id}
                                    classNames="item"
                                >
                                    <li className="item"
                                        onClick={(event: MouseEvent<HTMLLIElement>) => {
                                            setActiveCard(element)
                                            const target = event.target as HTMLElement;
                                            if (!target.classList.contains("card__button")) {
                                                setIsInfo(true)
                                            } else {
                                                setIsConfirm(true)
                                            }
                                        }}
                                    >
                                        <Card
                                            trips={element.trips}
                                            name={element.name}
                                        />
                                    </li>
                                </CSSTransition>
                            )
                        )
                    }
                </TransitionGroup>
            </div>
            <div ref={ref}/>
        </div>
    );
};

export default CardsList;
