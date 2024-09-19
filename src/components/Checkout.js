import "./Checkout.css";
import { useNavigate } from "react-router-dom"; 
import Navbar from "./Navbar";
import Footer from "./Footer";

const Checkout = () => {
    const navigate = useNavigate(); 

    const handleCompleteOrder = () => {
        navigate('/reservation');
    };

    return (
        <div className="Checkout-container">
            {/*<Navbar />*/}  
            <div className="cheque-container">
                
                <div className="cheq">
                    <div className="reserve">
                        <div className="your">
                            <h5>YOUR RESERVATION</h5>
                        </div>
                        <div className="order">
                            <h5>Order #00001</h5>
                        </div>
                    </div>
                    <div className="numbers">
                        <div className="exe">
                            <h5>Executive Suite</h5>
                        </div>
                        <div className="checks">
                            <div className="in">
                                <h5 className="text">Check In:</h5>
                                <h5 className="date">11 Sep 2024</h5>
                            </div>
                            <div className="out">
                                <h5 className="text">Check out:</h5>
                                <h5 className="date">12 Sep 2024</h5>
                            </div>
                            <div className="guest">
                                <h5 className="guests">Guests</h5>
                                <div className="guest-info">
                                    <h5 className="gues">Adult</h5>
                                    <h5 className="no">1</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="amount">
                        <h5 className="total">Total amount: R3,215</h5>
                        <h5 className="paid">Paid: R0</h5>
                    </div>
                </div>
                <div className="info">
                    <div className="contact">
                        <h4>CONTACT INFORMATION</h4>
                        <div className="names">
                            <div className="name">
                                <h5 className="first">First Name:</h5>
                                <h5 className="last">Last Name:</h5>
                            </div>
                            <div className="emails">
                                <h5 className="email">Email:</h5>
                                <h5 className="re-type">Re-type email:</h5>
                            </div>
                            <div className="phone">
                                <h5>Contact Phone:</h5>
                            </div>
                        </div>
                        <div className="pay-now">
                            <h5>Amount to Pay now:</h5>
                            <div className="money">
                                <label className="deposit">
                                    <input type="radio" checked="checked" name="deposit" />
                                    <span className="checkmark"></span>R483 (deposit)
                                </label>
                                <label className="full">
                                    <input type="radio" name="full" />
                                    <span className="checkmark"></span>R3,215 (full)
                                </label>
                            </div>
                        </div>

                        <div className="method">
                            <h3>PAYMENT METHOD</h3>
                            <select id="payments">
                                <option value="later">Pay later</option>
                                <option value="visa">VISA</option>
                                <option value="paypal">PayPal</option>
                            </select>
                            <div className="statement">
                                <h2>VISA icon here</h2>
                                <h5>Continue completing order with a VISA card</h5>
                            </div>
                            <div className="agree">
                                <label className="agree">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                    I read and agree to the terms & conditions
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="complete-btn" onClick={handleCompleteOrder}>COMPLETE MY ORDER</button> {/* Updated */}
            </div>
            <Footer />
        </div>
    );
};

export default Checkout;
