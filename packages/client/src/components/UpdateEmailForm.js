import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6
import { reduxForm, Field, SubmissionError } from 'redux-form';

import { updateEmail, updateEmailSuccess, updateEmailFailure } from '../state_management/login/actions/updateEmail';
import renderField from './renderField';
import { updateUserEmail } from '../state_management/login/actions/users';

//Client side validation
function validate(values) {
    var errors = {};
    var hasErrors = false;
    if (!values.email || values.email.trim() === '') {
        errors.username = 'Enter email';
        hasErrors = true;
    }
    return hasErrors && errors;
}



//For any field errors upon submission (i.e. not instant check)
const validateAndUpdateEmail = (values, dispatch) => {

    return dispatch(updateEmail(values, sessionStorage.getItem('jwtToken')))
        .then((result) => {
            // Note: Error's "data" is in result.payload.response.data (inside "response")
            // success's "data" is in result.payload.data
            if (result.payload.response && result.payload.response.status !== 200) {
                dispatch(updateEmailFailure(result.payload.response.data));
                throw new SubmissionError(result.payload.response.data);
            }
            //let other components know that we got user and things are fine by updating the redux` state 
            dispatch(updateEmailSuccess(result.payload.data));
            dispatch(updateUserEmail(values)); //update current user's email (in user's state)
        });
};



class UpdateEmailForm extends Component {

    componentWillUnmount() {
        //Important: If you are reusing a component that might have some state (like error), you should reset it
        //either here or in componentWillMount
        this.props.resetMe();
    }


    getMessage() {
        const { error, emailUpdated } = this.props.updateEmail;
        if (error) {
            return <div className="alert alert-danger">
                {error.email}
            </div>
        } else if (emailUpdated) {
            return <div className="alert alert-info">
                {"Email was updated!"}
            </div>
        } else {
            return <span />
        }
    }

    render() {
        const { handleSubmit, submitting } = this.props;

        return (
            <div>
                {this.getMessage()}
                <form onSubmit={handleSubmit(validateAndUpdateEmail.bind(this))}>
                    <Field
                        name="email"
                        type="email"
                        component={renderField}
                        label="Update Email*" />
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={submitting}
                    >
                        {"Update Email"}
                    </button>
                </form>
            </div>
        );
    }
}

// UpdateEmailForm.propTypes = {
//     router: PropTypes.object
// };

export default reduxForm({
    form: 'UpdateEmailForm',
    fields: ['email'],
    asyncBlurFields: ['email'],
    validate
})(UpdateEmailForm)