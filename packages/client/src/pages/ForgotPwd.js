import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import ForgotPwdFormContainer from '../containers/ForgotPwdFormContainer';

class ForgotPwd extends Component {
  render() {
    return (
      <div>
        <HeaderContainer type="posts_new"/>
        <ForgotPwdFormContainer />
      </div>
    );
  }
}


export default ForgotPwd;
