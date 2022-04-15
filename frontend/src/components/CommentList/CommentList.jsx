import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Comment from '../Comment/Comment';
// import './CommentList.css';

const CommentList = (props) => {

    const [breweryComment, setBreweryComment] = useState([]);

    async function displayBreweryComments () {
        let response = await axios.get(
            `http://127.0.0.1:8000/api/comments/${props.breweryId}/`
        );
        console.log(response.data)
        setBreweryComment(response.data)

    }
  useEffect(() => {
    displayBreweryComments();
    console.log('breweryComment', breweryComment)

}, [])
  
    
    return (
        <div className='displayCommentList'>
            {breweryComment.length > 0 ? breweryComment.map((BreweryComment, index)=> {
                return (
                    <div>
                        <p key={index} className='comment'>{BreweryComment.text}</p>
                        {/* <Reply/> */}
                        </div>

                )
            }) : <p>Loading ...</p>}

        </div>
    )

}

export default CommentList;