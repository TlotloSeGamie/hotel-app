import React, { useState } from 'react';
import './Reviews.css';
import { Navbar } from 'react-bootstrap';
import Footer from './Footer';

const ReviewCard = ({ review }) => (
  <div className="review-card">
    <h4>{review.name} - {review.rating} ★</h4>
    <p>{review.text}</p>
  </div>
);

const Reviews = () => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);

  const dummyReviews = [
    { id: 1, name: 'John Doe', rating: 5, text: 'Amazing experience, highly recommend!' },
    { id: 2, name: 'Jane Smith', rating: 4, text: 'Very comfortable, but room service can improve.' },
    { id: 3, name: 'Emily Johnson', rating: 3, text: 'It was okay, but the location is great.' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && text && rating > 0) {
      console.log('Review submitted:', { name, text, rating });
      setName('');
      setText('');
      setRating(0);
    }
  };

  return (
    <div className="reviews-contanier">
        <Navbar />
      <div className='reviews-section'>
          <div className="reviews-container">
            <h2>Customer Reviews</h2>
            {dummyReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
          <div className="form-container">
            <h2>Leave a Review</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                aria-label="Your Name"
              />
              <textarea
                placeholder="Your Comment"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
                aria-label="Your Comment"
              />
              <div className="rating">
                <span>Rating: </span>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${rating >= star ? 'filled' : ''}`}
                    onClick={() => setRating(star)}
                  >
                    ★
                  </span>
                ))}
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reviews;
