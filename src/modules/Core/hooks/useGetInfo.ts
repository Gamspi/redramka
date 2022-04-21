import axios from 'axios';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router';
import {IAirline} from '../models/Airline';
import {useAction} from './useAction';
import {useTypeSelector} from './useTypeSelector';

export function useGetInfo(id: any) {
  const {cards, activeCard} = useTypeSelector((state) => state.cards);
  const [card, setCard] = useState<IAirline>({} as IAirline);
  const navigate = useNavigate();
  const {setIsError} = useAction();

  const getPassebger = async () => {
    await axios
      .get(`https://api.instantwebtools.net/v1/passenger/${id}`)
      .then(({data}) => {
        data ? setCard(data.airline[0]) : navigate('/redramka');
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
        navigate('/redramka');
      });
  };
  useEffect(() => {
    if (!activeCard) {
      getPassebger();
    } else {
      setCard(activeCard.airline[0]);
    }
  }, []);
  return [card];
}
