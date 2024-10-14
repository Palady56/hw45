import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import postReducer from './async';

const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postReducer,
  },
});

export default store;
