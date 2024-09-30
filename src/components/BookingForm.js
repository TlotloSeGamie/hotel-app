import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
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
];

const BookingForm = ({ roomDetails }) => {
  const [title, setTitle] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [altEmail, setAltEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [altPhone, setAltPhone] = useState('');
  const [country, setCountry] = useState('');
  
  const navigate = useNavigate(); 

  const handleBookingSubmit = async (e) => {
    // e.preventDefault();
    if (!firstName || !lastName || !email || !phone || !country) {
      alert('Please fill in all required details.');
      return;
    }

    const bookingDetails = {
      title,
      firstName,
      lastName,
      email,
      altEmail,
      phone,
      altPhone,
      country,
      roomDetails
    };
    navigate('/reservation');
  };

  
  const handleData=(()=>{
    localStorage.setItem('bookingDetails', JSON.stringify({
      title,
      firstName,
      lastName,
      email,
      altEmail,
      phone,
      altPhone,
      country,
      roomDetails
    }));
  })


  return (
    <div className="checkout-container">
      <div className="booking-form" >
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
            <label>Alternative Phone Number:</label>
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
        
        <button type="submit" className="complete-btn" onClick={()=>{handleData(); handleBookingSubmit()}}>Book Now</button>
      </div>
    </div>
  );
};

export default BookingForm;
