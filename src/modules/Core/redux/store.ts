import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

/**
 * Создание хранилища Redux
 */
export const store = createStore(
  combineReducers<{}>({}),
  {},
  composeWithDevTools({name: 'AIRLINES', trace: true})(applyMiddleware(thunk))
);
