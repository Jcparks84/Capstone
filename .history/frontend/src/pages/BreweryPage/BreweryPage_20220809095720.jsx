import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comment from "../../components/Comment/Comment";
import "./breweryPage.css";
import CommentList from "../../components/CommentList/CommentList";
import LikeDislike from "../../components/LikeDislike/LikeDislike";
import Tags from "../../components/Tags/Tags";
import useAuth from "../../hooks/useAuth";
import Favorite from "../../components/Favorite/Favorite";

const Rating = require("react-rating").default;

const BreweryPage = () => {
  const { breweryId } = useParams();
  const [brewery, setBrewery] = useState([]);
  const [rating, setRating] = useState(0);
  const [ratingFlag, setRatingFlag] = useState(false);
  const selectTags = (tags) => console.log(tags);
  const [user, token] = useAuth();
  const [breweryComment, setBreweryComment] = useState([]);
  

  async function getBrewery() {
    let response = await axios.get(
      `https://api.openbrewerydb.org/breweries/${breweryId}`
    );
    console.log("getBrewery Response", response.data);
    setBrewery([response.data]);
  }

  useEffect(() => {
    getBrewery([brewery]);
  }, []);

  async function displayBreweryComments() {
    let response = await axios.get(
      `http://127.0.0.1:8000/api/comments/${breweryId}/`
    );
    // console.log(response.data);
    setBreweryComment(response.data);
  }

  useEffect( displayBreweryComments, []);

  async function addRatings(rating) {
    try {
      let ratingValue = {
        score: rating,
        brewery_id: breweryId,
        user: user.id,
      };
      let response = await axios.post(
        "http://127.0.0.1:8000/api/ratings/add",
        ratingValue,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response.data);
      if (response.data) {
        setRatingFlag(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // console.log("Ratings =", rating);

  return (
    <div>
      {brewery.map((brewery, index) => {
        return (
          <div  key={index}>
            <div>
              <h1>{brewery.name}</h1>
              <div className="typ-container">
                <p>Type:</p>
                <p>{brewery.brewery_type}</p>
              </div>
              <div className="breweryInfo">
                <p>Address:</p>
                <p>
                  {brewery.street} {brewery.city} {brewery.state}
                </p>
              </div>
              <div className="breweryInfo">
                <p>Postal Code:</p>
                <p>{brewery.postal_code}</p>
              </div>
              <p className="breweryLink">
                <a href={brewery.website_url}>Brewery Website</a>
              </p>
            </div>
            <Tags selectTags={selectTags} />
            <Favorite />
            <Rating
              readonly={ratingFlag}
              initialRating={rating}
              placeholderRating={rating}
              onClick={(val) => {
                console.log("rating value", val);
                addRatings(val);
                setRating(val);
              }}
            />
            <p>{rating}/5</p>
            <Comment brewery={brewery} displayBreweryComments={displayBreweryComments}/>
            <CommentList breweryComment={breweryComment} />
          </div>
        );
      })}
    </div>
  );
};

export default BreweryPage;
