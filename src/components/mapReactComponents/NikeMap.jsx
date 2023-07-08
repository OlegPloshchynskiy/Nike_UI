import React, { useEffect, useState } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import axios from "axios";

import markerIcon from "../../../public/images/location-marker.png";

import style from "./map.module.css";

const NikeMap = ({ nikeStores, width, lat, lon }) => {

  const [centerLat, setCenterLatLat] = useState(0)
  const [centerLon, setCenterLatLon] = useState(0)

  const mapStyles = {
    width: width,
    height: "720px",
    top: 0,
    left: 0,
  };

  useEffect(() => {
    const handleLocation = () => {
      setCenterLatLat(lat);
      setCenterLatLon(lon);
    };

    handleLocation();
  }, [lat, lon]);

  return (
    <div className={style.container}>
      <Map
        google={google}
        zoom={10}
        style={mapStyles}
        center={{ lat: centerLat, lng: centerLon }}
        styles={[
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#8CDBF6" }],
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{ color: "#C1E4A8" }],
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [{ color: "#AFB8CD" }],
          },
        ]}
      >
        {nikeStores.map((store, index) => (
          <Marker
            className={style.marker}
            key={index}
            name={store.name}
            icon={{
              url: markerIcon,
              scaledSize: new google.maps.Size(40, 40),
            }}
            position={{
              lat: store.geometry.location.lat,
              lng: store.geometry.location.lng,
            }}
          />
        ))}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAsJ37tGALWYVqtHYClGqrcl1v08wXCkzg",
})(NikeMap);
