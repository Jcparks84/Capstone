import React, { useState } from 'react';


const SearchBar = (props) => {

const [brewery, setBrewery] = useState ('');


const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(brewery);
    props.getBrewery(brewery)
}

    return(
        // <form>
        //     <div>
        //         <input type='text' placeholder='Search Brewery' value={brewery} onChange={(event)=> setBrewery(event.target.value)}/>
        //     </div>
        //     <button onClick={handleSubmit} type = 'submit'>Search</button>
        // </form>
        <form onsubmit="event.preventDefault();" role="search">
        <label for="search">Search for stuff</label>
        <input id="search" type="search" placeholder="Search..." autofocus required />
        <button type="submit">Go</button>    
      </form>
    )

}

export default SearchBar

