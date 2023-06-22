import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";

import { storeService } from "../../services/StoreServices";

import style from "./shop.module.css";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";

const Shop = () => {
  const StoreServices = storeService;

  const [shoe, setShoe] = useState([]);
  const [page, setPage] = useState(1);

  const handlePageCount = (e) => {
    setPage(e.target.value);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const fetchNikeShoe = async () => {
      try {
        const response = await StoreServices.getShoe(page);
        setShoe(response.data.results);
      } catch (error) {
        console.log("Error fetching Nike stores:", error);
      }
    };
    fetchNikeShoe();
  }, [page]);

  return (
    <Layout>
      <div className={style.content}>
        <div className={style.gallary}>
          {shoe.map((goods, index) => {
            return (
              <Link className={style.card} key={index}>
                <img
                  src={goods.urls.small}
                  alt=""
                  height="300px"
                  width="300px"
                />
                <div className={style.detalies}>
                  <p className={style.title}>Just In</p>
                  <p className={style.name}>Nike Air Force 1 Mid '07</p>
                  <p className={style.type}>
                    Men's Shoes <br /> 1 Colour
                  </p>
                  <p className={style.price}>Price: 130$</p>
                </div>
              </Link>
            );
          })}
        </div>
        <div className={style.pagination}>
          

          {shoe.map((goods, index) => {
            return <Button key={index} title={index} func={handlePageCount} value={index} />
          })}








          {/* <Button title="2" func={handlePageCount} value="2" /> */}
          {/* <Button title="3" func={handlePageCount} value="3" /> */}
          {/* <Button title="4" func={handlePageCount} value="4" /> */}
          {/* <Button title="5" func={handlePageCount} value="5" /> */}
          {/* <Button title="6" func={handlePageCount} value="6" /> */}
          {/* <Button title="7" func={handlePageCount} value="7" /> */}
          {/* <Button title="8" func={handlePageCount} value="8" /> */}
          {/* <Button title="9" func={handlePageCount} value="9" /> */}
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
