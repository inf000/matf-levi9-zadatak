import React from 'react';
import { Redirect } from 'react-router-dom';
import {
    AllProducts,
    AddProduct
} from '../containers';

const routes = {
    all: [
        {
            path: '/admin/unos-novog-proizvoda',
            exact: true,
            component: AddProduct
        },
        {
            path: '/admin/proizvodi',
            exact: true,
            component: AllProducts
        },
        {
            path: '/*',
            component: () => <Redirect to={{ pathname: '/admin/unos-novog-proizvoda' }} />,
        },
    ]
};

export { routes }