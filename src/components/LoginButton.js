import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from '../actions/session';

class LoginButton extends React.Component {
    handleClick = () => {
        this.props.logOut();
    };

    render() {
        return (
            <React.Fragment>
                {this.props.session.user ?
                    <button type="button" onClick={this.handleClick} className="btn btn--logout">Выйти</button> :
                    <NavLink
                        exact
                        className="menu-list__link"
                        activeClassName="menu-list__link--active"
                        to="/login"
                    >
                        Войти
                    </NavLink>
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    session: state.session
});
const mapDispatchToProps = (dispatch) => ({
    logOut: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton);
