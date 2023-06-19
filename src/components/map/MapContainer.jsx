import React from "react";
import style from "./map-container.module.css";

const MapContainer = ( {lat, lon} ) => {
  return (
    <div className={style.mapContainer}>
      <iframe
        className={style.map}
        src={`https://www.google.com/maps/d/embed?mid=1NDD3dLumZwzsrzXDqpwqLYmEoxgbJvc&ehbc=2E312F&ll=${lat}%2C${lon}&z=10`}
        width="960"
        height="720"
      ></iframe>
    </div>
  );
};

export default MapContainer;
