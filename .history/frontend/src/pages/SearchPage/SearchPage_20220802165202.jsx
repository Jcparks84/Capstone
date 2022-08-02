import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from '../../components/SearchBar/SearchBar';
import BreweryPage from '../BreweryPage/BreweryPage';
import { Link } from 'react-router-dom';
import './SearchPage.css'
import Map from '../../components/Map/Map';


const SearchPage = (props) => {
    const [brewery, setBrewery] = useState([]);
    const [breweryId, setBreweryId] = useState('');
    const [breweryResults, setBreweryResults] = useState([])
    const [ratings, setRatings] = useState([]);
    const [ center, setCenter ] = useState({lat: 44.7630600,
        lng: -85.6206300,});
   
        

    const updatecenter = (location) => {
         const location = axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${apiKey}`);


        console.log('location', location.data)

        //setCenter({lat, lng})
        
    }

    // useEffect(()=>{
    //     navigator.geolocation.getCurrentPosition(function(position){
    //         console.log("position", position)
    //         setCenter({
    //             lat: position.coords.latitude,
    //             lng: position.coords.longitude
    //         })
    //     })
    //})

    async function getBrewery(search) {
        let response = await axios.get(
            `https://api.openbrewerydb.org/breweries/search?query=${search}`
        );

        updatecenter( search );
     

        // Get lat/lng from address
        let arr = response.data;
        const locationPromises = arr.map(location => axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location.state + ' ' + location.city + ' ' + location.street }&key=${apiKey}`));
        const locationResponses = await Promise.all(locationPromises);
        const locns = locationResponses.map(locationResponse => locationResponse.data.results.length > 0 ? {lat: locationResponse.data.results[0].geometry.location.lat, lng:locationResponse.data.results[0].geometry.location.lng} : {});
        const updatedArray = arr.map((location, index) => ({ ...location, longitude: locns[index].lng, latitude:  locns[index].lat}));

        setBrewery( updatedArray );

    }
    
    const apiKey = "AIzaSyBCekT6Mco6yVcvbxOfUNjs9sb97NdE0Yg"
    
    const breweryStreet = brewery.map(brewery => brewery.street)
    const breweryCity = brewery.map(brewery => brewery.city)
    const breweryState = brewery.map(brewery => brewery.state)
	const [lat, setLat] = useState(37.0902)
    const [lng, setLng] = useState(-95.7129)
    const array = brewery

        for (let index = 0; index < array.length; index++) {
            let results = breweryStreet[index] + ' ' + breweryCity[index] + ' ' + breweryState[index];
    }

    const getLatLng = async (arr) => {
        
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
        console.log('handleClick', id)
    }



    return (
        <div className="container">
            <h1>Search Brewery by Name or City</h1>
            <SearchBar placeholder='Enter brewery or city' handleChange={(e) => console.log(e.target.value)} getBrewery={getBrewery}/>
            <div>
                <Map brewery = {brewery} lat = {lat} lng = {lng} getLatLng = {getLatLng} center={center} />
            </div>
            <table>
                <tbody>
                    {brewery.map((brewery, index) => {
                        return (
                            <tr className='row' key={index}>
                                <td><Link to={`/brewery/${brewery.id}`}>Details</Link></td>
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