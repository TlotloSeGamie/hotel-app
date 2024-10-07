import { createSlice } from "@reduxjs/toolkit";
import { getDocs, collection, doc,addDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { Children } from "react";


const initialState={
    data:[],
    list: [],
    room: [],
    loading:false,
    error:null,
    totalRooms: 0, 
    totalUsers: 0, 
    bookedUsers: 0,
    totalPrice: 0,
}

export const BookingSlice=createSlice({
    name:"booking",
    initialState,
    reducers:{
        setLoading(state){
            state.loading=true;
            state.error=null;
        },
        setError(state,action){
            state.error=action.payload;
            state.loading=false;
        },
        setData(state,action){
            state.data=action.payload;
            state.loading=false;
        } ,

        setUsers(state,action){
            state.list=action.payload;
            state.loading=false;
        } ,

        setRooms(state,action){
            state.room=action.payload;
            state.loading=false;
        },
        setSummary(state, action) {
            const { totalRooms, totalUsers, bookedUsers, totalPrice } = action.payload;
            state.totalRooms = totalRooms;
            state.totalUsers = totalUsers;
            state.bookedUsers = bookedUsers;
            state.totalPrice = totalPrice;
        }
        
    }
})

export const { setLoading, setData, setError, setUsers, setRooms, setSummary } = BookingSlice.actions

export default BookingSlice.reducer


export const AddToFireStrore=async (roomDetails, bookingDetails, extraDetails,dispatch)=>{
    dispatch(setLoading())
    console.log("detILS:",{
        "title": bookingDetails.title,
        "Firstname": bookingDetails.firstName,
        "Lastname": bookingDetails.lastName,
        "Email": bookingDetails.email,
        "phone": bookingDetails.phone,
        "Price": roomDetails.room.price,
        "Guest": extraDetails.numGuests,
        "Children": extraDetails.numChildren,
        "Paid": "Yes"
        })
    // console.log("ROOM detILS:",roomDetails)
    try{
        await addDoc(collection(db, "Bookings"), {
            "title": bookingDetails.title,
            "Firstname": bookingDetails.firstName,
            "Lastname": bookingDetails.lastName,
            "Email": bookingDetails.email,
            "phone": bookingDetails.phone,
            "Price": roomDetails.room.price,
            "Guests": extraDetails.numGuests,
            "Children": extraDetails.numChildren,
            "checkIn": extraDetails.checkInDate,
            "CheckOut": extraDetails.checkOutDate,
            "Total":extraDetails.totalPrice,
            "Paid": "Yes"
            });
        dispatch(setData({
            "title": bookingDetails.title,
            "Firstname": bookingDetails.firstName,
            "Lastname": bookingDetails.lastName,
            "Email": bookingDetails.email,
            "phone": bookingDetails.phone,
            "Price": roomDetails.price,
            "Guest": bookingDetails.numGuest,
            "Children": bookingDetails.numChildren,
            "Paid": "Yes"
            }));
    }
    catch(error){
        dispatch(setError(error.message));
    }

}

export const fetchDataFirestore=async(dispatch)=>{
    dispatch(setLoading())
    try{
        const docSnap = await getDocs(collection(db,"Bookings"));
        if (docSnap.docs.length>0) {
            const data=docSnap.docs.map((doc)=>({
                id: doc.id,
                ...doc.data(),
            }));
            dispatch(setData(data));
          console.log("Document data is:", docSnap.docs);
        } else {
          console.log("No such document!");
        }
    }
    catch(error){
        dispatch(setError(error.message));
    }
  }

  export const fetchUsers=async(dispatch)=>{
    dispatch(setLoading())
    try{
        const docSnap = await getDocs(collection(db,"users"));
        if (docSnap.docs.length>0) {
            const data=docSnap.docs.map((doc)=>({
                id: doc.id,
                ...doc.data(),
            }));
            dispatch(setUsers(data));
          console.log("Document data is:", docSnap.docs);
        } else {
          console.log("No such document!");
        }
    }
    catch(error){
        dispatch(setError(error.message));
    }
  }

  export const fetchRooms=async(dispatch)=>{
    dispatch(setLoading())
    try{
        const docSnap = await getDocs(collection(db,"allRooms"));
        if (docSnap.docs.length>0) {
            const data=docSnap.docs.map((doc)=>({
                id: doc.id,
                ...doc.data(),
            }));
            dispatch(setData(data));
          console.log("Room data is:", docSnap.docs);
        } else {
          console.log("No Rooms!");
        }
    }
    catch(error){
        dispatch(setError(error.message));
    }
  };

  export const fetchSummaryData = async (dispatch) => {
    dispatch(setLoading());
    try {
        const bookingsSnapshot = await getDocs(collection(db, "Bookings"));
        const usersSnapshot = await getDocs(collection(db, "users"));
        const roomsSnapshot = await getDocs(collection(db, "rooms")); // Assuming "rooms" is your collection for rooms

        const bookings = bookingsSnapshot.docs.map((doc) => doc.data());
        const totalRooms = roomsSnapshot.docs.length;
        const totalUsers = usersSnapshot.docs.length;
        const bookedUsers = new Set(bookings.map((booking) => booking.Email)).size;
        const totalPrice = bookings.reduce((sum, booking) => sum + (parseFloat(booking.Price) || 0), 0);

        dispatch(setSummary({ totalRooms, totalUsers, bookedUsers, totalPrice }));
    } catch (error) {
        dispatch(setError(error.message));
    }
};