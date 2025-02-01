import { registerApi, loginApi } from '../../Services/allApis';
import { REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT, AUTH_ERROR } from './types'; 

export const register = (userData) => async (dispatch) => {
  try {
    const res = await registerApi(userData);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: error.response?.data || 'Server Error' });
  }
};

export const login = (credentials) => async (dispatch) => {
  try {
    const res = await loginApi(credentials);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: error.response?.data || 'Server Error' });
  }
};

export const logout = () => (dispatch) => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
  dispatch({ type: LOGOUT });
};
