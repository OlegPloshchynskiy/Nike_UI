import React, { useState } from "react";
import Button from "../button/Button";
import search from "../../../public/images/search-icon.png";
import { Link } from "react-router-dom";

import style from "./search.module.css";
import StoreInfo from "../../pages/storeInfo/StoreInfo";

const Search = ({ func, btnFunc, nikeStores }) => {

  const [storeState, setStoreState] = useState(0);
  const [key, setKey] = useState(0);

  const hendleStoreInfo = () => {
    storeState === 1 ? setStoreState(0) : setStoreState(1) 
    console.log(storeState);
  }

  return (
    <div className={style.container}>

      

      <p className={style.title}>Find a Nike Store</p>
      <div className={style.search_box}>
        <img src={search} alt="" />
        <input
          type="text"
          name="search"
          id={style.search}
          onBlur={func}
          placeholder="Search Location"
        />
        <Button title="Search" func={btnFunc} />
      </div>
      <div className={style.filter}>
        {nikeStores.map((store, index) => {
          return (
            <Link className={style.store_info_link} to="/storeinfo" >
              <div className={style.card} key={index}>
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
