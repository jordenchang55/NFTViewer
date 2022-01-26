import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
import {createMiddleware} from 'redux-api-middleware';

const apiMiddleware = createMiddleware();
const middlewareEnhancer = applyMiddleware(apiMiddleware);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnhancers(middlewareEnhancer));
