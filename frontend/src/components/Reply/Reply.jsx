import React, { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const Reply = (props) => {
  const [reply, setReply] = useState("");
  const [replies, setReplies] = useState("");
  const [user, token] = useAuth();
  const [showInput, setShowInput] = useState(false);

  function handleReply(e) {
    e.preventDefault();

    let newReply = {
      text: reply,
      comment: props.breweryComment.id,
    };
    console.log(props.breweryComment.id);
    console.log("reply", newReply);
    addReply(newReply);

    async function addReply(newReply) {
      try {
        let response = await axios.post(
          `http://127.0.0.1:8000/api/replies/new/`,
          newReply,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setReply(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  const getAllComments = async () => {
    let response = await axios.get(`http://127.0.0.1:8000/api/comments/`);
    replies("replies", response.data);
    console.log(response.data);
  };

  return (
    <div>
      {showInput ? (
        <form onSubmit={handleReply}>
          <textarea
            style={{
              width: "100%",
              display: "block",
              height: "70px",
              outline: "none",
            }}
            type="text"
            value={reply}
            onChange={(event) => setReply(event.target.value)}
          />
          <input type="submit" value="Add Reply" />
          <input type="button" value="close"  onClick={() => setShowInput(false)}/>
        </form>
      ) : (
        <p
          style={{
            cursor: "pointer",
            textDecoration: "underline",
            fontSize: "10px",
          }}
          onClick={() => setShowInput(true)}
        >
          Reply
        </p>
      )}
    </div>
  );
};

export default Reply;
