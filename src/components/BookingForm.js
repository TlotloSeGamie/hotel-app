import React, { useState } from 'react';
import "./BookingForm.css";

const BookingForm = ({ roomDetails }) => {
  const [guestName, setGuestName] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    if (!guestName || !checkInDate || !checkOutDate) {
      alert('Please fill in all details.');
      return;
    }

    // Perform booking logic (you might want to store this in Firestore)
    console.log({
      guestName,
      checkInDate,
      checkOutDate,
      roomDetails
    });

    // After successful booking
    setBookingSuccess(true);
  };

  return (
    <div className="Checkout-container">
      {bookingSuccess ? (
        <div className="success-message">
          <h2>Booking Successful!</h2>
          <p>Thank you for booking with us, {guestName}. Your room ({roomDetails.name}) is booked from {checkInDate} to {checkOutDate}.</p>
        </div>
      ) : (
        <form className="booking-form" onSubmit={handleBookingSubmit}>
          <div className="form-group">
            <label>Guest Name:</label>
            <input
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Check-in Date:</label>
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Check-out Date:</label>
            <input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="complete-btn">Book Now</button>
        </form>
      )}
    </div>
  );
};

export default BookingForm;
