import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
    state = {
        redirectToPreviousRoute: false,
        email: '',
        password: ''
    };
    handleChange = (e) => {
        const value = e.currentTarget.value;
        const fieldName = e.currentTarget.dataset.fieldName;
        this.setState(() => ({
            [fieldName]: value
        }));
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        const reg = /.+@.+\..+/i;
        if (!reg.test(email)) {
            this.props.authError('wrong_email');
        } else {
            this.props.logIn(
                {
                    email,
                    password
                },
                () => {
                    this.setState(() => ({ redirectToPreviousRoute: true }));
                },
                () => {
                    this.setState(() => ({ password: '' }));
                });
        }
    };

    render() {
        const { location, errorMsg, isLoading } = this.props;
        const { from } = location.state || { from: { pathname: '/' } };
        const { email, password, redirectToPreviousRoute } = this.state;

        if (redirectToPreviousRoute) {
            return <Redirect to={from}/>;
        }

        return (
            <div>
                {errorMsg && <p className="popup-error">{errorMsg}</p>}
                <form
                    className="form"
                    onSubmit={this.handleSubmit}
                >
                    <div className="form__group">
                        <label className="form__label" htmlFor="email">E-mail</label>
                        <input
                            type="text"
                            className="form__field"
                            data-field-name="email"
                            id="email"
                            value={email}
                            placeholder="Введите e-mail"
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="form__group form__group--last">
                        <label className="form__label" htmlFor="password">Пароль</label>
                        <input
                            type="password"
                            className="form__field"
                            data-field-name="password"
                            id="password"
                            value={password}
                            placeholder="Введите пароль"
                            onChange={this.handleChange}
                        />
                    </div>

                    <button
                        className="btn"
                        type="submit"
                        disabled={(function () {
                            return email === '' || password === '' || isLoading === true;
                        }())}
                    >
                        {isLoading ? 'Подождите...' : 'Войти'}
                    </button>
                </form>
            </div>
        );
    }
}

Login.propTypes = {
    errorMsg: PropTypes.string,
    logIn: PropTypes.func.isRequired,
    authError: PropTypes.func.isRequired
};

export default Login;
