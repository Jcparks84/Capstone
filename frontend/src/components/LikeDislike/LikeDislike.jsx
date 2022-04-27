import React, { useState } from "react";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import "./LikeDislike.css";

const LikeDislike = (props) => {
  const [clicked, setClicked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(true);
    setClicked(true);
  };

  const handleDislike = () => {
    setIsLiked(false);
    setClicked(true);
  };

  if (clicked) {
    return isLiked ? (
      <div>
        <AiFillLike size={20} onClick={handleLike} style={{ cursor: 'pointer'}}/>
        <AiOutlineDislike size={20} onClick={handleDislike} style={{ cursor: 'pointer'}}/>
      </div>
    ) : (
      <div>
        <AiOutlineLike size={20} onClick={handleLike} style={{ cursor: 'pointer'}}/>
        <AiFillDislike size={20} onClick={handleDislike} style={{ cursor: 'pointer'}} />
      </div>
    );
  } else {
    return (
      <div>
        <AiOutlineLike size={20} onClick={handleLike} style={{ cursor: 'pointer'}}/>
        <AiOutlineDislike size={20} onClick={handleDislike} style={{ cursor: 'pointer'}}/>
      </div>
    );
  }
};
export default LikeDislike;
