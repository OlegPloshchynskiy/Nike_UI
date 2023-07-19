import { useState } from "react";
import close_icon from "../../../public/images/x-lg.png";
import { Link } from "react-router-dom";

import avatar from "../../../public/images/person-circle.png";
import jordan from "../../../public/images/Jordan-logo.png";
import favourite from "../../../public/images/favourited-icon.png";
import cart from "../../../public/images/cart-icon.png";
import orders from "../../../public/images/orders-icon.png";
import store from "../../../public/images/store-icon.png";
import help from "../../../public/images/help-icon.png";

import { Toaster } from "react-hot-toast";

import style from "./mobmenu.module.css";

const MobilMenu = ({ close }) => {
  const user = JSON.parse(sessionStorage.getItem("logined")) || "";

  const [photo, setPhoto] = useState(avatar);

  const goods = user.goods;

  const checkLogined = () => {
    if (user !== "") {
      return goods.length < 1 ? (
        <></>
      ) : (
        <div className={style.count}>{goods.length}</div>
      );
    }
  };

  const checkData = () => {
    if (user !== "") {
      setPhoto(user.photo);
    }
  };

  return (
    <div className={style.shadow} onLoad={checkData}>
      <Toaster position="top-center" reverseOrder={false} />
      <div className={style.sidebar}>
        <div className={style.menu_block}>
          <button onClick={close} className={style.close_btn}>
            <img src={close_icon} alt="" />
          </button>
          {user === "" ? (
            <Link className={style.profile_link} to="/membership">
              <img src={photo} alt="Profile avatar" className={style.avatar} />
              <span>Profile</span>
            </Link>
          ) : (
            <Link className={style.profile_link} to="/profile">
              <img src={photo} alt="Profile avatar" className={style.avatar} />
              <span>Hello, {user.firstname}</span>
            </Link>
          )}
          <nav className={style.headerMenu}>
            <Link to="/shop" className={style.menuItem}>
              New & Featured
            </Link>
            <Link to="/shop" className={style.menuItem}>
              Men
            </Link>
            <Link to="/shop" className={style.menuItem}>
              Women
            </Link>
            <Link to="/shop" className={style.menuItem}>
              Kids
            </Link>
            <Link to="/shop" className={style.menuItem}>
              Sale
            </Link>
            <Link to="/shop" className={style.menuItem}>
              SNKRS
            </Link>
          </nav>
        </div>
        <div className={style.menu_block}>
          <Link className={style.menuItem}>
            <img src={jordan} alt="" />
            <span>Jordan</span>
          </Link>
        </div>
        <div className={style.menu_block}>
          <nav className={style.bannerMenu}>
            <Link to="/findstore" className={style.menuItemProfiles}>
              <img src={favourite} alt="" />
              <span>Favourites</span>
              {checkLogined()}
            </Link>
            <Link to="/cart" className={style.menuItemProfiles}>
              <img src={cart} alt="" />
              <span>Bag</span>
              {checkLogined()}
            </Link>
            <Link to="/findstore" className={style.menuItemProfiles}>
              <img src={orders} alt="" />
              <span>Orders</span>
            </Link>
            <Link to="/findstore" className={style.menuItemProfiles}>
              <img src={store} alt="" />
              <span>Find a Store </span>
            </Link>
            <Link to="/help" className={style.menuItemProfiles}>
              <img src={help} alt="" />
              <span>Help</span>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobilMenu;
