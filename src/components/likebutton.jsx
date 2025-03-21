// src/components/LikeButton.jsx
import React from "react";

const LikeButton = ({ isLiked, onClick }) => {
  return (
    <button
      className={`like-button ${isLiked ? "liked" : ""}`}
      onClick={onClick}
    >
      {isLiked ? "❤️ Liked" : "♡ Like"}
    </button>
  );
};

export default LikeButton;