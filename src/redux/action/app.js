import {LOGIN, LOGOUT, USER_ID} from '../types';

export const appLogin = (authToken) => {
  return (dispatch) => {
    // localStorage.setItem('authToken', authToken);

    dispatch({
      type: LOGIN,
      payload: authToken,
    });
  };
};

export const appUserId = (id) => {
  return (dispatch) => {
    // localStorage.setItem('id', id);

    dispatch({
      type: USER_ID,
      payload: id,
    });
  };
};

export const appLogout = () => {
  return (dispatch) => {
    // localStorage.clear();

    dispatch({
      type: LOGOUT,
      payload: null,
    });
  };
};
