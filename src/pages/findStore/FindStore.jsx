import { useEffect, useState } from "react";

import Layout from "../../layout/Layout";

import { mapService } from "../../services/MapServices";
import DesktopMap from "./desktop/DesktopMap";
import MobileMap from "./mobile/MobileMap";

const FindStore = () => {
  const MapServices = mapService;

  const userLat = JSON.parse(localStorage.getItem("userLat"));
  const userLon = JSON.parse(localStorage.getItem("userLon"));

  const targetLat = JSON.parse(sessionStorage.getItem("userLat")) || userLat;
  const targetLon = JSON.parse(sessionStorage.getItem("userLon")) || userLon;

  const [country, setCountry] = useState("");
  const [lat, setLat] = useState(targetLat);
  const [lon, setLon] = useState(targetLon);
  const [nikeStores, setNikeStores] = useState([]);

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
          setLon(city.longitude);
          sessionStorage.setItem("userLat", JSON.stringify(city.latitude))
          sessionStorage.setItem("userLon", JSON.stringify(city.longitude))
        });
      });
  };

  const searchCountry = (e) => {
    e.preventDefault();
    setCountry(e.target.value);
  };

  return (
    <Layout>
      {isLargeScreen ? (
        <DesktopMap
          searchCountry={searchCountry}
          nikeStores={nikeStores}
          fetchCountry={fetchCountry}
          lat={lat}
          lon={lon}
        />
      ) : (
        <MobileMap
          searchCountry={searchCountry}
          nikeStores={nikeStores}
          fetchCountry={fetchCountry}
          lat={lat}
          lon={lon}
        />
      )}
    </Layout>
  );
};

export default FindStore;
