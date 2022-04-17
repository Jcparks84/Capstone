import React, { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";




const Reply = (props) => {
    const [reply, setReply] = useState('');
    const [user, token] = useAuth();

    function handleReply(e) {
        e.preventDefault();

        let newReply = {

            text: reply,
            comment: props.breweryComment.id,
    
            
        };
            console.log(props.breweryComment.id);
            console.log(newReply);
            addReply(newReply);

            console.log(props.token)

        
        async function addReply(newReply){
            try {
              let response = await axios.post(`http://127.0.0.1:8000/api/replies/new/`, newReply,{
              headers: {
                  Authorization: "Bearer " + token,
        
              },
            });
            setReply(response.data);
           } catch (error){
               console.log(props.token)
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