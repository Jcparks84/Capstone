import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Comment from '../../components/Comment/Comment';
import Rating from '../../components/Rating/Rating';
import './breweryPage.css';
import CommentList from '../../components/CommentList/CommentList';
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
        <div className='BreweryList'>
            {brewery.map((brewery, index)=>{
                return(
                    <div className='bob' key={index}>
                        <div>
                            <h1>Brewery Page</h1>
                        <p>{brewery.name}</p>
                        <p>{brewery.brewery_type}</p>
                        <p>{brewery.street}</p>
                        <p>{brewery.city}</p>
                        <p>{brewery.state}</p>
                        <p>{brewery.postal_code}</p>
                        <p><a href={brewery.website_url}>website</a></p>
                        </div>
                        <Rating/>
                        <Comment brewery = {brewery} />
                        <CommentList breweryId = {breweryId}/>
                    </div>
                )
            })}
        </div>
    )
}

export default BreweryPage;