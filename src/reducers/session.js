import { AUTH_SUCCESS, LOG_OUT, AUTH_ERROR, AUTH_LOADING } from '../actions/session';

const initialState = {
    user: null,
    isLoading: false,
    errorMsg: ''
};
export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                user: {
                    name: action.payload.id
                },
                errorMsg: ''
            };
        case AUTH_ERROR:
            return {
                ...state,
                errorMsg: action.payload.error
            };
        case AUTH_LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                errorMsg: ''
            };
        case LOG_OUT:
            return {
                ...state,
                user: null,
                errorMsg: ''
            };
        default:
            return state;
    }
};
