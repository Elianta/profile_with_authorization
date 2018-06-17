import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from './containers/PrivateRoute';
import Home from './components/Home';
import NewsContainer from './containers/NewsContainer';
import LoginContainer from './containers/LoginContainer';
import ProfileContainer from './containers/ProfileContainer';
import NotFound from './components/NotFound';
import Navigation from './components/Navigation';
import LoginButton from './components/LoginButton';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const app = () => (
    <React.Fragment>
        <header className="page-header">
            <Navigation
                list={[
                    {label: 'На главную', path: '/'},
                    {label: 'Новости', path: '/news'},
                    {label: 'Профиль', path: '/profile'}
                ]}
            />
            <div className="menu-list">
                <LoginButton/>
            </div>
        </header>

        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/news" component={NewsContainer}/>
            <Route path="/login" component={LoginContainer}/>
            <PrivateRoute path="/profile" component={ProfileContainer}/>
            <Route component={NotFound}/>
        </Switch>
    </React.Fragment>
);

export default app;
