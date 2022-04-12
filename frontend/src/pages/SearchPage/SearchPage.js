import React, { useState } from 'react';
import axios from 'axios';


const SearchPage = () => {
    const [brewery, setBrewery] = useState([]);
    const [breweryId, setBreweryId] = useState ('')

    async function getBrewery(search){
        let response = await axios.get(
            `https://api.openbrewerydb.org/breweries/search?query=dog`
        );
        console.log('Brewery', response.data)
        setBrewery(response.data)
    }

    return (
        <div className="container">
          <h1>Home Page for {user.username}!</h1>
          {cars &&
            cars.map((car) => (
              <p key={car.id}>
                {car.year} {car.model} {car.make}
              </p>
            ))}
        </div>
      );

};

export default SearchPage;