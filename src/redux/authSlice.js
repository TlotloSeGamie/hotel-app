// src/redux/authSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut,sendPasswordResetEmail,} from "firebase/auth";
import { auth, db } from '../config/firebase';
import { setDoc, doc, getDoc, updateDoc  } from "firebase/firestore";

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  loading: false,
  error: null,
  message: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    setUser(state, action) {
      state.user = action.payload;
      state.loading = false;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
      state.message = null;
    },
    setMessage(state, action) {
      state.message = action.payload;
      state.loading = false;
      state.error = null;
    },
    clearUser(state) {
      state.user = null;
      state.loading = false;
      state.error = null;
      state.message = null;
      localStorage.removeItem('user');
    },
  },
});

export const { setLoading, setUser, setError, clearUser, setMessage } = authSlice.actions;


export const sendResetLink = (email) => async (dispatch) => {
  dispatch(setLoading());
  try {
    await sendPasswordResetEmail(auth, email);
    dispatch(setMessage("Reset link sent! Check your email."));
  } catch (error) {
    dispatch(setError(error.message));
  }
};


export const fetchUserDetails = (uid) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const userDoc = await getDoc(doc(db, "users", uid));
    if (userDoc.exists()) {
      const userData = userDoc.data();
      const combinedUser = {
        uid: uid,
        email: userData.email,
        userName: userData.userName,
        phone: userData.phone,
        profileImage: userData.profileImage || null,
      };
      dispatch(setUser(combinedUser));
    } else {
      dispatch(setError("No user data found"));
    }
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const updateProfileImage = (uid, imageUrl) => async (dispatch) => {
  try {
    await updateDoc(doc(db, "users", uid), { profileImage: imageUrl });
    // Optionally, you can fetch user details again to refresh the user state
    dispatch(fetchUserDetails(uid));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const signUp = ({ email, password, phone, userName }) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await setDoc(doc(db, "users", user.uid), {
      userName: userName,
      phone: phone,
      email: email,
      password:password,
    });
    dispatch(fetchUserDetails(user.uid));
  } catch (error) {
    dispatch(setError(error.message));
  }
};


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



export const performLogout = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch(clearUser());
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const resetPassword = ({ email }) => async (dispatch) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("jjjjjj")
    dispatch(setUser());
  } catch (error) {
    console.error("Error sending password reset email:", error.message);
  }
};
export default authSlice.reducer;
