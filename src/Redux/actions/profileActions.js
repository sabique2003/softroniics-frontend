=import { updateProfileApi } from '../../Services/allApis';

export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_ERROR = 'UPDATE_PROFILE_ERROR';

export const updateProfile = (profileData) => async (dispatch) => {
  try {
    const token = sessionStorage.getItem('token');
    const res = await updateProfileApi(profileData, { Authorization: `Bearer ${token}` });
    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: UPDATE_PROFILE_ERROR, payload: error.response.data });
  }
};
