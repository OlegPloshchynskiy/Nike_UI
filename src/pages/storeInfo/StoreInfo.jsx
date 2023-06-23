import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import { Link, useLocation } from "react-router-dom";

import Container from "../../components/container/Container";

import { mapService } from "../../services/MapServices";

import banner from "../../../public/images/store-banner.jpg";
import store from "../../../public/images/classic-store.png";

import style from "./storeinfo.module.css";
import Button from "../../components/button/Button";

const StoreInfo = () => {

  const coordinates = JSON.parse(localStorage.getItem("coordinates")) || " ";
  
  
  const MapServices = mapService;
  
  const [nikeStores, setNikeStores] = useState([]);
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const lat = queryParams.get("lat");
  const lon = queryParams.get("lon");
  
  const url = `https://www.google.com/maps/dir/${coordinates}/${lat},${lon}`;

  const openNavigate = () => {
    window.open(url)
  }
  
  useEffect(() => {
    const fetchNikeStores = async () => {
      try {
        const response = await MapServices.getStores(lat, lon, 0.1);
        setNikeStores(response.data.results);
      } catch (error) {
        console.log("Error fetching Nike stores:", error);
      }
    };
    fetchNikeStores();
  }, [lat, lon]);

  const navigate = () => {

  }

  return (
    <Layout>
      <header className={style.header}>
        <Link className={style.go_back} to="/findstore">
          Back to Search
        </Link>
      </header>
      <Container>
        <img src={banner} alt="" width="100%" />
        <div className={style.store_info}>
          {nikeStores.map((store, index) => {
            return (
              <div key={index}>
                <h1>{store.name}</h1>
                <p className={style.rating}>{store.rating}</p>
                <p
                  className={
                    store.opening_hours.open_now === true
                      ? style.green
                      : style.red
                  }
                >
                  {store.opening_hours.open_now === true
                    ? "Open • Closes at 10:00 PM"
                    : "Closed • Opens at 11:00 AM"}
                </p>
                <br />
                <p>{store.vicinity}</p>
                <p>{store.plus_code.compound_code}</p>
                <Button title="Navigate" func={openNavigate} />
              </div>
            );
          })}
          <span>
            <h3>Store Hours:</h3> 
            <p>Sun - Fri: 10:00 AM - 9:00 PM</p>
            <p>Sat: 11:00 AM - 9:00 PM</p>
          </span>
        </div>
        <img src={store} alt="" width="80%" />
        <p className={style.under_image}>
          Gear up for sport with a wide selection of our newest footwear,
          apparel and accessories. Shop Men`s, Women`s, <br /> Kids` and Jordan`
        </p>
      </Container>
    </Layout>
  );
};

export default StoreInfo;
