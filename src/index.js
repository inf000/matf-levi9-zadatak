import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import './index.css';
import 'antd/dist/antd.css'
import App from './App';
import history from "./utils/history";
import { routes } from './routes';
import { configureStore } from './store/configureStore';

const store = configureStore(history);
const MOUNT_NODE = document.getElementById('root');

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App routes={routes.all} />
        </ConnectedRouter>
    </Provider>,
    MOUNT_NODE
);

