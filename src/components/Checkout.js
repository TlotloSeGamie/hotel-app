import "./Checkout.css";
import { useLocation } from "react-router-dom"; 
import Navbar from "./Navbar";
import Footer from "./Footer";
import BookingForm from "./BookingForm";
import { useState } from "react";

const Checkout = () => {
  const location = useLocation();
  const room = location.state.room;
  const initialCheckInDate = location.state.checkInDate;
  const initialCheckOutDate = location.state.checkOutDate;
  const numGuests = location.state.numGuests;
  const numChildren = location.state.numChildren;

  const [checkInDate, setCheckInDate] = useState(initialCheckInDate);
  const [checkOutDate, setCheckOutDate] = useState(initialCheckOutDate);

  // Calculate total number of days booked
  const calculateDaysBooked = (inDate, outDate) => {
    const checkIn = new Date(inDate);
    const checkOut = new Date(outDate);
    const timeDiff = Math.abs(checkOut - checkIn);
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
  };

  // Total price calculation
  const totalDays = calculateDaysBooked(checkInDate, checkOutDate);
  const totalPrice = totalDays * room.price;

  return (
    <div className="checkout-page">
      <Navbar />
      <h1>Checkout</h1>
      <div className="checkout-container">
        <div className="room-details">
          <h2>{room.name}</h2>
          <p>{room.description}</p>
          <p><strong>Price per Night: </strong>R{room.price}</p>
          <p><strong>Total Days Booked: </strong>{totalDays}</p>
          <p><strong>Number of Guests: </strong>{numGuests}</p>
          <p><strong>Number of Children: </strong>{numChildren}</p>
          <p><strong>Total Price: </strong>R{totalPrice.toFixed(2)}</p>
        </div>
        <div className="booking-section">
          <div className="date-selection">
            <label>Check-in Date:</label>
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
            <label>Check-out Date:</label>
            <input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
          </div>
          {/* Pass totalDays to BookingForm */}
          <BookingForm roomDetails={room} totalDays={totalDays} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
