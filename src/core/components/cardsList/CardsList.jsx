import React, {useEffect, useState} from 'react';
import axios from "axios";
import Loading from "../loading/Loading";
import Card from "../card/Card";
import "./CardsList.scss"
import {CSSTransition, TransitionGroup,} from 'react-transition-group';
import Konfem from "../konfem/Konfem";
import Success from "../success/Success";
import useObserver from "../../hooks/useObserver";

const CardsList = () => {
    const [cards, setCards] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isKonfem, setIsKonfem] = useState(false)
    const [page, setPage] = useState(0)
    const [totalPassengers, setTotalPassengers] = useState(1)
    const [deleteNum, setDeleteNum] = useState(0)
    const [isSuccess, setIsSuccess] = useState(false)
    const [ref, is] = useObserver()

    async function fetchData() {
        try {
            setIsLoading(true)
            const {data} = await axios.get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=21`)
            setTotalPassengers(data.totalPassengers)
            setCards(cards => [...cards, ...data.data])
            setPage(prev => prev + 1)
        } catch (error) {
            alert(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (is && totalPassengers > cards.length) {
            fetchData()
        }
    }, [is])

    const handelDelete = () => {
        setCards(cards => [...cards.filter(({_id}) => _id !== deleteNum)])
        setIsSuccess(true)
        setTimeout(() => {
            setIsSuccess(false)
        }, 1500)
    }
    return (
        <div className="cards-list">
            <Loading isLoading={isLoading}/>
            <Success isSuccess={isSuccess}/>
            <Konfem
                handelDelete={handelDelete}
                setIsKonfem={setIsKonfem}
                isKonfem={isKonfem}
            />
            <TransitionGroup component='ul'>
                {
                    cards.map(element => (
                            <CSSTransition
                                timeout={500}
                                key={element._id}
                                classNames="item"
                            >
                                <li className="item">
                                    <Card
                                        {...element}
                                        setIsKonfem={setIsKonfem}
                                        setDeleteNum={setDeleteNum}
                                    />
                                </li>
                            </CSSTransition>
                        )
                    )
                }
            </TransitionGroup>
            <div ref={ref}/>
        </div>
    );
};

export default CardsList;
