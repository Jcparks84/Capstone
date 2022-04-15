import React, { useState } from "react";
import ThumbDownIcon from '@mui/icons-material/ThumbDown';


const DisLike = (props) => {
  const [DisLikes, setButtonClassDisLike] = useState("inactive");

  function handleClick() {
    if (DisLikes === "inactive") {
      setButtonClassDisLike("active-dislike");
    } else {
      setButtonClassDisLike("inactive");
    }
  }
  return (
      <div>
        <button className={DisLikes} onClick={handleClick}>{props.message}</button>
      </div>
    );
  
};

export default DisLike;