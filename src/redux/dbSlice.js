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
    addBookingToState(state, action) {
      state.data.push(action.payload); 
    },
  },
});
export const { setLoading, setData, setError, addBookingToState } = dbSlice.actions;
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

// export const addBookings = (room , price, totalDays, numGuests, numChildren, totalPrice, checkInDate, checkOutDate, title, firstName, lastName, email, phone, country) => async (dispatch) => {
//   try {
//     dispatch(setLoading());
//     // Add a new document with a generated id.
//     const docRef = await addDoc(collection(db, "bookings"), {
//       room: room,
//       price: price,
//       totalDays: totalDays,
//       numGuests: numGuests,
//       numChildren: numChildren,
//       totalPrice:totalPrice,
//       checkInDate: checkInDate,
//       checkOutDate: checkOutDate,
//       title: title,
//       firstName: firstName,
//       lastName: lastName,
//       email: email,
//       phoneL: phone,
//       country: country,
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (error) {
//     dispatch(setError(error.message));
//   }
// }
export const addBookings = async (dispatch,bookingData) => {
  try {
    dispatch(setLoading());
    console.log("Data to push:", bookingData);
    await addDoc(collection(db, "bookings"), bookingData);
    console.log("Booking added successfully!");
    dispatch(fetchData()); 
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const addBookingSuccess = () => ({
  type: 'ADD_BOOKING_SUCCESS',
});

export const getBookings = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const querySnapshot = await getDocs(collection(db, "bookings"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch(setData(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const getUsers = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("Fetched users:", data);  
    dispatch(setData(data));
  } catch (error) {
    console.log("Error fetching users:", error);  
    dispatch(setError(error.message));
  }
};

