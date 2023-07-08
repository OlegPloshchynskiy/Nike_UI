import Button from "../button/Button";
import search from "../../../public/images/search-icon.png";
import { Link } from "react-router-dom";

import style from "./search.module.css";

const Search = ({ searchCountry, fetchCountry, nikeStores }) => {

  const styles = {
    borderRadius: "0 20px 20px 0",
  }

  return (
    <div className={style.container}>
      <p className={style.title}>Find a Nike Store</p>
      <div className={style.search_container}>
        <div className={style.search_box}>
          <img src={search} alt="" />
          <input
            type="text"
            name="search"
            id={style.search}
            onBlur={searchCountry}
            placeholder="Search Location"
          />
        </div>
      <Button title="Search" func={fetchCountry} styles={styles} />
      </div>
      <div className={style.filter}>
        {nikeStores.map((store, index) => {
          const targetLat = `${store.geometry.location.lat}`;
          const targetLon = `${store.geometry.location.lng}`;
          return (
            <Link
              className={style.store_info_link}
              key={index}
              to={`/storeinfo?lat=${targetLat}&lon=${targetLon}`}
            >
              <div className={style.card}>
                <h2>{store.name}</h2>
                <p>{store.vicinity}</p>
                <p>{store.plus_code.compound_code}</p>
                <p className={store.opening_hours ? style.green : style.red}>
                  {store.opening_hours
                    ? "Open • Closes at 10:00 PM"
                    : "Closed • Opens at 11:00 AM"}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
