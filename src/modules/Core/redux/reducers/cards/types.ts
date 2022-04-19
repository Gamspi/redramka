import {IPassengers} from "../../../models/IPassengers";

export interface cardsState {
    isLoading: boolean
    isError:boolean
    isConfirm:boolean
    isSuccess:boolean

    totalPassengers: number
    page: number

    activeCardId:string

    cards: Array<IPassengers>
}

export enum AuthActionEnum {
    SET_CARDS = 'SET_CARDS',
    SET_IS_CONFIRM = 'SET_IS_CONFIRM',
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_TOTAL_PASSENGERS = 'SET_TOTAL_PASSENGERS',
    SET_PAGE = 'SET_PAGE',
    SET_SUCCESS = 'SET_SUCCESS',
    SET_IS_ERROR = 'SET_IS_ERROR',
    SET_ACTIVE_CARD_ID = 'SET_ACTIVE_CARD_ID',
    DELETE_CARD = 'DELETE_CARD',

}

export type setCardsAction = {
    type: AuthActionEnum.SET_CARDS
    payload: Array<IPassengers>
}
export type setIsLoadingAction = {
    type: AuthActionEnum.SET_IS_LOADING
    payload: boolean
}
export type setTotalPassengersAction = {
    type: AuthActionEnum.SET_TOTAL_PASSENGERS
    payload: number
}
export type setPageAction = {
    type: AuthActionEnum.SET_PAGE

}
export type setIsErrorAction = {
    type: AuthActionEnum.SET_IS_ERROR
    payload: boolean
}
export type setActiveCardIdAction = {
    type: AuthActionEnum.SET_ACTIVE_CARD_ID
    payload: string
}

export type deleteCardAction = {
    type: AuthActionEnum.DELETE_CARD
    payload: string
}

export type setIsConfirmAction = {
    type: AuthActionEnum.SET_IS_CONFIRM
    payload: boolean
}
export type setSuccessAction = {
    type: AuthActionEnum.SET_SUCCESS
    payload: boolean
}


export type CardsAction =
    setCardsAction|
    setIsLoadingAction|
    setTotalPassengersAction|
    setPageAction|
    setIsErrorAction|
    deleteCardAction|
    setActiveCardIdAction|
    setIsConfirmAction|
    setSuccessAction
