import React from "react";
import style from "./search.module.css";
import Button from "../button/Button";
import search from "../../../public/images/search-icon.png";
import { Link } from "react-router-dom";

const Search = ({ func, btnFunc, nikeStores }) => {
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
            <div className={style.card} key={index}>
              <h2>{store.name}</h2>
              <p>{store.vicinity}</p>
              <p>{store.plus_code.compound_code}</p>
              <p className={store.opening_hours ? style.green : style.red}>
                {store.opening_hours ? "Open" : "Closed"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
