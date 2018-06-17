import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from '../reducers/session';
import profileReducer from '../reducers/userInfo';
import newsReducer from '../reducers/news';

export default () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        combineReducers({
            session: sessionReducer,
            profile: profileReducer,
            news: newsReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};
