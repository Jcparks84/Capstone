import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from '../../components/SearchBar/SearchBar';
import BreweryPage from '../BreweryPage/BreweryPage';
import { Link } from 'react-router-dom';
import './SearchPage.css'
import Map from '../../components/Map/Map';
import Geocode from "react-geocode";


const SearchPage = (props) => {
    const [brewery, setBrewery] = useState([]);
    const [breweryId, setBreweryId] = useState('');
    const [breweryResults, setBreweryResults] = useState([])
    const [ratings, setRatings] = useState([]);
    

    async function getBrewery(search) {
        let response = await axios.get(
            `https://api.openbrewerydb.org/breweries/search?query=${search}`
        );
        console.log('Brewery', response.data)
        setBrewery(response.data)
    }


    const findAvg = (arr) => {
        const { length } = arr;
        return Array.from(arr).reduce((total, val) => {
            return total + (val.score / length);
        }, 0);
    }

    const findRating = (id) => {
        const rating = ratings.filter(e => e.id == id);
        return rating.length && parseInt(rating[0]['rating']).toFixed(1);

    }

    async function getRatings() {
        for (let index = 0; index < brewery.length; index++) {
            const element = brewery[index];
            try {
                axios.get(
                    `http://127.0.0.1:8000/api/ratings/add/${element['id']}`,
                ).then(async (response) => {
                    // console.log('brewery_id ratings', response.data);
                    const avg = await findAvg(response.data.data)
                    // console.log('avg ratings', avg, element.id);
                    setRatings([...ratings, { id: element.id, rating: avg }]);
                });

            } catch (error) {
                console.log(error);
            }
        }
    }

    useEffect(async() => {
        await getRatings();
    }, [brewery])

    const handleClick = (e, id) => {
        e.preventDefault();
        setBrewery(id)
        console.log('handleClick', id)
    }



    return (
        <div className="container">
            <h1>Search Brewery by Name or City</h1>
            <SearchBar placeholder='Enter brewery or city' handleChange={(e) => console.log(e.target.value)} getBrewery={getBrewery} />
            <div>
                <Map brewery = {brewery}/>
            </div>
            <table>
                <tbody>
                    {brewery.map((brewery, index) => {
                        return (
                            <tr className='row' key={index}>
                                <Link to={`/brewery/${brewery.id}`}>Details</Link>
                                <td>{brewery.name}</td>
                                <td>{brewery.city}</td>
                                <td>{brewery.state}</td>
                                <td>Ipa Stout</td>
                                <td>Rating: {ratings.length && findRating(brewery.id)}/5</td>
                                {/* <td>Rating: {ratings && ratings[index]}/5</td> */}
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
            <BreweryPage brewery={brewery} setBreweryId={setBreweryId} />
        </div>
    );

};

export default SearchPage;