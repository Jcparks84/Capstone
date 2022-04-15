import React, { useState } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const LikeButton = (props) => {
  const [Like, setButtonClassLike] = useState("inactive");

  function handleClick() {
    if (Like === "inactive") {
      setButtonClassLike("active-like");
    } else {
      setButtonClassLike("inactive");
    }
  }

  return(
    <div>
      <button className={Like} onClick={handleClick}>{props.message}</button>
    </div>
  )}
  export default LikeButton;