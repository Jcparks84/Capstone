import axios from "axios";
import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar";


const SearchPage = (props) => {
    const [searchResults, setSearchResults] = useState([]);
    const [breweryId, setBreweryId] = useState('');

    async function getSearchResults(search){
        let response = await axios.get(
            `https://api.openbrewerydb.org/breweries/=${search}`
        );
        console.log('Search Results', response.data.items)
    }
    const handleClick = (event, id, name, brewery_type, city) => {
        event.preventDefault();
        props.setCurrentBrewery(id, name, brewery_type, city)
        console.log('handleClick Triggered');
    }
    return(
        <div className='searchBar'>
        <searchBar className='searchBar' getSearchResults={getSearchResults}/>
        <table>
            <tbody>
                {searchResults.map((searchResults, index)=>{
                    return(
                        <tr className="row" key={index}>

                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    )
}

export default SearchPage