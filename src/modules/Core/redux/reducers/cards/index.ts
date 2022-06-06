import {IPassengers} from '../../../models/Airline';
import {cardsState, AuthActionEnum, CardsAction} from './types';

const initialState: cardsState = {
    isError: false,
    isLoading: false,
    isConfirm: false,
    isSuccess: false,

    totalPassengers: 1,
    page: 1,

    activeCard: null,
    cards: [] as Array<IPassengers>,
};

const cardsReducer = (state = initialState, action: CardsAction): cardsState => {
    switch (action.type) {
        case AuthActionEnum.SET_CARDS:
            return {...state, cards: [...state.cards, ...action.payload]};
        case AuthActionEnum.SET_TOTAL_PASSENGERS:
            return {...state, totalPassengers: action.payload};
        case AuthActionEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload};
        case AuthActionEnum.SET_IS_ERROR:
            return {...state, isError: action.payload};
        case AuthActionEnum.SET_PAGE:
            return {...state, page: state.page + 1};
        case AuthActionEnum.DELETE_CARD:
            return {...state, cards: [...state.cards.filter(({_id: id}) => id !== action.payload)]};
        case AuthActionEnum.SET_ACTIVE_CARD:
            return {...state, activeCard: action.payload};
        case AuthActionEnum.SET_IS_CONFIRM:
            return {...state, isConfirm: action.payload};
        case AuthActionEnum.SET_SUCCESS:
            return {...state, isSuccess: action.payload};

        default:
            return state;
    }
};
export default cardsReducer;
