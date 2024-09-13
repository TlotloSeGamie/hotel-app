import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Offer from './components/Offer';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Offer />
    </div>
  );
}

export default App;
