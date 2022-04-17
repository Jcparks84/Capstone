import React, { useState } from "react";
import axios from "axios";




const Reply = (props) => {
    const [reply, setReply] = useState('');

    function handleReply(e) {
        e.preventDefault();

        let newReply = {

            text: reply,
            comment: props.breweryComment.id,
    
            
        };
            console.log(props.breweryComment.id);
            console.log(newReply);
            addReply(newReply);

        
        async function addReply(newReply){
            try {
              let response = await axios.post(`http://127.0.0.1:8000/api/replies/new${props.breweryComment.text}/`, newReply,{
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
            <input type='text' value={reply} onChange={(event)=> setReply(event.target.value)}/>
            <input type="submit" value='Add Reply' />
        </form>
    )

};

export default Reply;