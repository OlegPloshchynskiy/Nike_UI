import React from "react";
import { useLocation } from "react-router-dom";

import Layout from "../../layout/Layout";
import Button from "../../components/button/Button";

import image_banner_1 from '../../../public/images/goods_banner_first.jpg'
import image_banner_2 from '../../../public/images/goods_banner_second.jpg'
import image_banner_3 from '../../../public/images/goods_banner_third.jpg'

import style from "./goods_page.module.css";

const GoodsPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const goods_details = queryParams.get("goods_details");

  console.log(goods_details);

  const btn_width = { width: "100%" };

  const white_btn_style = {
    width: "100%",
    color: "black",
    background: "white",
    border: "1px solid grey",
  };

  return (
    <Layout>
      <div className={style.goods}>
        <div className={style.goods_images}>
          <div className={style.loading}>
            <img src={goods_details} alt="" width="100%" />
          </div>
          <div className={style.loading}>
            <img src={goods_details} alt="" width="100%" />
          </div>
          <div className={style.loading}>
            <img src={goods_details} alt="" width="100%" />
          </div>
          <div className={style.loading}>
            <img src={goods_details} alt="" width="100%" />
          </div>
          <div className={style.loading}>
            <img src={goods_details} alt="" width="100%" />
          </div>
          <div className={style.loading}>
            <img src={goods_details} alt="" width="100%" />
          </div>
        </div>
        <div className={style.goods_description}>
          <h1>Nike Air Force 1 Mid '07</h1>
          <p>Men's Shoes</p>
          <br />
          <h3>Price: 130$</h3>
          <p className={style.description}>
            incl. of taxes
            <br />
            (Also includes all applicable duties)
          </p>

          <div className={style.sizes}>
            <h3>Select size</h3>
            <div className={style.btn_block}>
              <button
                className={style.sel_size}
                value="35"
                onClick={(e) => console.log(e.target.value)}
              >
                35
              </button>
              <button
                className={style.sel_size}
                value="36"
                onClick={(e) => console.log(e.target.value)}
              >
                36
              </button>
              <button
                className={style.sel_size}
                value="37"
                onClick={(e) => console.log(e.target.value)}
              >
                37
              </button>
              <button
                className={style.sel_size}
                value="38"
                onClick={(e) => console.log(e.target.value)}
              >
                38
              </button>
              <button
                className={style.sel_size}
                value="39"
                onClick={(e) => console.log(e.target.value)}
              >
                39
              </button>
              <button
                className={style.sel_size}
                value="40"
                onClick={(e) => console.log(e.target.value)}
              >
                40
              </button>
              <button
                className={style.sel_size}
                value="41"
                onClick={(e) => console.log(e.target.value)}
              >
                41
              </button>
              <button
                className={style.sel_size}
                value="42"
                onClick={(e) => console.log(e.target.value)}
              >
                42
              </button>
              <button
                className={style.sel_size}
                value="43"
                onClick={(e) => console.log(e.target.value)}
              >
                43
              </button>
              <button
                className={style.sel_size}
                value="44"
                onClick={(e) => console.log(e.target.value)}
              >
                44
              </button>
              <button
                className={style.sel_size}
                value="45"
                onClick={(e) => console.log(e.target.value)}
              >
                45
              </button>
              <button
                className={style.sel_size}
                value="46"
                onClick={(e) => console.log(e.target.value)}
              >
                46
              </button>
            </div>
          </div>

          <Button title="Add to Bag" styles={btn_width} />
          <br />
          <Button title="Favourite" styles={white_btn_style} />
          <p className={style.about_goods}>
            Layer on style with the Air Max 97. The cracked leather and soft
            suede update the iconic design while the original look (inspired by
            Japanese bullet trains and water droplets) still takes centre stage.
            Easy-to-style colours let you hit the streets quickly.
          </p>
          <p>Colour Shown: Flat Pewter/Light Bone/Black/White</p>
          <p>Style: DV7421-001</p>
        </div>
      </div>

      <p className={style.banner_description}>Explore the Nike Air Max 97 SE Men's Shoes</p>
      <img src={image_banner_1} alt="" />
      <p className={style.banner_description}>Originally designed for performance running, the full-length Max Air unit adds soft cushioning.</p>
      <img src={image_banner_2} alt="" />
      <p className={style.banner_description}>The suede and synthetic leather upper with mesh underlays adds breathability and durability.</p>
      <img src={image_banner_3} alt="" />
      <p className={style.banner_description}>Hidden lacing system was a first of its kind and delivers a streamlined look.</p>
              
    </Layout>
  );
};

export default GoodsPage;
