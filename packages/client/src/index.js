import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Routes } from './routes';
import configureStore from './store/configureStore';

const store = configureStore();
const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>
  , document.getElementById('body'));
