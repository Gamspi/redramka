import {
  AuthActionEnum,
  deleteCardAction,
  setActiveCardAction,
  setCardsAction,
  setIsConfirmAction,
  setIsErrorAction,
  setIsLoadingAction,
  setPageAction,
  setSuccessAction,
  setTotalPassengersAction,
} from './types';

import {appDispatch} from '../../store';
import axios, {AxiosResponse} from 'axios';
import {limit} from '../../../constants/limit';
import {IPassengers, IResponse} from '../../../models/Airline';
import PasengerService from '../../../api/pasengerService';

export const CardsActionCreators = {
  setActivCard: (id: IPassengers): setActiveCardAction => ({type: AuthActionEnum.SET_ACTIVE_CARD, payload: id}),
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
    PasengerService.getPasenger(page,limit)
      .then(({data}: AxiosResponse<IResponse<IPassengers>>) => {
        // dispatch(CardsActionCreators.setIsError(false)s);
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
    PasengerService.deletePasenger(id)
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
