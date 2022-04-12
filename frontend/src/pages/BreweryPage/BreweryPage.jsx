import axios from "axios";
import React, { useState, useEffect } from 'react';


const BreweryPage = (props) => {
    const [brewery, setBrewery] = useState();

}

async function getBrewery(){
    let response = await axios.get(
        `https://api.openbrewerydb.org/breweries/search?query=${''}`
    );
    console.log('Brewery', response.data);
}

useEffect(()=>{
    getBrewery()
})