import SignUpForm from '../components/SignUpForm';
import { connect } from 'react-redux';



const mapDispatchToProps = (dispatch) => {
    return {
        resetMe: () => {
        }
    }
}


function mapStateToProps(state) {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);