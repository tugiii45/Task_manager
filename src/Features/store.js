import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthSlice';
import taskReducer from './TaskSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
  },
});