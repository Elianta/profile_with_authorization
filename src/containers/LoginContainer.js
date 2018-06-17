import {connect} from 'react-redux';
import {logIn, authError} from '../actions/session';
import {generateErrorMessage} from '../selectors/generateErrorMessage';
import Login from '../components/Login';

const mapStateToProps = (state) => ({
    isLoading: state.session.isLoading,
    errorMsg: generateErrorMessage(state.session.errorMsg)
});

const mapDispatchToProps = (dispatch) => ({
    logIn: (params, cbOnSuccess, cbOnError) => dispatch(logIn(params, cbOnSuccess, cbOnError)),
    authError: (errorMsg) => dispatch(authError(errorMsg))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
