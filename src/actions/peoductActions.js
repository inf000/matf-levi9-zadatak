import {API_BASE_URL} from "../constants";
import axios from "axios";
import {
    PRODUCTS_SET_IS_FETCHING_PRODUCTS,
    PRODUCTS_SET_IS_CREATING_PRODUCT,
    PRODUCTS_SET_IS_DELETING_PRODUCT,
    PRODUCTS_SET_PRODUCTS
} from "./actionTypes";
import { message } from 'antd'

const createProduct = payload => dispatch => {
    dispatch({
        type: PRODUCTS_SET_IS_CREATING_PRODUCT,
        payload: true,
    });

    return axios.post(
        `${API_BASE_URL}/products`,
        JSON.stringify(payload),
        {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            message.success('Successfully added new product')
            dispatch({
                type: PRODUCTS_SET_IS_CREATING_PRODUCT,
                payload: false,
            });
        })
        .catch(error => {
            if(!error.data) {
                message.success("Can't connect to server")
            }
            else {
                console.log('ima')
            }
            dispatch({
                type: PRODUCTS_SET_IS_CREATING_PRODUCT,
                payload: false,
            });
        })
};

const deleteProduct = payload => dispatch => {
    dispatch({
        type: PRODUCTS_SET_IS_DELETING_PRODUCT,
        payload: true,
    });

    return axios.delete(
        `${API_BASE_URL}/products/${payload.productId}`,
        {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            message.success('Successfully deleted product')
            dispatch({
                type: PRODUCTS_SET_IS_DELETING_PRODUCT,
                payload: false,
            });
        })
        .catch(error => {
            message.success('Error')
            dispatch({
                type: PRODUCTS_SET_IS_DELETING_PRODUCT,
                payload: false,
            });
        })
};

const getProducts = () => dispatch => {
    dispatch(setFetchingProducts(true));

    return axios.get(
        `${API_BASE_URL}/products`,
        {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            dispatch(setProducts(response.data.data))
            dispatch(setFetchingProducts(false));
        })
        .catch(error => {
            dispatch(setFetchingProducts(false));
        })
};

const setFetchingProducts = payload => {
    return {
        type: PRODUCTS_SET_IS_FETCHING_PRODUCTS,
        payload: payload,
    }
}

const setProducts = payload => {
    return {
        type: PRODUCTS_SET_PRODUCTS,
        payload: payload,
    }
}

export { createProduct, getProducts, deleteProduct }