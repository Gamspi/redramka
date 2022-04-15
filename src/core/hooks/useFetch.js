import {useState} from "react";
import axios from "axios";
import {limit} from "../constants/limit";

export default function useFetch(){
    const [cards, setCards] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [totalPassengers, setTotalPassengers] = useState(1)
    const [page, setPage] = useState(0)

    async function fetchData() {
        try {
            setIsLoading(true)
            const {data} = await axios.get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=${limit}`)
            setTotalPassengers(data.totalPassengers)
            setCards(cards => [...cards, ...data.data])
            setPage(prev => prev + 1)
        } catch (error) {
            alert("Ошибка соединения \n"+error)
        } finally {
            setIsLoading(false)
        }
    }
    return{
        totalPassengers,
        cards, setCards,
        isLoading,
        fetchData
    }

}
