import React from 'react';



const BreweryPage = (props) => {
    return(
        <div className='BreweryList'>
            {props.brewery.map((brewery, index)=>{
                return(
                    <div>
                        <div><h1>Brewery Page</h1></div>
                        <p>{brewery.name}</p>
                        <p>{brewery.brewery_type}</p>
                        <p>{brewery.street}</p>
                        <p>{brewery.city}</p>
                        <p>{brewery.state}</p>
                        <p>{brewery.postal_code}</p>
                        <p>{brewery.website_url}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default BreweryPage;