import React from 'react';
import { Component } from 'react';
import { Route } from 'react-router-dom';

import PostsIndex from './PostsIndex';
import PostsNew from './PostsNew';
import PostsShow from './PostsShow';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgotPwd from './ForgotPwd';
import ValidateEmail from './ValidateEmail';
import Profile from './Profile';

import AppContainer from '../containers/AppContainer';
// import HeaderContainer from '../containers/HeaderContainer';

export default class App extends Component {
    render() {
        return (
            <AppContainer>
                <div>
                    <Route path="/posts" component={PostsIndex} />
                    <Route exact path="/posts/new" component={PostsNew} />
                    <Route exact path="/signin" component={SignIn} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/posts/:id" component={PostsShow} />
                    {/* <Route path="/forgotPwd" component={ForgotPwd} />
                    <Route path="/validateEmail/:token" component={ValidateEmail} />
                    <Route path="/profile" component={Profile} /> */}
                </div>
            </AppContainer>
        );
    }
}
