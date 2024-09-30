// src/redux/authSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut 
} from 'firebase/auth';
import { auth, db } from '../config/firebase';
import { setDoc, doc, getDoc } from "firebase/firestore"; 

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setUser(state, action) {
      state.user = action.payload;
      state.loading = false;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    clearUser(state) {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { setLoading, setUser, setError, clearUser } = authSlice.actions;

// Action to fetch user details from Firestore
export const fetchUserDetails = (uid) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const userDoc = await getDoc(doc(db, "users", uid));
    if (userDoc.exists()) {
      const userData = userDoc.data();
      // Combine Firebase Auth user data with Firestore user data
      const combinedUser = {
        uid: uid,
        email: userData.email,
        userName: userData.userName,
        phone: userData.phone,
      };
      dispatch(setUser(combinedUser));
    } else {
      dispatch(setError("No user data found"));
    }
  } catch (error) {
    dispatch(setError(error.message));
  }
};

// Sign up action
export const signUp = ({ email, password, phone, userName }) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    // Use setDoc with uid as document ID
    await setDoc(doc(db, "users", user.uid), {
      userName: userName,
      phone: phone,
      email: email,
    });
    // Fetch the user details from Firestore
    dispatch(fetchUserDetails(user.uid));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

// Sign in action
export const signIn = ({ email, password }) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    // Fetch the user details from Firestore
    dispatch(fetchUserDetails(user.uid));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

// Logout action
export const performLogout = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch(clearUser());
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export default authSlice.reducer;
