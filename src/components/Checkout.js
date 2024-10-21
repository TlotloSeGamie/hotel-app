import "./Checkout.css";
import { useLocation } from "react-router-dom"; 
import Navbar from "./Navbar";
import Footer from "./Footer";
import BookingForm from "./BookingForm";
import { useState, useEffect } from "react";
// import 

const Checkout = () => {
  const location = useLocation();
  const room = location.state.room;
  const initialNumGuests = location.state.numGuests;
  const initialNumChildren = location.state.numChildren;

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  
  const [checkInDate, setCheckInDate] = useState(today.toISOString().split('T')[0]); 
  const [checkOutDate, setCheckOutDate] = useState(tomorrow.toISOString().split('T')[0]); 
  const [numGuests, setNumGuests] = useState(initialNumGuests);
  const [numChildren, setNumChildren] = useState(initialNumChildren);
  const [numRooms, setNumRooms] = useState(1);

  const calculateDaysBooked = (inDate, outDate) => {
    const checkIn = new Date(inDate);
    const checkOut = new Date(outDate);
    const timeDiff = Math.abs(checkOut - checkIn);
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); 
  };

  const [totalDays, setTotalDays] = useState(calculateDaysBooked(checkInDate, checkOutDate));
  const totalPrice = totalDays * room.price * numRooms; 

  useEffect(() => {
    setTotalDays(calculateDaysBooked(checkInDate, checkOutDate)); 
  }, [checkInDate, checkOutDate]);

  localStorage.setItem('roomDetails', JSON.stringify({
    room
  }));

  return (
    <div className="checkout-page">
      <Navbar />
      <h1>Checkout</h1>
      <div className="checkout-container">
        <div className="select-opt">
          <div className="room-details">
            <h2>{room.name}</h2>
            <p>{room.description}</p>
            <p><strong>Price per Night: </strong>R{room.price}</p>
            <p><strong>Number of Rooms: </strong>{numRooms}</p>
            <p><strong>Total Days Booked: </strong>{totalDays}</p>
            <p><strong>Number of Guests: </strong>{numGuests}</p>
            <p><strong>Number of Children: </strong>{numChildren}</p>
            <p><strong>Total Price: </strong>R{totalPrice.toFixed(2)}</p>
          </div>
          <div className="guest-container">
            <h6><b>Rooms:</b></h6>
            <select
              className="guest-input"
              value={numRooms}
              onChange={(e) => setNumRooms(Number(e.target.value))} 
            >
              {[...Array(10).keys()].map(num => ( 
                <option key={num + 1} value={num + 1}>{num + 1} Room{num > 0 ? 's' : ''}</option>
              ))}
            </select>
            <h6><b>Guests:</b></h6>
            <select
              className="guest-input"
              value={numGuests}
              onChange={(e) => setNumGuests(Number(e.target.value))}
            >
              <option value="" disabled>Select Guests</option>
              {[...Array(15).keys()].map(num => (
                <option key={num + 1} value={num + 1}>{num + 1} Guests</option>
              ))}
            </select>
            <h6><b>Children:</b></h6>
            <select
              className="guest-input"
              value={numChildren}
              onChange={(e) => setNumChildren(Number(e.target.value))}
            >
              <option value="" disabled>Select Children</option>
              {[...Array(15).keys()].map(num => (
                <option key={num} value={num}>{num} Children</option>
              ))}
            </select>
          </div>
        </div>
        <div className="booking-section">
          <div className="date-selection">
            <label>Check-in Date:</label>
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              min={today.toISOString().split('T')[0]} 
            />
            <label>Check-out Date:</label>
            <input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              min={tomorrow.toISOString().split('T')[0]} 
            />
          </div>
          <BookingForm roomDetails={room} totalDays={totalDays} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
