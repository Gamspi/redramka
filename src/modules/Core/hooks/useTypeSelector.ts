import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {rootState} from '../redux/store';

export const useTypeSelector: TypedUseSelectorHook<rootState> = useSelector;
