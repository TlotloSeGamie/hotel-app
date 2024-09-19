import Footer from "./Footer";
import "./Reservation.css";


const Reservation = () => {
    return (
        <div className="reserve-container">
            <div className="ur-reseve">
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
                        <h5 className="paid">Paid: R483</h5>
                    </div>
                    <div className="contact">
                        <div className="details">
                            <div className="email">
                                <h6 className="mail">Email:</h6>
                                <h6 className="gmail"><u>janedoe@gmail.com</u></h6>
                            </div>
                            <div className="naams">
                                <h6 className="first-naam">First Name:</h6>
                                <h6 className="naam">Jane</h6>
                            </div>
                            <div className="last-name">
                                <h6 className="last-naam">Last Name:</h6>
                                <h6 className="naam">Doe</h6>
                            </div>
                            <div className="phone-no">
                                <h6 className="fone">Contact Phone</h6>
                                <h6 className="num">1234567890</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="complete">
                    <div className="complte">
                        <div className="htag-lines">
                            <div className="line"></div>
                            <h3 className="res
                            
                            
                            
                            
                            
                            
                            
                            
                            ">RESERVATION COMPLETE</h3>
                            <div className="line"></div>
                        </div>
                        <h5 className="sent">We’ve sent a confirmation email with all the details of your stay.Please verify to continue, If you have any questions or need further assistance, feel free to contact us.
                        We look forward to providing you with an unforgettable experience!</h5>
                                        </div>
                    </div>
            </div>
            <Footer />
        </div>
    );
};

export default Reservation;