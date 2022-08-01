import React, { useState } from 'react';


const SearchBar = (props) => {

const [brewery, setBrewery] = useState ('');
const getAddress


const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(brewery);
    props.getBrewery(brewery)
}

    return(
        <form>
            <div>
                <input type='text' placeholder='Search Brewery' value={brewery} onChange={(event)=> setBrewery(event.target.value)} get/>
            </div>
            <button onClick={handleSubmit} type = 'submit'>Search</button>
        </form>
    )

}

export default SearchBar