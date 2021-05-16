/* eslint-disable indent */
import {LOGIN, LOGOUT, USER_ID} from '../types';

const initialState = {
  authToken: null,
  user_id: null,
};

export const appReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case LOGIN:
      return {...state, authToken: payload};
    case USER_ID:
      return {...state, user_id: payload};
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
