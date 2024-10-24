import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Offer from './components/Offer';
import Register from './components/Register';
import Reservation from './components/Reservation';
import Suites from './components/Suites';
import Allrooms from './components/Allrooms';
import BookingForm from './components/BookingForm';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Main from './components/Main';
import AdminDashboard from './components/Dashborad';
import ForgotPassword from './components/ForgotPassword';
import Reviews from './components/Reviews';

function App() {
  const initialOptions = {
    clientId: "Adnrk6DEbhOhKGsYGfLTbngdeOQLSHm7AU3yvMkD7cJrv7S8LxQk2pM5iuQaC4YhKTb5avPRDMRn5Qyi",
    currency: "USD",
    intent: "capture",
};
  return (
    <PayPalScriptProvider options={initialOptions} >

    
    <Router>
      <Routes>
        {/*  <Route path="/" element={<Home />} />
        <Route path='/' element={<Main />} />
       <Route path='/admin' element={<AdminDashboard />} />
        <Route path="/rooms" element={<Suites />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path='booking' element={<BookingForm />} /> 
        <Route path="/offer" element={<Offer />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/all-rooms" element={<Allrooms />} /> 
        <Route path="/forgot-password" element={<ForgotPassword />} /> */}
        <Route path='reviews' element={<Reviews />} />
      </Routes>
    </Router>
    </PayPalScriptProvider>
  );
}

export default App;
