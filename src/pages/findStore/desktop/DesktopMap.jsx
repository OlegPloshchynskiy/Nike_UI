import React from "react";
import Search from "../../../components/search/Search";
import NikeMap from "../../../components/mapReactComponents/NikeMap";

import style from './desktop.module.css'

const DesktopMap = ({searchCountry, fetchCountry, nikeStores, lat, lon}) => {
  const width = "60%"
  return (
    <div className={style.container}>
      <Search
        func={searchCountry}
        btnFunc={fetchCountry}
        nikeStores={nikeStores}
      />
      <div>
        <NikeMap lat={lat} lon={lon} nikeStores={nikeStores} width={width} />
      </div>
    </div>
  );
};

export default DesktopMap;
