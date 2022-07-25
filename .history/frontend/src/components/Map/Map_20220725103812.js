import React from "react";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";
import { formRelative } from "date-fns";

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

import mapStyles from "./mapStyles";
import "./Map.css"

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
        googleMapsApiKey: "AIzaSyBo1EztnAee7dq5I7gnva9XjockMNBg41U",
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
        <GoogleMap 
      mapContainerStyle={mapContainerStyle}
      zoom={8}
      center={center}
      options={options}
      onClick={onMapClick}
        
      >
        {markers.map((marker) => (
        <Marker key={marker.time.toISOString()} 
        position={{ lat: marker.lat, lng: marker.lng }}
        icon={{
          url: "/bear.svg",
          scaledSize: new window.google.maps.Size(20,20),
          origin: new window.google.maps.Point(0,0),
          anchor: new window.google.maps.Point(15,15)
        }}
        onClick={() => {
          setSelected(marker);
        }}
        />
        ))}

        {selected ? (
        <InfoWindow position={{lat: selected.lat, lng: selected.lng}} 
        onCloseClick={()=> {
          setSelected(null);
          }}
          >
          <div>
            <h2>Bear Spotted!</h2>
            <p>Spotted {formatRelative(selected.time, new Date())}</p>
          </div>
        </InfoWindow>) : null}
      </GoogleMap>
      <
}