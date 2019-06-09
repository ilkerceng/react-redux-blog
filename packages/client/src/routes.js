import React from 'react';
import { Route } from 'react-router-dom';

import App from './pages/App';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPwd from './pages/ForgotPwd';
import ValidateEmail from './pages/ValidateEmail';
import Profile from './pages/Profile';

export const Routes = () => (
    <div>
        <Route exact path="/" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/forgotPwd" component={ForgotPwd} />
        <Route path="/validateEmail/:token" component={ValidateEmail} />
        <Route path="/profile" component={Profile} />
    </div>
);


