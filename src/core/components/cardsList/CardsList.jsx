import React, {useEffect, useState} from 'react';
import Loading from "../loading/Loading";
import Card from "../card/Card";
import "./CardsList.scss"
import {CSSTransition, TransitionGroup,} from 'react-transition-group';
import Konfem from "../konfem/Konfem";
import Success from "../success/Success";
import useObserver from "../../hooks/useObserver";
import useTheme from "../../hooks/useTheme";
import Info from "../info/Info";
import useFetch from "../../hooks/useFetch";

const CardsList = () => {
    const [isKonfem, setIsKonfem] = useState(false)
    const [success, setSuccess] = useState([])
    const [isInfo, setIsInfo] = useState(false)
    const [card, setCard] = useState(null)
    const [ref, is] = useObserver()
    const [setTheme] = useTheme("fixed")
    const{totalPassengers,isLoading,fetchData,cards, setCards}=useFetch()
    useEffect(() => {
        (isKonfem || isInfo) ? setTheme("true") : setTheme('')
    }, [isKonfem, isInfo])

    useEffect(() => {
        if (is && totalPassengers > cards.length) {
            fetchData()
        }
    }, [is])
    const handelDelete = () => {
        setSuccess(prev => [...prev, cards.find(elem => elem._id === card?._id)])
        setCards(cards => [...cards.filter(({_id}) => _id !== card?._id)])
        setIsInfo(false)
        setTimeout(() => {
            setCard(null)
        }, 300)
        setTimeout(() => {
            setSuccess(prev => [...prev.filter((elem, i, a) => elem._id !== a[0]._id)])
        }, 1700)

    }
    return (
        <div className="cards-list">
            <Loading isLoading={isLoading}/>
            <div className="cards-list__success">
                <TransitionGroup component='ul'>
                    {success.map(({name, _id}) => (
                        <CSSTransition
                            timeout={500}
                            key={_id}
                            classNames="success"
                        >
                            <li>
                                <Success name={name}/>
                            </li>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
            <Konfem
                handelDelete={handelDelete}
                setIsKonfem={setIsKonfem}
                isKonfem={isKonfem}
            />
            <Info {...card?.airline[0]}
                  isInfo={isInfo}
                  setIsInfo={setIsInfo}
                  setIsKonfem={setIsKonfem}
            />
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
                                        onClick={(event) => {
                                            setCard(element)

                                            if (!event.target.classList.contains("card__button")
                                            ) {
                                                setIsInfo(true)
                                            } else {
                                                setIsKonfem(true)
                                            }
                                        }}
                                    >
                                        <Card {...element}/>
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
