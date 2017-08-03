import {applyMiddleware , createStore , compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
//routerMiddleware
const middleware = applyMiddleware(promise(),  thunk,  logger());
const store = createStore(rootReducer , middleware);
export const history = syncHistoryWithStore(browserHistory , store)
export default store;

