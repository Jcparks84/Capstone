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

export default function Map() {
    const{} = useLoadScript({
        googleMapsApiKey: AIzaSyBo1EztnAee7dq5I7gnva9XjockMNBg41U
        li
    })

    return <div> map </div>;
}