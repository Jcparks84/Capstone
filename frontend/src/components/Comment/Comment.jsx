import React, { useState } from 'react';
import axios from 'axios';
import './Comment.css'

const Comment = (props) => {
    const [comment, setComment] = useState([]);
    const [commentss, setCommentss] = useState('');
    const likes = 0;
    const dislikes = 0;

    console.log(comment.id)

}