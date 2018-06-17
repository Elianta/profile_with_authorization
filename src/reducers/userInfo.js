import { GET_USER_INFO_SUCCESS, GET_USER_INFO_ERROR, USER_INFO_LOADING } from '../actions/userInfo';

const initialState = {
    userInfo: {
        userID: null,
        city: undefined,
        languages: [],
        social: []
    },
    isLoading: false,
    errorMsg: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_INFO_SUCCESS:
            return {
                ...state,
                userInfo: { ...action.payload.userInfo },
                errorMsg: ''
            };
        case GET_USER_INFO_ERROR:
            return {
                ...state,
                errorMsg: action.payload.error
            };
        case USER_INFO_LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                errorMsg: ''
            };
        default:
            return state;
    }
};
