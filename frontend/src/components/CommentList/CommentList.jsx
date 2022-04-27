import axios from "axios";
import React, { useState, useEffect } from "react";
import Comment from "../Comment/Comment";
import Reply from "../Reply/Reply";
import * as mdb from "mdb-ui-kit"; // lib
import { Input } from "mdb-ui-kit"; // module
import LikeDislike from "../LikeDislike/LikeDislike";
// import './CommentList.css';

const CommentList = (props) => {
  const [breweryComment, setBreweryComment] = useState([]);

  // async function displayBreweryComments () {
  //     let response = await axios.get(
  //         `http://127.0.0.1:8000/api/comments/${props.breweryId}/`
  //     );
  //     console.log(response.data)
  //     setBreweryComment(response.data)

  // }
  useEffect(() => {
    setBreweryComment(props.breweryComment);
  }, [props]);

  console.log("breweryComment.id", breweryComment);

  return (
    <div className="displayCommentList">
      {breweryComment.length > 0 ? (
        breweryComment.map((BreweryComment, index) => {
          return (
            <div style={{ textAlign: "left", marginBottom: "10px" }}>
              <p key={index} className="comment">
                {BreweryComment?.user?.username}: &nbsp; 
                <span style={{fontSize: '13px', fontWeight: 'regular'}}>{BreweryComment.text}</span>
              </p>
              <LikeDislike />
              <Reply breweryComment={BreweryComment} />
            </div>
          );
        })
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default CommentList;
