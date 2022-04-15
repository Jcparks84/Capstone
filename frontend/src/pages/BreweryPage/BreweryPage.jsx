import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Comment from '../../components/Comment/Comment';
import Rating from '../../components/Rating/Rating';
import './breweryPage.css';
import CommentList from '../../components/CommentList/CommentList';
import LikeDislike from '../../components/LikeDislike/LikeDislike';
// import Reply from '../../components/Reply/reply';



const BreweryPage = () => {
    const {breweryId} = useParams()
    const [brewery, setBrewery] = useState([])
    console.log("BreweryPage line 11", breweryId)


    async function getBrewery() {
        let response = await axios.get(
          `https://api.openbrewerydb.org/breweries/${breweryId}`
        );
        console.log("getBrewery Response", response.data);
        setBrewery([response.data]);
      }


      useEffect(() => {
          getBrewery([brewery]);
          console.log('brewery', brewery)
      },[])



    


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
                        <Rating/>
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