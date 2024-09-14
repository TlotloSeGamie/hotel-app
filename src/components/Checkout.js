import "./Checkout.css";
import Navbar from "./Navbar";
import check from "../images/category-page-hotel-resorts-HOTELRES21-003a3718d01346feb614ba07c034b7ae.jpg"


const Checkout = () => {
    return (
        
        <div className="Checkout-container">
            {<Navbar />}
            <div className="check-img">
                <img src={check} />
            </div>
        </div>
    )
};

export default Checkout;