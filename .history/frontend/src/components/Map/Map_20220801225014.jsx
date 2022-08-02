import React from "react";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";
// import { formRelative } from "date-fns";

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


const libraies = ['places']
const mapContainerStyle = {
    width: '100vh',
    height: "100vh",
};

const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
}

export default function Map(props) {
    const{ isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyBo1EztnAee7dq5I7gnva9XjockMNBg41U",
        libraies,
    });

    
    const brewery = props.brewery
    const lat = props
    const lng = -85.6206317
    const [markers, setMarkers] = React.useState([])
    const [selected, setSelected] = React.useState(null);
    const [center, setCenter] = React.useState({lat: 44.7630567, lng: -85.6206317})
  

  
    const onSearch = React.useCallback((event) => {
    setMarkers(current => [
      ...current,
      {
        lat: Number(event.longitude),
        lng: Number(event.latitude),
      }
    ] );
  }, []);

  
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

    const panTo = React.useCallback(({lat, lng}) => {
      mapRef.current.panTo({brewery.latitude, brewery.longitude});
      mapRef.current.setZoom(11)
    }, [])


  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

 
  
  

    return <div>
        <h3>Breweries <span role='img' aria-label="brewery">🍺</span></h3>
        <GoogleMap 
      mapContainerStyle={mapContainerStyle}
      zoom={11}
      center={center}
      options={options}
      onMapLoad = {onMapLoad}
      >
        {brewery.map((marker) => {
         if (marker.longitude && marker.latitude) {
          
         return (
        <Marker key={marker.id} 
        position={{ lat: Number(marker.latitude), lng: Number(marker.longitude) }}
        icon={{
          url: "/beer.svg",
          scaledSize: new window.google.maps.Size(20,20),
          origin: new window.google.maps.Point(0,0),
          anchor: new window.google.maps.Point(15,15)
        }}
        onClick={() => {
          console.log(".....MARKER......", marker)
          setSelected(marker)
        }}
        
        />)
      }
      else{
        return ''
      }
      })}

        {selected ? (
        <InfoWindow position={{ lat: Number(selected.latitude), lng: Number(selected.longitude) }}
        onCloseClick={()=> {
          setSelected(null);
          }}
          >
          <div>
            <h2>{selected.name}</h2>
            <p>{selected.street}</p>
          </div>
        </InfoWindow>) : null}
      </GoogleMap>
      </div>
}