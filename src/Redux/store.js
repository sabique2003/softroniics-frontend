import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import authReducer from './reducers/authReducer';
import blogReducer from './reducers/blogReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  blog: blogReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
