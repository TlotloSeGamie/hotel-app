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

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Suites />} />
        <Route path="/" element={<Suites />} />
        <Route path="/checkout" element={<Checkout />} /> 
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
