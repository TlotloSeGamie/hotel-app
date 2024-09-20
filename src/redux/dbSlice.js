import { createSlice } from '@reduxjs/toolkit';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../config/firebase';


const initialState = {
  data: [],
  loading: false,
  error: null,
};

const dbSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setData(state, action) {
      state.data = action.payload;
      state.loading = false;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
export const { setLoading, setData, setError } = dbSlice.actions;
export default dbSlice.reducer;
export const fetchData = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const querySnapshot = await getDocs(collection(db, "allRooms")); 
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch(setData(data)); 
  } catch (error) {
    dispatch(setError(error.message));
  }
};