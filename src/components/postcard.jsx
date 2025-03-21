import React from "react";
import LikeButton from "./LikeButton";
import "./PostCard.css"; // Importing the styles for PostCard

const PostCard = ({ post, onLikeToggle }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <img className="profile-pic" src={post.profileImage} alt={post.username} />
        <strong>{post.username}</strong>
      </div>
      <p className="post-content">{post.content}</p>
      <LikeButton isLiked={post.isLiked} onClick={() => onLikeToggle(post.id)} />
    </div>
  );
};

export default PostCard;