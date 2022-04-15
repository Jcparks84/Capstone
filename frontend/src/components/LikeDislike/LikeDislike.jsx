import React, { useState } from 'react';
import './LikeDislike.css'

const LikeDislike = (props) =>{

    const [likeButton, setLikeButton] =useState('inactive'); 
    const [dislikeButton, setDislikeButton] = useState('inactive'); 

    function handleClickLike(event){
        event.preventDefault(); 
        if(likeButton === 'inactive'){
            setDislikeButton('inactive');
            setLikeButton('active-like');  
        
        }
        else {
            setLikeButton('inactive');
        }
    }

    function handleClickDislike(event){
        event.preventDefault();
        if(dislikeButton === 'inactive'){
            setLikeButton('inactive');
            setDislikeButton('active-dislike');
        }
        else{
            setDislikeButton('inactive');
        }
    }
    return(
        <div>
            <button className={likeButton} onClick={handleClickLike}>like</button>
            <button className={dislikeButton} onClick={handleClickDislike}>dislike</button>
        </div>
    )
}
export default LikeDislike;