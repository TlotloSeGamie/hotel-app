import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from '../redux/authSlice';
import dbSliceReducer from './dbSlice';
import bookingSlice from './bookingSlice';



const rootReducer = combineReducers({
  auth: authReducer,
  data: dbSliceReducer,
  booking: bookingSlice

})

export const store = configureStore({
  reducer: rootReducer,
});
