import React from "react";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";
import { formRelative } from "date-fns";

// import usePlacesAutocomplete, {
//     getGeocode,
//     getLatLng,
// } from "use-places-autocomplete"
// import {
//     Combobox,
//     ComboboxInput,
//     ComboboxPopover,
//     ComboboxList,
//     ComboboxOption,
// } from "@reach/combobox/styles.css"

const libraies = ['places']
const mapContainerStyle = {
    width: '50vh',
    height: "50vh",
};
const center = {
    lat: 44.7630567,
    lng: -85.6206317,
};

export default function Map() {
    const{} = useLoadScript({
        googleMapsApiKey: "AIzaSyBo1EztnAee7dq5I7gnva9XjockMNBg41U",
        libraies,
    });

    // if (loadError) return "Error loading maps";
    // if (!isLoaded) return "Loading Maps";

    return <div>
        <GoogleMap mapContainerStyle = {mapContainerStyle}
        zoom={}
        ></GoogleMap>
    </div>;
}