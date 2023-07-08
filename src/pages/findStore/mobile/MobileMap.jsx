import { useState } from "react";
import Search from "../../../components/search/Search";
import NikeMap from "../../../components/mapReactComponents/NikeMap";

import style from "./mobile.module.css";

const MobileMap = ({ searchCountry, fetchCountry, nikeStores, lat, lon }) => {
  const [page, setPage] = useState(true);

  const openMap = () => {
    setPage(false);
  };

  const openList = () => {
    setPage(true);
  };

  const width = "100%";

  return (
    <div className={style.content}>
      <div className={style.link_block}>
        <button
          className={style.link}
          id={page ? style.unactive : style.active}
          onClick={openMap}
        >
          Map
        </button>
        <button
          className={style.link}
          id={page ? style.active : style.unactive}
          onClick={openList}
        >
          List
        </button>
        {page ? (
          <Search
            searchCountry={searchCountry}
            fetchCountry={fetchCountry}
            nikeStores={nikeStores}
          />
        ) : (
          <NikeMap lat={lat} lon={lon} nikeStores={nikeStores} width={width} />
        )}
      </div>
    </div>
  );
};

export default MobileMap;
