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
import Rooms from './components/Rooms';

function App() {
  return (
    <div className="App">
     { /* <Navbar />
      <Home />
      <Offer />
      <Rooms />
      <Footer /> 
      <Gallery />
      <Checkout /> */}
      <Reservation />
    </div>
  );
}

export default App;
