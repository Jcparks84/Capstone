import React, { useState } from "react";
import axios from "axios";




const Reply = (props) => {
    const [user,setUser] = useState('');
    const [reply, setReply] = useState('');


    function handleReply(e) {
        e.preventDefault();

        let newReply = {

            text: reply,
            comment: props.comment.id,
        };
            console.log(props.comment.id);
            console.log(newReply);
            addReply(newReply);

        
        async function addReply(newReply){
            try {
              let response = await axios.post(`hhttp://127.0.0.1:8000/api/replies/new/${props.comment.id}/`, newReply,{
              headers: {
                  Authorization: "Bearer " + props.token,
              },

            });
            setReply(response.data);
           } catch (error){
              console.log(error.message);
            }
        
        };
    }
    return (
        <form onSubmit={handleReply}>
            <input type='text' value={replies} onChange={(event)=> setReply(event.target.value)}/>
            <input type="submit" value='Add Reply' />
        </form>
    )

};

export default Reply;