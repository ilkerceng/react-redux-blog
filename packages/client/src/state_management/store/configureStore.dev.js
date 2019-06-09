import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import logger from 'redux-logger';


import reducer from '../login/reducers/index';


export default function configureStore(initialState) {
    const finalCreateStore = compose(
        applyMiddleware(promise),
        applyMiddleware(logger),
        window.window.__REDUX_DEVTOOLS_EXTENSION__ ? window.window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )(createStore);

    const store = finalCreateStore(reducer, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../login/reducers');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}