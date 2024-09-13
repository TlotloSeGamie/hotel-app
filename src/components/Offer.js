import "./Offer.css"
import scndfloor from "../images/202209132306370.lagoon_b.png"; 

const Offer = () => {
    return (
        <div className="offer-container">
            <div className="top">
                <div className="image">
                    <img src={scndfloor} />
                </div>
                <div className="text">
                    <h2><u>Your escape to luxury</u></h2>
                    <h3>Your Escape to Luxury and Tranquility
                        At Da Gamie Hotel & Resort, we believe in creating experiences that go beyond expectations. Whether you're here for a
                        relaxing retreat, a family vacation, or a business trip, our resort promises to deliver the perfect balance of comfort, luxury, and adventure.
                    </h3>
                </div>
            </div>
            <div className="middle">
                <h4><span>What do we offer</span> <br></br>There are many variations of passages  
                </h4>
                
            </div>
            <div className="bottom">
                <div className="confortable">
                    <h5><u>Comfortable rest</u>
                        <br></br>
                            At Da Gamie Hotel & Resort, relaxation is key. Our spacious rooms, with plush bedding and serene décor, offer a peaceful retreat. Enjoy restful nights
                            and wake up refreshed, or unwind outdoors in our tranquil gardens and poolside lounges.</h5>
                </div>
                <div className="spa">
                    <h5><u>Spa Treatments</u>
                        <br></br>
                        Relax and rejuvenate with soothing spa treatments at Da Gamie. Our expert therapists offer massages,
                        facials, and holistic therapies designed to refresh your body and mind.</h5>
                </div>
                <div className="food">
                    <h5><u>Delicious Food</u>
                        <br></br>
                        Indulge in delicious, locally-sourced meals at Da Gamie. From gourmet fine dining to casual bites, our restaurants 
                        offer diverse, flavorful dishes that cater to every taste.</h5>
                </div>
                <div className="best">
                   <h5>
                        <u>Best Service</u>
                            <br></br>
                            We pride ourselves on providing exceptional service at Da Gamie. Our attentive staff ensures every detail is handled, offering
                            personalized care to make your stay seamless and enjoyable.
                    </h5>
                </div>
            </div>
        </div>
    )
};

export default Offer;