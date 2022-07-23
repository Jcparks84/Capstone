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

import mapStyles from "./mapStyles";
import "./Map.css"
import "./.env"

const libraies = ['places']
const mapContainerStyle = {
    width: '100vh',
    height: "100vh",
};
const center = {
    lat: 44.7630567,
    lng: -85.6206317,
};
const options = {
    style: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
}

export default function Map() {
    const{ isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: REACT_APP_GOOGLE_API_KEY,
        libraies,
    });

    const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  })

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

    return <div>
        <h3>Breweries <span role='img' aria-label="brewery">🍺</span></h3>
        <GoogleMap mapContainerStyle = {mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onLoad={onMapLoad}
        ></GoogleMap>
    </div>;
}