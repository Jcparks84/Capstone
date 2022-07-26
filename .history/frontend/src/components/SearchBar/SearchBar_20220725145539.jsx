import React, { useState } from 'react';
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete"
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox/styles.css"

// return (
// <Combobox 
//     onSelect = {(address) => {
//         console.log(address);
//     }}
//     >
//         <ComboboxInput value = {value} onChange = {(e) => {
//             setValue(e.target.value)
//         }}
//         disabled={!ready}
//         placeholder
//         />
//     </Combobox>
// )


const SearchBar = (props) => {

const [brewery, setBrewery] = useState ('');

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(brewery);
    props.getBrewery(brewery)
}

    return(
        <form>
            <div>
                <input type='text' placeholder='Search Brewery' value={brewery} onChange={(event)=> setBrewery(event.target.value)}/>
            </div>
            <button onClick={handleSubmit} type = 'submit'>Search</button>
        </form>
    )

}

export default SearchBar