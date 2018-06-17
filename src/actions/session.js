export const LOG_OUT = 'LOG_OUT';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_LOADING = 'AUTH_LOADING';
const URL = 'https://mysterious-reef-29460.herokuapp.com/api/v1/validate';

export const authSuccess = (response) => ({
    type: AUTH_SUCCESS,
    payload: { id: response.data.id }
});

export const authError = (error) => ({
    type: AUTH_ERROR,
    payload: { error }
});

export const authIsLoading = (bool) => ({
    type: AUTH_LOADING,
    payload: { isLoading: bool }
});

export function logIn(params, cbOnSuccess, cbOnError) {
    return (dispatch) => {
        dispatch(authIsLoading(true));
        fetch(URL, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: params.email,
                password: params.password
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response;
        })
        .then(response => response.json())
        .then((json) => {
            if (json.status === 'ok') {
                dispatch(authIsLoading(false));
                dispatch(authSuccess(json));
                cbOnSuccess();
            } else if (json.status === 'err') {
                dispatch(authError(json.message));
                cbOnError();
                throw new Error(json.message);
            }
        }).catch(error => {
            dispatch(authIsLoading(false));
            dispatch(authError(error.message));
        });
    };
}

export const logOut = () => ({
    type: LOG_OUT
});
