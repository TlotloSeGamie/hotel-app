import React from 'react';
import './Reviews.css';

const ReviewCard = ({ review }) => (
  <div className="review-card">
    <h4>{review.name} - {review.rating} ★</h4>
    <p>{review.text}</p>
  </div>
);

const Reviews = () => {
  const dummyReviews = [
    { id: 1, name: 'John Doe', rating: 5, text: 'Amazing experience, highly recommend!' },
    { id: 2, name: 'Jane Smith', rating: 4, text: 'Very comfortable, but room service can improve.' },
    { id: 3, name: 'Emily Johnson', rating: 3, text: 'It was okay, but the location is great.' },
  ];

  return (
    <div>
      <div className="reviews-header">
        <h2>Customer Reviews</h2>
      </div>
      <div className="reviews-container">
        {dummyReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
