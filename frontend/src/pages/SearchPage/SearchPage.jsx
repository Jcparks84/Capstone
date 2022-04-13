import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../../components/SearchBar/SearchBar';
import BreweryPage from '../BreweryPage/BreweryPage';


const SearchPage = (props) => {
    const [brewery, setBrewery] = useState([]);
    const [breweryId, setBreweryId] = useState ('')

    async function getBrewery(search){
        let response = await axios.get(
            `https://api.openbrewerydb.org/breweries/search?query=${search}`
        );
        console.log('Brewery', response.data)
        setBrewery(response.data)
    }



    // const handleClick = (event) => {
    //     event.preventDefault();
    //     props.setCurrentBrewery()
    //     console.log('handleClick')
    // }

    return (
        <div className="container">
          <h1>Search Brewery by Name or City</h1>
          <SearchBar placeholder='Enter brewery' handleChange={(e) => console.log(e.target.value)} getBrewery={getBrewery}/>
          <table>
              <tbody>
                  {brewery.map((brewery, index)=>{
                      return(
                        <tr className='row' key={index}>
                            <td>{brewery.name}</td>
                            <td>{brewery.city}</td>
                            <td>{brewery.state}</td>
                        </tr>
                      )
                  })}
              </tbody>
          </table>
        </div>
      );

};

export default SearchPage;