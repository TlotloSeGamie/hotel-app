import React, { useState } from 'react';
import "./Rooms.css";
import { FaBath, FaBed } from "react-icons/fa";
import executive from "../images/executive suite/I-Resort-Crete-Gold-Double-Room-Sea-View-1.jpg";
import additionalImage1 from "../images/executive suite/I-Resort-Crete-Gold-Double-Room-Sea-View-1.jpg";
import additionalImage2 from "../images/executive suite/I-Resort-Crete-Gold-Double-Room-Sea-View-2.jpg";
import additionalImage3 from "../images/executive suite/I-Resort-Crete-Gold-Junior-Suite-Sea-View-2-600x454.jpg";
import additionalImage4 from "../images/executive suite/I-Resort-Crete-Gold-Suite-Sea-View-Private-Pool-2.jpg";
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { GiGuardedTower } from 'react-icons/gi';

const Allrooms = () => {
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const roomData = [
        {
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },,{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        }
        ,{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        }
        ,{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        }
        ,{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        }
        ,{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        }
        ,{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        }
        ,{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        }
        ,{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        }
        ,{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        }
        ,{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        }
        ,{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        }
        ,{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        }
        ,{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        }
        ,{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        }
        ,{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        }
        ,{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        }
        ,{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        }
        ,{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        }
        ,{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        }
        ,{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        }
        ,{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        }
        ,{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        }
        ,{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        }
        ,{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        }
        ,{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        }
        ,{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        }
        ,{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        }
        ,{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        }
        ,{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        }
        ,{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        }
        ,{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        }
        ,{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        }
        ,{
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "3 adults or 2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        }
        
        
    ];

    const openModal = (room) => {
        setSelectedRoom(room);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedRoom(null);
    };

    const navigate = useNavigate();

    const handleBookNow = () => {
        navigate('/checkout');
    };

    return (
        <div className="main">
            <Navbar />
            <div className="lines">
                <hr className="line"></hr>
                <h2>Top Apartments</h2>
                <hr className="line"></hr>
            </div>
            <div className="rooms-container">
                {roomData.map((room, index) => (
                    <div className="room-card" key={index} onClick={() => openModal(room)}>
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
                            <button className="book-btn" onClick={handleBookNow}>Book now</button>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && selectedRoom && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>×</button>
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
                            <div className="room-info">
                                <h2>{selectedRoom.name}</h2>
                                <p>{selectedRoom.price}</p>
                                <p><strong>Size:</strong> {selectedRoom.size}</p>
                                <p><strong>Occupancy:</strong> {selectedRoom.occupancy}</p>
                                <p><strong>Bed Options:</strong> {selectedRoom.bedOptions}</p>
                                <p><strong>Bathroom Details:</strong> {selectedRoom.bathroomDetails}</p>
                                <p><strong>Flooring:</strong> {selectedRoom.flooring}</p>
                                <p><strong>View:</strong> {selectedRoom.view}</p>
                                <p><strong>Accessibility:</strong> {selectedRoom.accessibility}</p>
                                <ul>
                                    {selectedRoom.highlights.map((highlight, index) => (
                                        <li key={index}>{highlight}</li>
                                    ))}
                                </ul>
                                <button className="btn" onClick={handleBookNow}>Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Allrooms;
