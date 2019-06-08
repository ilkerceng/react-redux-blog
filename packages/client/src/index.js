import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
// import { createBrowserHistory } from "history";
// import { Routes } from './routes';
import configureStore from './store/configureStore';
import App from './pages/App';
import HeaderContainer from './containers/HeaderContainer';
import PostsIndex from './pages/PostsIndex';
import { Routes } from './routes';

const store = configureStore();
// const history = createBrowserHistory()


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <HeaderContainer type={"posts_index"} />
                {/* <Route exact path="/" component={App} />
                <Route path="/posts" component={PostsIndex} /> */}
                <Routes />
            </div>
        </Router>
    </Provider>,
    document.getElementById('body')
);
