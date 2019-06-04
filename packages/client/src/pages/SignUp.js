import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import SignUpFormContainer from '../containers/SignUpFormContainer';

class SignUp extends Component {
  render() {
    return (
      <div>
        <HeaderContainer type="posts_new"/>
        <SignUpFormContainer />
      </div>
    );
  }
}


export default SignUp;
