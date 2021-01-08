import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from '../utils/history';
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
    products: productsReducer,
    router: connectRouter(history)
});

export default rootReducer