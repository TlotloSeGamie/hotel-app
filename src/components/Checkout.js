import "./Checkout.css";
import { useNavigate, useLocation } from "react-router-dom"; 
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState, useEffect } from 'react';
import { db } from "../config/firebase";
import BookingForm from "./BookingForm";

const Checkout = ({ roomId }) => {
  const [roomDetails, setRoomDetails] = useState(null);


  const navigate = useNavigate();
  const location = useLocation();
  const room=location.state.room
  console.log('location', location.state.room)

  // useEffect(() => {
  //   const fetchRoomDetails = async () => {
  //     try {
  //       console.log("Fetching room details for roomId:", roomId);
  //       const roomRef = db.collection('rooms').doc(roomId);
  //       const roomSnapshot = await roomRef.get();
  //       console.log("Room snapshot:", roomSnapshot);
  //       if (roomSnapshot.exists) {
  //         setRoomDetails(roomSnapshot.data());
  //       } else {
  //         console.log("Room does not exist");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching room details: ", error);
  //     }
  //   };

  //   fetchRoomDetails();
  // }, [roomId]);

  // if (!roomDetails) {
  //   return <div>Loading room details...</div>;
  // }

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <div className="room-details">
        <h2>{room.name}</h2>
        <p>{room.description}</p>
        <p><strong>Price: </strong>${room.price}</p>
        {/* <p><strong>Amenities: </strong>{room.amenities.join(', ')}</p> */}
      </div>

      {/* Continue to booking form */}
      <BookingForm roomDetails={room} />
    </div>
  );
};

export default Checkout;
