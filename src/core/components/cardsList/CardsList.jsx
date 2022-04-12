import React, {useEffect, useState} from 'react';
import axios from "axios";
import Loading from "../loading/Loading";
import Card from "../card/Card";
import "./CardsList.scss"
import {CSSTransition, TransitionGroup,} from 'react-transition-group';
import Konfem from "../konfem/Konfem";
import Success from "../success/Success";

const CardsList = () => {
    const [cards, setCards] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isKonfem, setIsKonfem] = useState(false)
    const [page, setPage] = useState(0)
    const [totalPassengers, setTotalPassengers] = useState(0)
    const [deleteNum, setDeleteNum] = useState(0)
    const [isSuccess, setIsSuccess] = useState(false)


    async function fetchData() {
        try {
            const {data} = await axios.get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=21`)
            setTotalPassengers(data.totalPassengers)
            setCards([...cards, ...data.data])
            setPage(prev => prev + 1)
        } catch (error) {
            console.log(error)
        }finally {
            setIsLoading(false)

        }
    }

    useEffect(() => {
        if (isLoading) {
            fetchData()

        }
    }, [isLoading])

    useEffect(() => {
            setIsLoading(true)
            document.addEventListener("scroll", handlerScroll)
            return function () {
                document.removeEventListener("scroll", handlerScroll)
            }
        }, []
    )
    const handlerScroll = (event) => {
        if (event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight) < 100 && totalPassengers >= cards.length) {
            setIsLoading(true)
        }
    }
    const handelDelete = () => {
        setCards(cards => [...cards.filter(({_id}) => _id !== deleteNum)])
        setIsSuccess(true)
        setTimeout(()=>{
            setIsSuccess(false)
        },1000)
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
                                    <Card {...element}/>
                                    <button
                                        className="cards-list__button"
                                        onClick={() => {
                                            setIsKonfem(true)
                                            setDeleteNum(element._id)
                                        }}
                                    >X
                                    </button>
                                </li>
                            </CSSTransition>
                        )
                    )
                }
            </TransitionGroup>

        </div>
    );
};

export default CardsList;
