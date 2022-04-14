import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../../components/SearchBar/SearchBar';
import BreweryPage from '../BreweryPage/BreweryPage';
import { Link } from 'react-router-dom';


const SearchPage = (props) => {
    const [brewery, setBrewery] = useState([]);
    const [breweryId, setBreweryId] = useState ('');
    const [breweryResults, setBreweryResults] = useState ([])

    async function getBrewery(search){
        let response = await axios.get(
            `https://api.openbrewerydb.org/breweries/search?query=${search}`
        );
        console.log('Brewery', response.data)
        setBrewery(response.data)
    }

    // async function getBreweryById(setBreweryId){
    //     let response = await axios.get(
    //         `https://api.openbrewerydb.org/breweries/${setBreweryId}`
    //     );
    //     console.log('brewery id', response.data)
    //     setBreweryId(response.data)
    //     console.log(breweryId)
    // }

    const handleClick = (e, id) => {
        e.preventDefault();
        setBrewery(id)
        console.log('handleClick', id)
    }

    

    return (
        <div className="container">
          <h1>Search Brewery by Name or City</h1>
          <SearchBar placeholder='Enter brewery or city' handleChange={(e) => console.log(e.target.value)} getBrewery={getBrewery}/>
          <table>
              <tbody>
                  {brewery.map((brewery, index)=>{
                      return(
                        <tr className='row' key={index}>
                            <Link to={`/brewery/${brewery.id}`}>Details</Link>
                            <td>{brewery.name}</td>
                            <td>{brewery.city}</td>
                            <td>{brewery.state}</td>
                        </tr>
                      )
                  })}
              </tbody>
          </table>
          <BreweryPage brewery = {brewery} setBreweryId = {setBreweryId}/>
        </div>
      );

};

export default SearchPage;