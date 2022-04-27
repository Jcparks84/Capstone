import React, { useState } from 'react';
import axios from 'axios';
import './Comment.css'
import useAuth from "../../hooks/useAuth";

const Comment = (props) => {
    const [comment, setComment] = useState('');
    const [commentss, getCommentss] = useState([])
    const [user, token] = useAuth();
    const likes = 0;
    const dislikes = 0;

    console.log(comment.id)
    
    function handleComment(event){
        event.preventDefault();
        let newComment = {
            text: comment,
            brewery_id: props.brewery.id,
            likes: likes,
            dislikes: dislikes,
            user: user
        };
        console.log(newComment);
        addComment(newComment);
    }

    async function addComment(newComment){
        try{
            let response = await axios.post('http://127.0.0.1:8000/api/comments/', newComment, {
                headers: {
                    Authorization: 'Bearer ' + token,
                },
            });
            setComment("");
            props.displayBreweryComments();
        } catch (error){
            console.log(error);
        }
    };

    const getAllComments= async()=>{
        let response = await axios.get(`http://127.0.0.1:8000/api/comments/`);
        commentss(response.data)
        console.log(response.data)
    }


    return (
        <form className= 'formbox' onSubmit={handleComment}>
         
            <textarea type='text' className='comment-textarea' value={comment} onChange={(event)=> setComment(event.target.value)} />
         
            <input type="submit" value='Add Comment' className='comment-btn'/>
           
      
        </form>
    
      
      )
    };
    
    export default Comment;