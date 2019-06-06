import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import SignInFormContainer from '../containers/SignInFormContainer';

class SignIn extends Component {
  render() {
    debugger;
    return (
      <div>
        <HeaderContainer type="posts_new" />
        <SignInFormContainer />
      </div>
    );
  }
}


export default SignIn;
