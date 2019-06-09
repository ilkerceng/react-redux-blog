import { combineReducers } from 'redux';
import UserReducer from './reducer_user';
import ResendEmailReducer from './reducer_resendEmail';
import UpdateEmailReducer from './reducer_updateEmail';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    user: UserReducer,
    form: formReducer, // <-- redux-form
    resendEmail: ResendEmailReducer,
    updateEmail: UpdateEmailReducer
});

export default rootReducer;
