import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

const App = ({ routes }) => {
    return(
        <React.Fragment>
            <Switch>
                {routes.map(
                    (route, index) =>
                        <Route
                            key={index}
                            exact={route.exact}
                            path={route.path}
                            component={route.component}
                        />
                )};
            </Switch>
        </React.Fragment>)
}

export default App
