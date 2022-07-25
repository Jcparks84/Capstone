import React, { useState } from 'react';
import usePlacesAutocomplete from 'use-places-autocomplete';


const SearchBar = (props) => {

const [brewery, setBrewery] = useState ('');
const {} = usePlacesAutocomplete({
    requestOptions: {
        location: { lat: () => 44.7630567, lng: () => -85.6206317, },
        radius
    },
})

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(brewery);
    props.getBrewery(brewery)
}

    return(
        <form>
            <div>
                <input type='text' placeholder='Search Brewery' value={brewery} onChange={(event)=> setBrewery(event.target.value)}/>
            </div>
            <button onClick={handleSubmit} type = 'submit'>Search</button>
        </form>
    )

}

export default SearchBar