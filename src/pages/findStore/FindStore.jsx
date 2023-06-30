import React, { useEffect, useState } from "react";
import axios from "axios";

import style from "./findstore.module.css";
import Layout from "../../layout/Layout";

import { mapService } from "../../services/MapServices";
import DesktopMap from "./desktop/DesktopMap";
import MobileMap from "./mobile/MobileMap";

const FindStore = () => {

  

  const [isLargeScreen, setIsLargeScreen] = useState(
    window.matchMedia("(min-width: 1270px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1270px)");

    const handleResize = (event) => {
      setIsLargeScreen(event.matches);
    };

    mediaQuery.addListener(handleResize);

    return () => {
      mediaQuery.removeListener(handleResize);
    };
  }, []);

  const MapServices = mapService;

  const userLat = JSON.parse(sessionStorage.getItem("lat"));
  const userLon = JSON.parse(sessionStorage.getItem("lon"));

  const [country, setCountry] = useState("");
  const [lat, setLat] = useState(userLat);
  const [lon, setLon] = useState(userLon);
  const [nikeStores, setNikeStores] = useState([]);

  useEffect(() => {
    const fetchNikeStores = async () => {
      try {
        const response = await MapServices.getStores(lat, lon, 50000);
        setNikeStores(response.data.results);
      } catch (error) {
        console.log("Error fetching Nike stores:", error);
      }
    };
    fetchNikeStores();
  }, [lat, lon]);

  const fetchCountry = () => {
    fetch(`https://api.api-ninjas.com/v1/city?name=${country}`, {
      headers: { "X-Api-Key": "Q5v9IqChcQyrtxFzq0hdog==akhTXM9A1MDhfF1a" },
    })
      .then((response) => response.json())
      .then((json) => {
        json.map((city) => {
          setLat(city.latitude);
          sessionStorage.setItem("lat", JSON.stringify(city.latitude));
          setLon(city.longitude);
          sessionStorage.setItem("lon", JSON.stringify(city.longitude));
        });
      });
  };

  console.log(lat);
  console.log(lon);

  const searchCountry = (e) => {
    e.preventDefault();
    setCountry(e.target.value);
  };

  console.log(country);

  return (
    <Layout>
      {isLargeScreen ? ( 
        <DesktopMap
          searchCountry={searchCountry}
          fetchCountry={fetchCountry}
          nikeStores={nikeStores}
          lat={lat}
          lon={lon}
        />
      ) : (
        <MobileMap
          searchCountry={searchCountry}
          fetchCountry={fetchCountry}
          nikeStores={nikeStores}
          lat={lat}
          lon={lon}
        />
      )}
    </Layout>
  );
};

export default FindStore;
