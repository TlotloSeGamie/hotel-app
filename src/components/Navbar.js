import "./Navbar.css";
import logo from "../images/Screenshot-logo.jpg";

const Navbar = () => {
  return (
    <div className="nav-top">
      <div className="nav-container">
          <img src={logo} alt="Logo" />
        
          <div className="navigation">
          <ul>
            <li><a href="#">ROOMS</a></li>
            <li><a href="#">DINING</a></li>
            <li><a href="#">MEETINGS & EVENTS</a></li>
            <li><a href="#">GALLERY</a></li>
            <li><a href="#">ABOUT US</a></li>
            <li><a href="#">CONTACT US</a></li>
          </ul>
          </div>
          <ul className="logins">
            <li><a href="#" className="login-link">LOGIN</a></li>
            <li><a href="#" className="sign-up-link">SIGN UP</a></li>
          </ul>
      </div>
    </div>
  );
};

export default Navbar;
