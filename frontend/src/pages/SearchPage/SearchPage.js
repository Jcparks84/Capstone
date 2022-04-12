import React from 'react';
import React, { useState, useEffect } from 'react';
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

}