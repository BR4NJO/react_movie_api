import { useState, useEffect } from "react";

const StarRating = ({ movieId }) => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const savedRating = localStorage.getItem(`rating-${movieId}`);
    if (savedRating) {
      setRating(parseInt(savedRating));
    }
  }, [movieId]);

  const handleRating = (newRating) => {
    if (rating === newRating) {
      setRating(0);
      localStorage.removeItem(`rating-${movieId}`);
    } else {
      setRating(newRating);
      localStorage.setItem(`rating-${movieId}`, newRating);
    }
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleRating(star)}
          style={{
            cursor: "pointer",
            color: star <= rating ? "gold" : "gray",
            fontSize: "24px",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
