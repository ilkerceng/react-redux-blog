import React, { Component } from 'react';

class ValidateEmail extends Component {
    render() {
        return (
            <div>
                <ValidateEmailAlertContainer token={this.props.params.token} autoValidateToken={true} />
            </div>
        );
    }
}


export default ValidateEmail;
