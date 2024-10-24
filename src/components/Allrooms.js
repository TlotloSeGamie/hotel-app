import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Rooms.css";
import { FaBath, FaBed, FaUserAlt, FaHeart, FaShareAlt } from "react-icons/fa";
import goldexecutive from "../images/rooms/960x0.webp";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { fetchData } from "../redux/dbSlice";
import { addLikedRooms } from "../redux/bookingSlice";

const Allrooms = () => {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState(today.toISOString().split('T')[0]);
  const [checkOutDate, setCheckOutDate] = useState("");
  const [numGuests, setNumGuests] = useState(1);
  const [numRooms, setNumRooms] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [likedRooms, setLikedRooms] = useState({}); // Track liked rooms by ID
  const [isShareOpen, setIsShareOpen] = useState(false);

  const { data, loading, error } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (checkInDate && checkOutDate) {
      const filtered = data.filter((room) => {
        return (
          !room.booked || (room.booked && room.bookingDate !== checkInDate)
        );
      });
      setFilteredRooms(filtered);
    } else {
      setFilteredRooms(data);
    }
  }, [checkInDate, checkOutDate, data]);

  const openModal = (room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
    setCheckInDate(today.toISOString().split('T')[0]);
    setCheckOutDate(tomorrow.toISOString().split('T')[0]);
    setNumGuests(1);
    setNumRooms(1);
    setNumChildren(0);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRoom(null);
    setTotalPrice(0);
  };

  const toggleLike = (roomDetails) => {
    const isLiked = likedRooms[roomDetails.id];
    if (isLiked) {
      const newLikedRooms = { ...likedRooms };
      delete newLikedRooms[roomDetails.id];
      setLikedRooms(newLikedRooms);
    } else {
      setLikedRooms({ ...likedRooms, [roomDetails.id]: true });
      handleLikeRoom(roomDetails);
    }
  };

  const handleShare = async (room) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Check out this room: ${room.name}`,
          text: `Room details: Flooring - ${room.flooring}, View - ${room.view}, Accessibility - ${room.accessibility}`,
          url: window.location.href,
        });
        console.log("Content shared successfully");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      console.error("Web Share API not supported in this browser");
    }
  };

  const handleLikeRoom = (roomDetails) => {
    const bookingDetails = {
      roomId: roomDetails.id,
      roomName: roomDetails.name,
    };
    console.log("liked",roomDetails);
    
    dispatch(addLikedRooms(bookingDetails));
  };


  const calculatePrice = () => {
    if (checkInDate && checkOutDate && selectedRoom) {
      const checkIn = new Date(checkInDate);
      const checkOut = new Date(checkOutDate);
      const diffTime = Math.abs(checkOut - checkIn);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      const totalCost = diffDays * selectedRoom.price * numRooms;
      setTotalPrice(totalCost);
    } else {
      setTotalPrice(0);
    }
  };

  useEffect(() => {
    calculatePrice();
  }, [checkInDate, checkOutDate, numRooms, selectedRoom]);

  const handleReserveNow = () => {
    const bookingDetails = {
      firstName: "User's First Name",
      lastName: "User's Last Name",
      roomDetails: {
        name: selectedRoom.name,
        description: selectedRoom.description,
        type: selectedRoom.type,
      },
      checkInDate,
      checkOutDate,
      numberOfGuests: numGuests,
      totalAmount: totalPrice.toFixed(2),
    };

    localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));

    navigate("/checkout", {
      state: {
        room: selectedRoom,
        checkInDate,
        checkOutDate,
        numGuests,
        numRooms,
        numChildren,
      },
    });
  };

  if (loading) return <p>Loading rooms...</p>;
  if (error) return <p>Error loading rooms: {error}</p>;

  return (
    <div className="main">
      <Navbar />
      <div className="lines">
        <hr className="line"></hr>
        <h2>Top Apartments</h2>
        <hr className="line"></hr>
      </div>

      <div className="rooms-container">
        {filteredRooms.map((room, index) => (
          <div
            className="room-card"
            key={index}
            onClick={() => openModal(room)}
          >
            <div className="image-container">
              <div className="ama-icons">
                <FaHeart
                  className={`heart-icon ${likedRooms[room.id] ? "liked" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(room);
                  }}
                />
                <FaShareAlt
                  className="share-icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShare(room);
                  }}
                />
              </div>
              <img src={room.image || goldexecutive} alt={room.name} />
            </div>
            <div className="room-content">
              <div className="name">
                <h4>{room.name}</h4>
                <h4>R{room.price}/ night</h4>
              </div>
              <div className="bed">
                <h5>
                  <FaBath className="icon-style" /> {room.bathroom}
                </h5>
                <h5>
                  <FaBed className="icon-style" /> {room.bedroom}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedRoom && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <div className="modal-body">
              <div className="modal-images">
                <div className="main-image">
                  <img src={selectedRoom.image} alt={selectedRoom.name} />
                </div>
                <div className="additional-images-grid">
                  {selectedRoom.additionalImages.map((image, index) => (
                    <div key={index} className="additional-image">
                      <img src={image} alt={`additional ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="room-info-main">
                <div className="room-details">
                  <h2>{selectedRoom.name}</h2>
                  <p>R{selectedRoom.price}/ night</p>
                  <p>
                    <strong>Room Size:</strong> {selectedRoom.size}
                  </p>
                  <p>
                    <strong>Occupancy:</strong> {selectedRoom.occupancy}
                  </p>
                  <p>
                    <strong>Bed Options:</strong> {selectedRoom.bedOptions}
                  </p>
                  <p>
                    <strong>Bathroom Details:</strong> {selectedRoom.bathroomDetails}
                  </p>
                  <p>
                    <strong>Flooring:</strong> {selectedRoom.flooring}
                  </p>
                  <p>
                    <strong>View:</strong> {selectedRoom.view}
                  </p>
                  <p>
                    <strong>Accessibility:</strong> {selectedRoom.accessibility}
                  </p>
                </div>
                <div className="bookings">
                  <div className="booking-dates">
                    <label>Check-in Date:</label>
                    <input
                      type="date"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      min={today.toISOString().split('T')[0]}
                      required
                    />
                    <label>Check-out Date:</label>
                    <input
                      type="date"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      min={tomorrow.toISOString().split('T')[0]} 
                      required
                    />
                  </div>
                  <div className="guest-details">
                    <label>Number of Guests:</label>
                    <input
                      type="number"
                      value={numGuests}
                      onChange={(e) => setNumGuests(e.target.value)}
                      min="1"
                      required
                    />
                    <label>Number of Rooms:</label>
                    <input
                      type="number"
                      value={numRooms}
                      onChange={(e) => setNumRooms(e.target.value)}
                      min="1"
                      required
                    />
                    <label>Number of Children:</label>
                    <input
                      type="number"
                      value={numChildren}
                      onChange={(e) => setNumChildren(e.target.value)}
                      min="0"
                      required
                    />
                  </div>
                  <p className="note">
                    Please select your check-in, check-out dates, and the number
                    of guests, rooms, and children to proceed with the booking.
                  </p>
                  <p className="total-price">
                    <strong>Total Price: R{totalPrice.toFixed(2)}</strong>
                  </p>
                  <button className="btn" onClick={handleReserveNow}>
                    Reserve Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Allrooms;
