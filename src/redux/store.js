import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from '../redux/authSlice';
import dbSliceReducer from './dbSlice';



const rootReducer = combineReducers({
  auth: authReducer,
  data: dbSliceReducer

})

export const store = configureStore({
  reducer: rootReducer,
});
