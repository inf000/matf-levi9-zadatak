import {
    PRODUCTS_SET_IS_FETCHING_PRODUCTS,
    PRODUCTS_SET_IS_CREATING_PRODUCT,
    PRODUCTS_SET_IS_DELETING_PRODUCT,
    PRODUCTS_SET_PRODUCTS
} from '../actions/actionTypes';

import initialState from './initialState'

const productsReducer = (state = initialState.products, action) => {
    switch (action.type) {
        case PRODUCTS_SET_IS_FETCHING_PRODUCTS:
            return {
                ...state,
                isFetchingAllProducts: action.payload,
            };
        case PRODUCTS_SET_IS_CREATING_PRODUCT:
            return {
                ...state,
                isCreatingProduct: action.payload,
            }
        case PRODUCTS_SET_IS_DELETING_PRODUCT:
            return {
                ...state,
                isDeletingProduct: action.payload,
            }
        case PRODUCTS_SET_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload,
            }

        default:
            return state
    }
};

export default productsReducer