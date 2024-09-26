import { useEffect, useState } from 'react';
import Footer from "./Footer";
import PayPalMethod from './PayPalMethod';
import './Reservation.css';

const Reservation = () => {
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    const details = JSON.parse(localStorage.getItem('bookingDetails'));
    if (details) {
      setBookingDetails(details);
      // localStorage.removeItem('bookingDetails'); // Clear data after use
    }
  }, []);

  return (
    <div className="reserve-container">
      <div className='reserve'>
          <div className='book'>
              {bookingDetails ? (
                <div className="success-message">
                  <h2>{bookingDetails.firstName} {bookingDetails.lastName}</h2>
                  <p>Your room ({bookingDetails.roomDetails.name}) is booked. Please complete your booking payment.</p>
              
                  {/* Display additional booking details */}
                  <h3>Booking Details:</h3>
                  <ul>
                    <li><strong>Check-in Date:</strong> {bookingDetails.checkInDate}</li>
                    <li><strong>Check-out Date:</strong> {bookingDetails.checkOutDate}</li>
                    <li><strong>Room Type:</strong> {bookingDetails.roomDetails.type}</li>
                    <li><strong>Number of Guests:</strong> {bookingDetails.numberOfGuests}</li>
                    <li><strong>Total Amount:</strong> {bookingDetails.totalAmount} ZAR</li>
                    {/* Add more details as needed */}
                  </ul>
                </div>
          
          ) : (
            <p>No booking details available.</p>
          )}
          </div>
          <div className='paypal'>
              <PayPalMethod />
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reservation;
