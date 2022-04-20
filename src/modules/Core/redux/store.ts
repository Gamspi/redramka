import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';

/**
 * Создание хранилища Redux
 */
const rootReducer = combineReducers(reducers);

export const store = createStore(
  rootReducer,
  {},
  composeWithDevTools({name: 'AIRLINES', trace: true})(applyMiddleware(thunk))
);
export type rootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
