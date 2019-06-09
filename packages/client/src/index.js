import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from './store/configureStore';
import HeaderContainer from './containers/HeaderContainer';
import { Routes } from './routes';

const store = configureStore();
// const history = createBrowserHistory()


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <HeaderContainer />
                <Routes />
            </div>
        </Router>
    </Provider>,
    document.getElementById('body')
);
