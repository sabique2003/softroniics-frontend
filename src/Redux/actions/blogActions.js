import { createBlogApi, allBlogApi } from '../../Services/allApis';

export const CREATE_BLOG_SUCCESS = 'CREATE_BLOG_SUCCESS';
export const FETCH_BLOGS_SUCCESS = 'FETCH_BLOGS_SUCCESS';
export const FETCH_BLOGS_FAILURE = 'FETCH_BLOGS_FAILURE';

export const createBlog = (blogData) => async (dispatch) => {
  try {
    const token = sessionStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };

    const res = await createBlogApi(blogData, headers);
    if (res.status === 200) {
      dispatch({ type: CREATE_BLOG_SUCCESS, payload: res.data });
    } else {
      console.error('Failed to create blog:', res);
    }
  } catch (error) {
    console.error('Error creating blog:', error);
  }
};

export const fetchBlogs = () => async (dispatch) => {
  try {
    const token = sessionStorage.getItem('token');
    if (!token) {
      console.error('No token found');
      dispatch({ type: FETCH_BLOGS_FAILURE });
      return;
    }

    const headers = { Authorization: `Bearer ${token}` };
    const res = await allBlogApi(headers);

    if (res.status === 200) {
      dispatch({ type: FETCH_BLOGS_SUCCESS, payload: res.data });
    } else {
      console.error('Failed to fetch blogs:', res);
      dispatch({ type: FETCH_BLOGS_FAILURE });
    }
  } catch (error) {
    console.error('Error fetching blogs:', error);
    dispatch({ type: FETCH_BLOGS_FAILURE });
  }
};
