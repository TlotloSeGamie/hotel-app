import { createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

const initialState = {
 user:{
    email: "",
    password: ""
 },
 signIn:{
  email:"",
  password:""
 }

}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUp: (state, action) => {
        createUserWithEmailAndPassword (auth, action.payload, action.payload).then(()=> {
            alert("registerd succesfully!")
        }).catch((err)=>{

            console.log(err.message)
        })
    },

    signIn: (state, action) => {
      signInWithEmailAndPassword (auth, action.payload, action.payload).then(() => {
        alert("LoggedIn succesfully!")
      }).catch((err)=>{

        console.log(err.message)
    })
    }
  },
})

// Action creators are generated for each case reducer function
export const { signUp, signIn } = authSlice.actions

export default authSlice.reducer