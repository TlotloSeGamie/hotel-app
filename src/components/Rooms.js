import "./Rooms.css";
import { FaBath, FaBed } from "react-icons/fa";
import executive from "../images/executive suite/I-Resort-Crete-Gold-Double-Room-Sea-View-1.jpg";

const Rooms = () => {
    const roomData = [
        {
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
        },
        {
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
        },
        {
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
        },
        {
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
        },
        {
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
        },
        {
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
        }
    ];

    return (
        <div className="rooms-container">
            {roomData.map((room, index) => (
                <div className="room-card" key={index}>
                    <div className="image-container">
                        <img src={room.image} alt={room.name} />
                    </div>
                    <div className="room-content">
                        <div className="name">
                            <h4>{room.name}</h4>
                            <h4>{room.price}</h4>
                        </div>
                        <div className="bed">
                            <h5><FaBath className="icon-style" /> {room.bathroom}</h5>
                            <h5><FaBed className="icon-style" /> {room.bedroom}</h5>
                        </div>
                        <button className="btn">Book now</button>
                    </div>
                </div>
            ))}
            <div className="button">SEE ALL SUITES</div>
        </div>
    );
};

export default Rooms;
