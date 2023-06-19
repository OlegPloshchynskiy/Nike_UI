import React, { useEffect, useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import axios from 'axios';


import markerIcon from '../../../public/images/location-marker.png'

import style from './map.module.css'
import { mapService } from '../../services/MapServices';

const NikeMap = ({ lat, lon, nikeStores }) => {

  const MapServices = mapService;

  const mapStyles = {
    width: '960px', 
    height: '720px',  
  }; 
  
  return (
    <div className={style.containerStyle}> 
      <Map
        google={google}
        zoom={10}  
        style={mapStyles}
        center={{ lat: lat, lng: lon }} 
        styles={[
          { 
            featureType: 'water',
            elementType: 'geometry', 
            stylers: [
              { color: '#8CDBF6' },
            ],
          }, 
          {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [
              { color: '#C1E4A8' },
            ],
          },
          { 
            featureType: 'road',
            elementType: 'all',
            stylers: [
              { color: '#AFB8CD' },
            ],
          },
        ]} 
      >
        {nikeStores.map((store) => (
          <Marker
            key={store.place_id}
            name={store.name}
            icon={{
              url: markerIcon
            }}
            position={{
              lat: store.geometry.location.lat,
              lng: store.geometry.location.lng
            }}
          />   
        ))}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAsJ37tGALWYVqtHYClGqrcl1v08wXCkzg'
})(NikeMap);
