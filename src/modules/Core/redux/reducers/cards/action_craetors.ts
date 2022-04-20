import {
  AuthActionEnum,
  deleteCardAction,
  setActiveCardIdAction,
  setCardsAction,
  setIsConfirmAction,
  setIsErrorAction,
  setIsLoadingAction,
  setPageAction,
  setSuccessAction,
  setTotalPassengersAction,
} from './types';
import {IPassengers} from '../../../models/Airline';
import {appDispatch} from '../../store';
import axios, {AxiosResponse} from 'axios';
import {IResponse} from '../../../models/Airline';
import {limit} from '../../../constants/limit';

export const CardsActionCreators = {
  setId: (id: string): setActiveCardIdAction => ({type: AuthActionEnum.SET_ACTIVE_CARD_ID, payload: id}),
  deleteCard: (id: string): deleteCardAction => ({type: AuthActionEnum.DELETE_CARD, payload: id}),

  setPage: (): setPageAction => ({type: AuthActionEnum.SET_PAGE}),
  setCards: (cards: Array<IPassengers>): setCardsAction => ({type: AuthActionEnum.SET_CARDS, payload: cards}),
  setTotalPassengers: (totalPassengers: number): setTotalPassengersAction => ({
    type: AuthActionEnum.SET_TOTAL_PASSENGERS,
    payload: totalPassengers,
  }),

  setIsError: (isError: boolean): setIsErrorAction => ({type: AuthActionEnum.SET_IS_ERROR, payload: isError}),
  setIsSuccess: (isSuccess: boolean): setSuccessAction => ({type: AuthActionEnum.SET_SUCCESS, payload: isSuccess}),
  setIsConfirm: (isConfirm: boolean): setIsConfirmAction => ({
    type: AuthActionEnum.SET_IS_CONFIRM,
    payload: isConfirm,
  }),
  setIsLoading: (isLoading: boolean): setIsLoadingAction => ({
    type: AuthActionEnum.SET_IS_LOADING,
    payload: isLoading,
  }),

  downloadCards: (page: number) => async (dispatch: appDispatch) => {
    dispatch(CardsActionCreators.setIsLoading(true));
    await axios
      .get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=${limit}`)
      .then(({data}: AxiosResponse<IResponse<IPassengers>>) => {
        dispatch(CardsActionCreators.setIsError(false));
        dispatch(CardsActionCreators.setTotalPassengers(data.totalPassengers));
        dispatch(CardsActionCreators.setCards(data.data));
        dispatch(CardsActionCreators.setPage());
      })
      .catch((error) => {
        console.error(error);
        dispatch(CardsActionCreators.setIsError(true));
      })
      .finally(() => {
        dispatch(CardsActionCreators.setIsLoading(false));
      });
  },
  deleteCardFunction: (id: string) => async (dispatch: appDispatch) => {
    dispatch(CardsActionCreators.setIsSuccess(false));
    await axios
      .delete(`https://api.instantwebtools.net/v1/passenger/${id}`)
      .then(() => {
        dispatch(CardsActionCreators.deleteCard(id));
      })
      .then(() => {
        dispatch(CardsActionCreators.setIsSuccess(true));
      })
      .catch((error) => {
        console.log(error);
        dispatch(CardsActionCreators.setIsError(true));
      });
  },
};
