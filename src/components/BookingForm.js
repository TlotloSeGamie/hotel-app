import React, { useState } from 'react';
import "./BookingForm.css";

const countries = [
  { name: 'United States', code: '+1' },
  { name: 'Canada', code: '+1' },
  { name: 'United Kingdom', code: '+44' },
  { name: 'Australia', code: '+61' },
  { name: 'Germany', code: '+49' },
  { name: 'France', code: '+33' },
  { name: 'India', code: '+91' },
  { name: 'Japan', code: '+81' },
  { name: 'South Africa', code: '+27' },
  // Add more countries as needed
];

const BookingForm = ({ roomDetails }) => {
  const [title, setTitle] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [email, setEmail] = useState('');
  const [altEmail, setAltEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [altPhone, setAltPhone] = useState('');
  const [billingAddress1, setBillingAddress1] = useState({ street: '', city: '', region: '', zip: '' });
  const [billingAddress2, setBillingAddress2] = useState({ street: '', city: '', region: '', zip: '' });
  const [country, setCountry] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !checkInDate || !checkOutDate || !email || !phone || !billingAddress1.street || !billingAddress1.city || !billingAddress1.region || !billingAddress1.zip || !country) {
      alert('Please fill in all required details.');
      return;
    }

    console.log({
      title,
      firstName,
      lastName,
      checkInDate,
      checkOutDate,
      email,
      altEmail,
      phone,
      altPhone,
      billingAddress1,
      billingAddress2,
      country,
      roomDetails
    });

    setBookingSuccess(true);
  };

  return (
    <div className="checkout-container">
      {bookingSuccess ? (
        <div className="success-message">
          <h2>Booking Successful!</h2>
          <p>Thank you for booking with us, {firstName} {lastName}. Your room ({roomDetails.name}) is booked from {checkInDate} to {checkOutDate}.</p>
        </div>
      ) : (
        <form className="booking-form" onSubmit={handleBookingSubmit}>
          <h2>Guest Information</h2>
          <div className="guest-info">
            <div className="form-group">
              <label>Title:</label>
              <select value={title} onChange={(e) => setTitle(e.target.value)} required>
                <option value="">Select a title</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Ms">Ms</option>
                <option value="Dr">Dr</option>
                <option value="Prof">Prof</option>
              </select>
            </div>
            <div className="form-group">
              <label>First Name:</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name:</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          
          <h2>Contact Information</h2>
          <div className="contact-info">
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Alternative Email (Optional):</label>
              <input
                type="email"
                value={altEmail}
                onChange={(e) => setAltEmail(e.target.value)}
                placeholder="Optional"
              />
            </div>
          </div>
          
          <div className="contact-info">
            <div className="form-group">
              <label>Phone Number:</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="123-456-7890"
              />
            </div>
            <div className="form-group">
              <label>Alternative Phone Number (Optional):</label>
              <input
                type="text"
                value={altPhone}
                onChange={(e) => setAltPhone(e.target.value)}
                placeholder="Optional"
              />
            </div>
          </div>
          
          <div className="form-group">
            <label>Country:</label>
            <select value={country} onChange={(e) => setCountry(e.target.value)} required>
              <option value="">Select a country</option>
              {countries.map((countryItem) => (
                <option key={countryItem.name} value={countryItem.name}>{countryItem.name}</option>
              ))}
            </select>
          </div>
          
          <button type="submit" className="complete-btn">Book Now</button>
        </form>
      )}
    </div>
  );
};

export default BookingForm;
