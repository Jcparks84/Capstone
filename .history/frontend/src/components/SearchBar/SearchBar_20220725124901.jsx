import React, { useState } from 'react';
import usePlacesAutocomplete from 'use-places-autocomplete';


const SearchBar = (props) => {

const [brewery, setBrewery] = useState ('');
const {} = usePlacesAutocomplete({
    requestOptions: {
        location: { }
    }
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