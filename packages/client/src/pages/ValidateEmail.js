import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import ValidateEmailAlertContainer from '../containers/ValidateEmailAlertContainer';

class ValidateEmail extends Component {
    render() {
        debugger;
        return (
            <div>
                <HeaderContainer type="posts_new" />
                <ValidateEmailAlertContainer token={this.props.params.token} autoValidateToken={true} />
            </div>
        );
    }
}


export default ValidateEmail;
