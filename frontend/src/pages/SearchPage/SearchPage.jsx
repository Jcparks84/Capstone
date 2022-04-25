import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from '../../components/SearchBar/SearchBar';
import BreweryPage from '../BreweryPage/BreweryPage';
import { Link } from 'react-router-dom';
import './SearchPage.css'
import { Button, Card } from 'react-bootstrap/Button'
import Tags from '../../components/Tags/Tags';


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
        console.log('ratings array', arr);
        return Array.from(arr).reduce((total, val) => {
            return total + (val.score / length);
        }, 0);
    }

    async function getRatings() {
        if (brewery.length) {
            for (let index = 0; index < brewery.length; index++) {
                const element = brewery[index];
                try {
                    axios.get(
                        `http://127.0.0.1:8000/api/ratings/add/${element['id']}`,
                    ).then(async (response) => {
                        console.log('brewery_id ragins', response.data);
                        const avg = await findAvg(response.data)
                        console.log('avg ratings', avg, element.id);
                    });

                } catch (error) {
                    console.log(error);
                }
            }
        }
    }

    useEffect(() => {
        getRatings();
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
                                <td>Rating: 5/5</td>
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