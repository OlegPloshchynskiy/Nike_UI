import React from "react";
import { Link, useLocation } from "react-router-dom";

import Layout from "../../layout/Layout";

import image_banner_1 from "../../../public/images/goods_banner_first.jpg";
import image_banner_2 from "../../../public/images/goods_banner_second.jpg";
import image_banner_3 from "../../../public/images/goods_banner_third.jpg";

import GoodsDetails from "../../components/goodsDetails/GoodsDetails";
import GoodsPhoto from "../../components/goodsPhoto/GoodsPhoto";

import style from "./goods_page.module.css";

const GoodsPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const goods_details = queryParams.get("goods_details");
  const price = queryParams.get("price");

  return (
    <Layout>
      <Link to="/shop" className={style.go_back}>
        <h2>Back to Shop</h2>
      </Link>
      <div className={style.goods}>

        <GoodsPhoto image={goods_details} />

        <GoodsDetails price={price} />
      </div>

      <p className={style.banner_description}>
        Explore the Nike Air Max 97 SE Men's Shoes
      </p>
      <img src={image_banner_1} alt="" width="71%" />
      <p className={style.banner_description}>
        Originally designed for performance running, the full-length Max Air
        unit adds soft cushioning.
      </p>
      <img src={image_banner_2} alt="" width="71%" />
      <p className={style.banner_description}>
        The suede and synthetic leather upper with mesh underlays adds
        breathability and durability.
      </p>
      <img src={image_banner_3} alt="" width="71%" />
      <p className={style.banner_description}>
        Hidden lacing system was a first of its kind and delivers a streamlined
        look.
      </p>
    </Layout>
  );
};

export default GoodsPage;
