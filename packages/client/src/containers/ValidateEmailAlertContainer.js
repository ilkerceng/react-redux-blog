import ValidateEmailAlert from '../components/ValidateEmailAlert';
import { connect } from 'react-redux'
import { validateEmail, validateEmailSuccess, validateEmailFailure } from '../actions/users';
import { resendValidationEmail, resendValidationEmailSuccess, resendValidationEmailFailure, resetResendEmail, resetResendEmailState } from '../actions/resendEmail';
import { reduxForm } from 'redux-form';



const mapStateToProps = (state, ownProps) => {
  return { 
    user: state.user,
    resendEmail: state.resendEmail,
    autoValidateToken: ownProps.autoValidateToken //auto-check server to validate token this mounts(used in validateEmail page)
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    validateEmail: () => {
      dispatch(validateEmail(ownProps.token))
        .then((response) => {
          if(!response.error) {
              //reset token (possibly new token that was regenerated by the server)
              sessionStorage.setItem('jwtToken', response.payload.data.token);
              dispatch(validateEmailSuccess(response.payload.data))
            } else {
              sessionStorage.removeItem('jwtToken');
              dispatch(validateEmailFailure(response.payload.data));
            }
        });
    },
    resend: () => {
      let jwtToken = sessionStorage.getItem('jwtToken');
      if (!jwtToken || jwtToken === '') { //if there is no jwtToken, alert
        alert('Please Log In');
        return;
      }

      dispatch(resendValidationEmail(jwtToken))
        .then((response) => {
            !response.error ? dispatch(resendValidationEmailSuccess(response.payload)) : dispatch(resendValidationEmailFailure(response.payload));
        });
    },
    resetMe: () => {
      dispatch(resetResendEmailState());
    }
  }
}


const ValidateEmailContainer = connect(mapStateToProps, mapDispatchToProps)(ValidateEmailAlert)

export default ValidateEmailContainer;
