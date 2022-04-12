import React, {useState} from "react";
import './SearchBar.css';

const SearchBar = (props) => {

    const [searchRequest, setSearchRequest] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(searchRequest);
        props.getSearchResults(searchRequest)
    }

    return (
        <form className="searchBar">
            <div>
                <input type="text" placeholder="Search Brewery" value={searchRequest} onChange={(event)=> setSearchRequest(event.target.value)} />
            </div>
            <button className="searchButton" onClick={handleSubmit} type='submit'>Search Brewery</button>
        </form>
    )
}

export default SearchBar;