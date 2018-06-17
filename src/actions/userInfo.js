export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_ERROR = 'GET_USER_INFO_ERROR';
export const USER_INFO_LOADING = 'USER_INFO_LOADING';

const URL = 'https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/';
const sortSocialData = ({ social }) => {
    return social.reduce((prev, current) => {
        return current.label === 'web' ? [current, ...prev] : prev.concat(current);
    }, []);
};

export const getUserInfoSuccess = (response) => ({
    type: GET_USER_INFO_SUCCESS,
    payload: { userInfo: response }
});

export const getUserInfoError = (error) => ({
    type: GET_USER_INFO_ERROR,
    payload: { error }
});

export const userInfoIsLoading = (bool) => ({
    type: USER_INFO_LOADING,
    payload: { isLoading: bool }
});

export function getUserInfo() {
    return (dispatch, getState) => {
        dispatch(userInfoIsLoading(true));
        const userID = getState().session.user.name;
        const url = URL + userID;
        fetch(url, {
            method: 'get'
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
                dispatch(userInfoIsLoading(false));
                const sortedData = {...json.data, social: sortSocialData(json.data)};
                dispatch(getUserInfoSuccess(sortedData));
            } else if (json.status === 'err') {
                dispatch(getUserInfoError(json.message));
                throw new Error(json.message);
            }
        }).catch(error => {
            dispatch(userInfoIsLoading(false));
            dispatch(getUserInfoError(error.message));
        });
    };
}
