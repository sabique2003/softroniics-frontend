import {
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    LOGOUT,
    AUTH_ERROR,
  } from '../actions/types';
  
  const initialState = {
    token: sessionStorage.getItem('token'),
    isAuthenticated: false,
    user: null,
    loading: true,
    error: null,
  };
  
  export default function authReducer(state = initialState, action) {
    switch (action.type) {
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
        sessionStorage.setItem('token', action.payload.token);
        return {
          ...state,
          token: action.payload.token,
          isAuthenticated: true,
          user: action.payload.user,
          loading: false,
          error: null,
        };
      case LOGOUT:
      case AUTH_ERROR:
        sessionStorage.removeItem('token');
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          user: null,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  }
  