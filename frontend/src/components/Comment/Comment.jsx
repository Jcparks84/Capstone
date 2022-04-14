import React, { useState } from 'react';
import axios from 'axios';
import './Comment.css'

const Comment = (props) => {
    const [comment, setComment] = useState([]);
    const [commentss, setCommentss] = useState('');
    const likes = 0;
    const dislikes = 0;

    console.log(comment.id)
    
    function handleComment(event){
        event.preventDefault();
        let newComment = {
            text: comment,
            brewery_id: props.brewery,
            likes: likes,
            dislikes: dislikes,
            
        };
        console.log(newComment);
        addComment(newComment);
    }

    async function addComment(newComment){
        try{
            let response = await axios.post('http://127.0.0.1:8000/api/comments', newComment, {
                headers: {
                    Authorization: 'Bearer' + props.token,
                },
            });
            setComment(response.data);
        } catch (error){
            console.log(error.message);
        }
    };
    return (
        <form className= 'formbox' onSubmit={handleComment}>
         
            <input type="text" value={comment} onChange={(event)=> setComment(event.target.value)} />
         
            <input type="submit" value='Add Comment' />
           
      
        </form>
    
      
      )
    };
    
    export default Comment;