import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6
import { Link, withRouter } from 'react-router-dom';
import { reduxForm, Field, SubmissionError } from 'redux-form';

import renderField from './renderField';
import {
    signUpUser,
    signUpUserSuccess,
    signUpUserFailure
} from '../state_management/login/actions/users';

//Client side validation
function validate(values) {
    var errors = {};
    var hasErrors = false;

    if (!values.name || values.name.trim() === '') {
        errors.name = 'Enter a name';
        hasErrors = true;
    }
    if (!values.username || values.username.trim() === '') {
        errors.username = 'Enter username';
        hasErrors = true;
    }
    if (!values.email || values.email.trim() === '') {
        errors.email = 'Enter email';
        hasErrors = true;
    }
    if (!values.password || values.password.trim() === '') {
        errors.password = 'Enter password';
        hasErrors = true;
    }
    if (!values.confirmPassword || values.confirmPassword.trim() === '') {
        errors.confirmPassword = 'Enter Confirm Password';
        hasErrors = true;
    }

    if (values.confirmPassword && values.confirmPassword.trim() !== '' && values.password && values.password.trim() !== '' && values.password !== values.confirmPassword) {
        errors.password = 'Password And Confirm Password don\'t match';
        errors.password = 'Password And Confirm Password don\'t match';
        hasErrors = true;
    }
    return hasErrors && errors;
}



//For any field errors upon submission (i.e. not instant check)
const validateAndSignUpUser = (values, dispatch) => {
    return dispatch(signUpUser(values))
        .then((result) => {

            // Note: Error's "data" is in result.payload.response.data (inside "response")
            // success's "data" is in result.payload.data
            if (result.payload.response && result.payload.response.status !== 200) {
                dispatch(signUpUserFailure(result.payload.response.data));
                throw new SubmissionError(result.payload.response.data);
            }

            //Store JWT Token to browser session storage 
            //If you use localStorage instead of sessionStorage, then this w/ persisted across tabs and new windows.
            //sessionStorage = persisted only in current tab
            sessionStorage.setItem('jwtToken', result.payload.data.token);
            //let other components know that everything is fine by updating the redux` state
            dispatch(signUpUserSuccess(result.payload.data)); //ps: this is same as dispatching RESET_USER_FIELDS
        });
};


class SignUpForm extends Component {

    componentWillMount() {
        //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
        //always reset that global state back to null when you REMOUNT
        this.props.resetMe();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user.status === 'authenticated' && nextProps.user.user && !nextProps.user.error) {
            this.props.history.push('/');
        }
    }

    render() {
        const { handleSubmit, submitting, validate } = this.props;
        return (
            <div className='container'>
                <form onSubmit={handleSubmit(validateAndSignUpUser)}>
                    <Field
                        name="name"
                        type="text"
                        component={renderField}
                        label="Full Name*" />
                    <Field
                        name="username"
                        type="text"
                        component={renderField}
                        label="@username*" />
                    <Field
                        name="email"
                        type="email"
                        component={renderField}
                        label="Email*" />
                    <Field
                        name="password"
                        type="password"
                        component={renderField}
                        label="Password*" />
                    <Field
                        name="confirmPassword"
                        type="password"
                        component={renderField}
                        label="Confirm Password*" />
                    <div>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={submitting}
                        >
                            {"Submit"}
                        </button>
                        <Link
                            to="/"
                            className="btn btn-error"
                        > {"Cancel"}
                        </Link>
                    </div>
                </form>
            </div>
        )
    }
}

// SignUpForm.propTypes = {
//     router: PropTypes.object
// };

export default withRouter(reduxForm({
    form: 'SignUpForm', // a unique identifier for this form
    validate, // <--- validation function given to redux-form
})(SignUpForm))

