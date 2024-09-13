import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Offer from './components/Offer';
import Register from './components/Register';
import Rooms from './components/Rooms';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Offer />
      <Rooms />
      <Footer />
    </div>
  );
}

export default App;
