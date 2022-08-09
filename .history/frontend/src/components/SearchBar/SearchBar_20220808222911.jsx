import React, { useState } from 'react';


const SearchBar = (props) => {

const [brewery, setBrewery] = useState ('');


const handleSubmit = (event) => {
    event.preventDefault();
    setBrewery('')
    // console.log(brewery);
    props.getBrewery(brewery)
}


    return(
        <form id='search-form'>
            <div className='search'>
                <input type='text' name='Search Brewery' className='round' value={brewery} onChange={(event)=> setBrewery(event.target.value)}/>
            </div>
            <button className='search-button' onClick={handleSubmit} type = 'submit'>Search</button>
        </form>
    )

}

export default SearchBar

<form id="search-form">
    <div class="search">
      <input type="text" name="search" class="round" />
      <input type="submit" class="corner" value="" />
    </div>
</form>

