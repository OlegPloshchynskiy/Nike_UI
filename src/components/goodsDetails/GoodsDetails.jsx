import React, { useState } from "react";

import Button from "../button/Button";

import style from "./details.module.css";
import { toast } from "react-hot-toast";

const GoodsDetails = ({ price }) => {
  const btn_width = { width: "100%" };

  const [size, setSize] = useState(0);

  console.log(size);

  const white_btn_style = {
    width: "100%",
    color: "black",
    background: "white",
    border: "1px solid grey",
  };

  const targetBagCount = JSON.parse(localStorage.getItem("bagCount")) || 0;
  const targetFavCount = JSON.parse(localStorage.getItem("favCount")) || 0;

  const [bagCount, setBagCount] = useState(targetBagCount);
  const [favCount, setFavCount] = useState(targetFavCount);

  localStorage.setItem("bagCount", JSON.stringify(bagCount));
  localStorage.setItem("favCount", JSON.stringify(favCount));

  const handleBagCount = () => {
    setBagCount(bagCount + 1);
    toast.success("Added to Bag!", {
      style: {
        width: "250px",
      },
    });
  };

  const handleFavCount = () => {
    setFavCount(favCount + 1);
    toast.success("Added to Favourited!", {
      style: {
        width: "250px",
      },
    });
  };

  const sizeBtn = Array.from({ length: 12 }, (value=35, index) => (
    
    <button
      key={index}
      value={value}
      onClick={(e) => setSize(e.target.value)}
      className={style.sel_size}
    >
      {value}
    </button>
  )); 

  return (
    <div className={style.goods_description}>
      <h1>Nike Air Force 1 Mid '07</h1>
      <p>Men's Shoes</p>
      <br />
      <h3>Price: {price} $</h3>
      <p className={style.description}>
        incl. of taxes
        <br />
        (Also includes all applicable duties)
      </p>

      <div className={style.sizes}>
        <h3>Select size</h3>
        <div className={style.btn_block}>
          {sizeBtn}

          {/* <button
            className={style.sel_size}
            value="35"
            onClick={(e) => setSize(e.target.value)}
          >
            35
          </button>
          <button
            className={style.sel_size}
            value="36"
            onClick={(e) => setSize(e.target.value)}
          >
            36
          </button>
          <button
            className={style.sel_size}
            value="37"
            onClick={(e) => setSize(e.target.value)}
          >
            37
          </button>
          <button
            className={style.sel_size}
            value="38"
            onClick={(e) => setSize(e.target.value)}
          >
            38
          </button>
          <button
            className={style.sel_size}
            value="39"
            onClick={(e) => setSize(e.target.value)}
          >
            39
          </button>
          <button
            className={style.sel_size}
            value="40"
            onClick={(e) => setSize(e.target.value)}
          >
            40
          </button>
          <button
            className={style.sel_size}
            value="41"
            onClick={(e) => setSize(e.target.value)}
          >
            41
          </button>
          <button
            className={style.sel_size}
            value="42"
            onClick={(e) => setSize(e.target.value)}
          >
            42
          </button>
          <button
            className={style.sel_size}
            value="43"
            onClick={(e) => setSize(e.target.value)}
          >
            43
          </button>
          <button
            className={style.sel_size}
            value="44"
            onClick={(e) => setSize(e.target.value)}
          >
            44
          </button>
          <button
            className={style.sel_size}
            value="45"
            onClick={(e) => setSize(e.target.value)}
          >
            45
          </button>
          <button
            className={style.sel_size}
            value="46"
            onClick={(e) => setSize(e.target.value)}
          >
            46
          </button> */}
        </div>
      </div>

      <Button title="Add to Bag" styles={btn_width} func={handleBagCount} />
      <br />
      <Button
        title="Favourite"
        styles={white_btn_style}
        func={handleFavCount}
      />
      <p className={style.about_goods}>
        Layer on style with the Air Max 97. The cracked leather and soft suede
        update the iconic design while the original look (inspired by Japanese
        bullet trains and water droplets) still takes centre stage.
        Easy-to-style colours let you hit the streets quickly.
      </p>
      <p>Colour Shown: Flat Pewter/Light Bone/Black/White</p>
      <p>Style: DV7421-001</p>
    </div>
  );
};

export default GoodsDetails;
