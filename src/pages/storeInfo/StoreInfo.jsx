import React from "react";
import Layout from "../../layout/Layout";
import { Link } from "react-router-dom";

import Container from "../../components/container/Container";

import banner from "../../../public/images/store-banner.jpg";
import store from "../../../public/images/classic-store.png";

import style from "./storeinfo.module.css";

const StoreInfo = ({ func }) => {
  return (
    <Layout>
      <header className={style.header}>
        <Link className={style.go_back} to="/findstore">
          Back to Search
        </Link>
      </header>
      <Container>
        <img src={banner} alt="" width="100%" />
        <div className={style.store_info}></div>
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
