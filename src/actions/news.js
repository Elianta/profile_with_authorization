export const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS';
export const GET_NEWS_ERROR = 'GET_NEWS_ERROR';
export const NEWS_IS_LOADING = 'NEWS_IS_LOADING';

const URL = 'https://mysterious-reef-29460.herokuapp.com/api/v1/news';

export const getNewsSuccess = (response) => ({
    type: GET_NEWS_SUCCESS,
    payload: { data: response }
});

export const getNewsError = (error) => ({
    type: GET_NEWS_ERROR,
    payload: { error }
});

export const newsIsLoading = (bool) => ({
    type: NEWS_IS_LOADING,
    payload: { isLoading: bool }
});

export function getNews() {
    return (dispatch) => {
        dispatch(newsIsLoading(true));
        fetch(URL, { method: 'get' })
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response;
        })
        .then(response => response.json())
        .then((json) => {
            if (json.status === 'ok') {
                dispatch(newsIsLoading(false));
                dispatch(getNewsSuccess(json.data));
            } else if (json.status === 'err') {
                dispatch(getNewsError(json.message));
                throw new Error(json.message);
            }
        })
        .catch(error => {
            dispatch(newsIsLoading(false));
            dispatch(getNewsError(error.message));
        });
    };
}
