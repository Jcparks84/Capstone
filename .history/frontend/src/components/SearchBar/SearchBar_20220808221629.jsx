import React, { useState } from 'react';


const SearchBar = (props) => {

const [brewery, setBrewery] = useState ('');


const handleSubmit = (event) => {
    event.preventDefault();
    setBrewery
    // console.log(brewery);
    props.getBrewery(brewery)
}

function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
    // clearing the values
    setEmail("");
    setPassword("");
  }

    return(
        <form>
            <div className='searchbar'>
                <input type='text' placeholder='Search Brewery' value={brewery} onChange={(event)=> setBrewery(event.target.value)}/>
            </div>
            <button className='search-button' onClick={handleSubmit} type = 'submit'>Search</button>
        </form>
    )

}

export default SearchBar

