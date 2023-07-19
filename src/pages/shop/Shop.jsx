import { useEffect, useState } from "react";

import { storeService } from "../../services/StoreServices";

import Layout from "../../layout/Layout";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";

import style from "./shop.module.css";

const Shop = () => {

  const StoreServices = storeService;

  const savedPage = JSON.parse(sessionStorage.getItem("page"));

  const [shoe, setShoe] = useState([]);
  const [page, setPage] = useState(1);

  const goodsDescription = {
    name: "Nike Air Force 1 Mid '07",
    type: "Men's Shoes",
  };

  const handlePageCount = (e) => {
    sessionStorage.setItem("page", JSON.stringify(e.target.value));
    setPage(savedPage);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const fetchNikeShoe = async () => {
      try {
        const response = await StoreServices.getShoe(savedPage);
        setShoe(response.data.results);
      } catch (error) {
        console.log("Error fetching Nike stores:", error);
      }
    };
    fetchNikeShoe();
  }, [savedPage]);

  return (
    <Layout>
      <div className={style.content}>
        <h1>Shop</h1>

        <div className={style.gallary}>
          {shoe.map((goods, index) => {
            let price = Math.floor(Math.random() * (460 - 90 + 1)) + 90;
            return (
              <Link
                className={style.card}
                key={index}
                to={`/goods_page?image=${goods.urls.small}&price=${price}&name=${goodsDescription.name}&type=${goodsDescription.type}`}
              >
                <img
                  src={goods.urls.small}
                  alt=""
                  height="300px"
                  width="300px"
                />
                <div className={style.detalies}>
                  <p className={style.title}>Just In</p>
                  <p className={style.name}>{goodsDescription.name}</p>
                  <p className={style.type}>
                    {goodsDescription.type} <br /> 1 Colour
                  </p>
                  <p className={style.price}>Price: {price} $</p>
                </div>
              </Link>
            );
          })}
        </div>
        <div className={style.pagination}>
          <Button title="1" func={handlePageCount} value="1" />
          <Button title="2" func={handlePageCount} value="2" />
          <Button title="3" func={handlePageCount} value="3" />
          <Button title="4" func={handlePageCount} value="4" />
          <Button title="5" func={handlePageCount} value="5" />
          <Button title="6" func={handlePageCount} value="6" />
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
