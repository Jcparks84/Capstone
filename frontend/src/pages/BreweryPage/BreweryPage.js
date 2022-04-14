import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Comment from '../../components/Comment/Comment';
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
            BreweryPage
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
                        <p>{brewery.website_url}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default BreweryPage;