import { GET_NEWS_SUCCESS, GET_NEWS_ERROR, NEWS_IS_LOADING } from '../actions/news';

const initialState = {
    data: [],
    isLoading: false,
    errorMsg: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWS_SUCCESS:
            return {
                ...state,
                data: [...action.payload.data],
                errorMsg: ''
            };
        case GET_NEWS_ERROR:
            return {
                ...state,
                errorMsg: action.payload.error
            };
        case NEWS_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                errorMsg: ''
            };
        default:
            return state;
    }
};
