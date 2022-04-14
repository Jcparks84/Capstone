import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Comment from '../../components/Comment/Comment';
// import Reply from '../../components/Reply/reply';



const BreweryPage = () => {
    const {breweryId} = useParams()
    console.log("BreweryPage line 11", breweryId)

    


    return(
        <div className='BreweryList'>
            BreweryPage
            {/* {props.brewery.map((brewery, index)=>{
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
            })} */}
        </div>
    )
}

export default BreweryPage;