import "./Checkout.css";
import Navbar from "./Navbar";
import check from "../images/category-page-hotel-resorts-HOTELRES21-003a3718d01346feb614ba07c034b7ae.jpg"


const Checkout = () => {
    return (
        
        <div className="Checkout-container">
           {/*} {<Navbar />}
            <div className="check-img">
                <img src={check} />
            </div>*/}
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
                                    <input
                                        type="radio"
                                        checked="checked"
                                        name="deposit"
                                    />
                                    <span class="checkmark"></span>R483 (deposit)
                                    </label>
                                    <label className="full">
                                    <input
                                        type="radio"
                                        name="full"
                                    />
                                    <span class="checkmark"></span>R3,215 (full)
                                    </label>
                             </div>
                        </div>

                        
                        <div className="method">
                            <h3>PAYMENT METHOD</h3>
                            <select id="payments">
                                <option value="later">Pay later</option>
                                <option value="visa">VISA</option>
                                <option vale="pal">PayPal</option>
                            </select>
                            <div className="statement">
                                <h2>VISA icon here</h2>
                                <h5>Continue completing order with a VISA card</h5>
                            </div>
                            <div className="agree">
                            <label class="agree">
                                <input type="checkbox" />
                                <span class="checkmark"></span> 
                                    I read and agree to the terms & conditions
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            <button className="complete-btn">COMPLETE MY ORDER</button>
            </div>
        </div>
    )
};

export default Checkout;