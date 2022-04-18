import {useState} from 'react';
import axios, {AxiosResponse} from 'axios';
import {limit} from '../constants/limit';
import {IPassengers} from '../models/IPassengers';
import {IResponse} from '../models/IResponse';

export default function useFetch() {
  const [cards, setCards] = useState<Array<IPassengers>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPassengers, setTotalPassengers] = useState(1);
  const [page, setPage] = useState(0);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const {data}: AxiosResponse<IResponse<IPassengers>> = await axios.get(
        `https://api.instantwebtools.net/v1/passenger?page=${page}&size=${limit}`
      );
      setTotalPassengers(data.totalPassengers);
      setCards((cards) => [...cards, ...data.data]);
      setPage((prev) => prev + 1);
    } catch (error) {
      alert('Ошибка соединения \n' + error);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    totalPassengers,
    cards,
    setCards,
    isLoading,
    fetchData,
  };
}
