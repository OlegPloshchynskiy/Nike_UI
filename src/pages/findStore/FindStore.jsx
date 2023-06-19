import React, { useEffect, useState } from "react";
import axios from "axios";

import Search from "../../components/search/Search";

import style from "./findstore.module.css";
import Layout from "../../layout/Layout";
import NikeMap from "../../components/mapReactComponents/NikeMap";

import { mapService } from "../../services/MapServices";

const FindStore = () => {
  const MapServices = mapService;

  const [country, setCountry] = useState("");
  const [lat, setLat] = useState(40.7071);
  const [lon, setLon] = useState(-74.0091);
  const [nikeStores, setNikeStores] = useState([]);

  useEffect(() => {
    const fetchNikeStores = async () => {
      try {
        const response = await MapServices.getStores(lat, lon);
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
          setLon(city.longitude);
        });
      });
  };

  const searchCountry = (e) => {
    e.preventDefault();
    setCountry(e.target.value);
  };

  return (
    <Layout>
      <div className={style.container}>
        <Search
          func={searchCountry}
          btnFunc={fetchCountry}
          nikeStores={nikeStores}
        />
        <div className={style.block}>
          <NikeMap lat={lat} lon={lon} nikeStores={nikeStores} />
        </div>
      </div>
    </Layout>
  );
};

export default FindStore;
