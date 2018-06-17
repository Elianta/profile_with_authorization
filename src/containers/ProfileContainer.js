import React from 'react';
import { connect } from 'react-redux';
import Profile from '../components/Profile';
import { getUserInfo } from '../actions/userInfo';
import { generateErrorMessage } from '../selectors/generateErrorMessage';

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUserInfo();
    }

    render() {
        const { userInfo, errorMsg, isLoading } = this.props;
        return <Profile userInfo={userInfo} errorMsg={errorMsg} isLoading={isLoading}/>;
    }
}

const mapStateToProps = (state) => ({
    userInfo: state.profile.userInfo,
    isLoading: state.profile.isLoading,
    errorMsg: generateErrorMessage(state.profile.errorMsg)
});

const mapDispatchToProps = (dispatch) => ({
    getUserInfo: () => dispatch(getUserInfo())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
