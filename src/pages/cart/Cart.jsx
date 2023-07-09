import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";

import Button from "../../components/button/Button";

import trash from "../../../public/images/trash3.png";

import style from "./cart.module.css";

const Cart = () => {
  const styles = {
    background: "red",
    width: "300px",
    fontSize: "22px",
  };

  const [total, setTotal] = useState(0);

  const goodsData = JSON.parse(sessionStorage.getItem("logined")) || "";

  const goods = goodsData.goods;

  useEffect(() => {
    const handleTotalPrice = () => {
      let sum = 0;
      goods.forEach((elem) => {
        sum += Number(elem.price);
      });

      setTotal(sum);
    };

    handleTotalPrice();
  }, []);

  const handleCart = () => {
    if (goods.length < 1) {
      return (
        <div className={style.empryError}>
          <h1>Your cart is empty!</h1>
        </div>
      );
    } else {
      return (
        <>
          {goods.map(({ name, image, price, size, type, index }) => {
            return (
              <div className={style.card} key={index}>
                <img src={image} alt="" width="240px" height="240px" />
                <div className={style.description}>
                  <h2>{name}</h2>
                  <p>{type}</p>
                  <p>Size: {size}</p>
                  <button className={style.deleteBtn} value={index}>
                    <img src={trash} alt="" />
                  </button>
                </div>
                <div className={style.price}>Price: {price}$</div>
              </div>
            );
          })}
          <Button title="Clear Cart" func={clear} styles={styles} />
        </>
      );
    }
  };

  const clear = () => {
    const keys = Object.keys(localStorage);

    keys.forEach((user) => {
      if (user.startsWith("User")) {
        const storedData = JSON.parse(localStorage.getItem(user));

        if (storedData.email === goodsData.email) {
          const existingObject = JSON.parse(localStorage.getItem("logined"));
          existingObject.goods = [];
          localStorage.setItem("logined", JSON.stringify(existingObject));
          localStorage.setItem(`${user}`, JSON.stringify(existingObject));
          sessionStorage.setItem("logined", JSON.stringify(existingObject));
        }
      }
    });

    window.location.reload();
  };

  return (
    <Layout>
      <div className={style.container}>
        <div className={style.goods}>{handleCart()}</div>
        <div className={style.order}>
          <p>Summary</p>
          <p>
            <b>Subtotal: </b>
            <span>{total}$</span>
          </p>
          <p>
            <b>Delivery: </b>
            <span>23$</span>
          </p>
          <hr />
          <p>
            <b>Total: </b>
            <span>{total+23}$</span>
          </p>
          <Button title="Member Checkout" />
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
