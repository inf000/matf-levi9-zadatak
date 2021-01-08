import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {routerMiddleware} from "connected-react-router";

import rootReducer from '../reducers/rootReducer';

const configureStore = (history) => {
    const middleware = routerMiddleware(history);
    return createStore(
        rootReducer,
        applyMiddleware(thunk, middleware)
    )
}

export { configureStore }