import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from './state_management/store/configureStore';
import { Routes } from './routes';
import Header from './components/header/Header';

const store = configureStore();


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Header />
            <Routes />
        </Router>
    </Provider>,
    document.getElementById('body')
);
