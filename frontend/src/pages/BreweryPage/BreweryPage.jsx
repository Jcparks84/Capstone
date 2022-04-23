import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Comment from '../../components/Comment/Comment';
import './breweryPage.css';
import CommentList from '../../components/CommentList/CommentList';
import LikeDislike from '../../components/LikeDislike/LikeDislike';
import Tags from '../../components/Tags/Tags';
import useAuth from "../../hooks/useAuth";
import Favorite from '../../components/Favorite/Favorite';

const Rating = require('react-rating').default;


const BreweryPage = () => {
    const {breweryId} = useParams()
    const [brewery, setBrewery] = useState([]);
    const [rating, setRating] = useState(0);
    const [ratingFlag, setRatingFlag] = useState(false);
    const selectTags = tags => console.log(tags);
    const [user, token] = useAuth();
    console.log("BreweryPage line 11", breweryId, user)


    async function getBrewery() {
        let response = await axios.get(
          `https://api.openbrewerydb.org/breweries/${breweryId}`
        );
        console.log("getBrewery Response", response.data);
        setBrewery([response.data]);
      }


      useEffect(() => {
          getBrewery([brewery]);
      },[])


      async function addRatings(rating){
          
        try{
            let ratingValue = {
                score: rating,
                brewery_id: breweryId,
                user: user.id
            };
            let response = await axios.post('http://127.0.0.1:8000/api/ratings/add/', ratingValue, {
                headers: {
                    Authorization: 'Bearer ' + token,
                },
            });
            console.log(response.data);
            if (response.data) {
                setRatingFlag(true);
            }
        } catch (error){
            console.log(error);
        }
    };

    console.log('Ratings =', rating);


    


    return(
        <div className='container'>
            {brewery.map((brewery, index)=>{
                return(
                    <div className='container' key={index}>
                        <div>
                            <h1>Brewery Page</h1>
                        <p className='breweryInfo'>{brewery.name}</p>
                        <p className='breweryInfo'>{brewery.brewery_type}</p>
                        <p className='breweryInfo'>{brewery.street}</p>
                        <p className='breweryInfo'>{brewery.city}</p>
                        <p className='breweryInfo'>{brewery.state}</p>
                        <p className='breweryInfo'>{brewery.postal_code}</p>
                        <p className='breweryInfo'><a href={brewery.website_url}>Brewery Website</a></p>
                        </div>
                        <Tags selectTags = {selectTags}/>
                        <Favorite />
                        <Rating readonly={ratingFlag} initialRating={rating} placeholderRating={rating} onClick={(val) => {
                            console.log('rating value', val);
                            addRatings(val);
                            setRating(val);
                        } }/>
                        <p>{rating}/5</p>
                        <Comment brewery = {brewery} />
                        <CommentList breweryId = {breweryId}/>
                        <LikeDislike/>
                    </div>
                )
            })}
        </div>
    )
}

export default BreweryPage;