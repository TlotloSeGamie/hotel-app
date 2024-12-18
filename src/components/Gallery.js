import "./Gallery.css";
import gallery1 from "../images/gallery/1099796_circle.jpg";
import gallery2 from "../images/gallery/13535-terre-blanche-hotel-spa-golf-resort-le-faventia-3.webp";
import gallery3 from "../images/gallery/202209132306370.lagoon_b.png";
import gallery4 from "../images/gallery/28138878-bed8-4120-90b9-306decaa7450.png";
import gallery5 from "../images/gallery/284013454.jpg";
import gallery6 from "../images/gallery/358884066.jpg";
import gallery7 from "../images/gallery/530677613.jpg";
import gallery8 from "../images/gallery/AAEAAQAAAAAAAAAAAAAA06d77d20fbfeb4ddfb39b9d33c6cb0566be44127cf9f863274462e436c7ec82413113fadfbee71ab5d4a58880cada14fe602.avif";
import gallery9 from "../images/gallery/Beauty-and-Spa-2.jpg";
import gallery10 from "../images/gallery/Classique-Grace-Boutique-Hotel-Spa.jpg";
import gallery11 from "../images/gallery/Dollarphotoclub-57388671-300x300.jpg";
import gallery12 from "../images/gallery/Floating-breakfast-31-1-1024x683.jpg";
import gallery13 from "../images/gallery/I-Resort-Crete-A-la-carte-Restaurant-Bliss-5-600x400.jpg";
import gallery14 from "../images/gallery/I-Resort-Crete-A-la-carte-Restaurant-Bliss-6-600x400.jpg";
import gallery15 from "../images/gallery/I-Resort-Crete-Aithrio-2-600x435.jpg";
import gallery16 from "../images/gallery/I-Resort-Crete-Bicycles-3-600x400.jpg";
import gallery17 from "../images/gallery/I-Resort-Crete-Copper-Junior-Suite-Land-View-2-600x400.jpg";
import gallery18 from "../images/gallery/I-Resort-Crete-Fitness-600x400.jpg";
import gallery19 from "../images/gallery/I-Resort-Crete-Main-Bar-Sellas-3-600x400.jpg";
import gallery20 from "../images/gallery/I-Resort-Crete-Main-Bar-Sellas-4-600x400.jpg";
import gallery21 from "../images/gallery/I-Resort-Crete-Main-Bar-Sellas-7-600x450.jpg";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Gallery = () => {
    const images = [
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        gallery6,
        gallery7,
        gallery8,
        gallery9,
        gallery10,
        gallery11,
        gallery12,
        gallery13,
        gallery14,
        gallery15,
        gallery16,
        gallery17,
        gallery18,
        gallery19,
        gallery20,
        gallery21,
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        gallery6,
        gallery7,
        gallery8,
        gallery9,
        gallery10,
        gallery11,
        gallery12,
        gallery13,
        gallery14,
        gallery15,
        gallery16,
        gallery17,
        gallery18,
        gallery19,
        gallery20,
        gallery21,
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        gallery6,
        gallery7,
        gallery8,
        gallery9,
        gallery10,
        gallery11,
        gallery12,
        gallery13,
        gallery14,
        gallery15,
        gallery16,
        gallery17,
        gallery18,
        gallery19,
        gallery20,
        gallery21,
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        gallery6,
        gallery7,
        gallery8,
        gallery9,
        gallery10,
        gallery11,
        gallery12,
        gallery13,
        gallery14,
        gallery15,
        gallery16,
        gallery17,
        gallery18,
        gallery19,
        gallery20,
        gallery21,
    ];

    return (
        <div className="main-container">
                <Navbar />
            <div className="clean">
                <div className="texts">
                    <div className="text-line">
                        <hr className="line" />
                        <h1>GALLERY</h1>
                        <hr className="line" />
                    </div>
                    <h3>Explore the Beauty of Da Gamie A Visual Journey Awaits!</h3>
                </div>
                <div className="pics">
                    <div className="gallery">
                        {images.map((image, index) => (
                            <div className="photos" key={index}>
                                <img src={image} alt={`Gallery Image ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            <Footer />
            </div>
        </div>
    );
};

export default Gallery;
