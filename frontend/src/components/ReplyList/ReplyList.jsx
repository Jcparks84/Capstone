import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Comment from '../Comment/Comment';
import Reply from '../Reply/Reply';
import useAuth from '../../hooks/useAuth';


const ReplyList = (props) => {

    const [breweryReply, setBreweryReply] = useState([]);
    const [user, token] = useAuth();

    async function displayBreweryComments() {
        let response = await axios.get(
            `http://127.0.0.1:8000/api/replies/${props.breweryComment.id}/`,
            {
                headers: {
                    Authorization: "Bearer " + token,
                },
            }
        );
        console.log(response.data)
        setBreweryReply(response.data)

    }
    useEffect(() => {
        displayBreweryComments();
        console.log('breweryReply', breweryReply)

    }, [setBreweryReply]);

    console.log('breweryComment.id', breweryReply.id)

    return (
        <div className='displayReplyList'>
            {breweryReply.length > 0 ? breweryReply.map((BreweryReply, index) => {
                return (
                    <div>
                        <p key={index} className='reply'>{BreweryReply.text} {console.log(breweryReply.text)}</p>

                    </div>

                )

            }) : <p></p>}

        </div>
    )

}

export default ReplyList;