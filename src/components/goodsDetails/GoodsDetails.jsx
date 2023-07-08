import { useEffect, useState } from "react";
import Button from "../button/Button";
import style from "./details.module.css";
import { toast } from "react-hot-toast";

const GoodsDetails = ({ price, image, type, name }) => {
  const userData = JSON.parse(sessionStorage.getItem("logined")) || [];

  const btn_width = { width: "100%" };

  const [size, setSize] = useState(0);
  const [id, setId] = useState(0);
  const [goodsList, setGoodsList] = useState([]);
  const [isAdded, setIsAdded] = useState(false);

  const white_btn_style = {
    width: "100%",
    color: "black",
    background: "white",
    border: "1px solid grey",
  };

  const addedGoods = {
    name: name,
    image: image,
    price: price,
    type: type,
    size: size,
  };

  useEffect(() => {
    setGoodsList([...userData.goods]);
  }, []);

  const addToBag = () => {
    if (size === 0) {
      toast.error("Choose size!");
      return;
    }

    if (isAdded) {
      toast.error("Item already added to bag!");
      return;
    }

    const keys = Object.keys(localStorage);
    setId(id + 1);

    keys.forEach((user) => {
      if (user.startsWith("User")) {
        const storedData = JSON.parse(localStorage.getItem(user));

        if (storedData.email === userData.email) {
          const existingObject = JSON.parse(localStorage.getItem("logined"));
          existingObject.goods = [...goodsList, addedGoods];
          localStorage.setItem("logined", JSON.stringify(existingObject));
          localStorage.setItem(`${user}`, JSON.stringify(existingObject));
          sessionStorage.setItem("logined", JSON.stringify(existingObject));
          toast.success("Added!")
        }
      }
    });

    setIsAdded(true);
  };

  const checkUserLogined = () => {
    if (userData === "") {
      return (window.location.href = "./log_in");
    }
    return true;
  };


  const clear = () => {

    const keys = Object.keys(localStorage);

    keys.forEach((user) => {
      if (user.startsWith("loginedUser")) {
        const storedData = JSON.parse(localStorage.getItem(user));

        if (storedData.email === userData.email) {
          const existingObject = JSON.parse(localStorage.getItem("logined"));
          existingObject.goods = [];
          localStorage.setItem("logined", JSON.stringify(existingObject));
          localStorage.setItem(`${user}`, JSON.stringify(existingObject));
          sessionStorage.setItem("logined", JSON.stringify(existingObject));
        }
      }
    });

    window.location.reload()
  };





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
          <button
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
          </button>
        </div>
      </div>

      <Button title="Add to Bag" styles={btn_width} func={addToBag} />
      <br />
      <Button
        title="Favourite"
        styles={white_btn_style}
        func={clear}
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
