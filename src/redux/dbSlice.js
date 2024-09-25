import { createSlice } from '@reduxjs/toolkit';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../config/firebase';
import { addDoc } from 'firebase/firestore';


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
    console.log("Error fetching rooms", error);
    // dispatch(setError(error.message));
  }
};

export const addBookings = (room , price, totalDays, numGuests, numChildren, totalPrice, checkInDate, checkOutDate, title, firstName, lastName, email, phone, country) => async (dispatch) => {
  try {
    dispatch(setLoading());
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "bookings"), {
      room: room,
      price: price,
      totalDays: totalDays,
      numGuests: numGuests,
      numChildren: numChildren,
      totalPrice:totalPrice,
      title: title,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneL: phone,
      country: country,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    dispatch(setError(error.message));
  }
}