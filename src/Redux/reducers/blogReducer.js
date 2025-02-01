import { FETCH_BLOGS_SUCCESS, CREATE_BLOG_SUCCESS } from '../actions/blogActions';

const initialState = {
  blogs: [],
};

export default function blogReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_BLOGS_SUCCESS:
      return {
        ...state,
        blogs: action.payload,
      };
      case CREATE_BLOG_SUCCESS:
  return {
    ...state,
    blogs: [action.payload, ...state.blogs],
  };
    default:
      return state;
  }
}
