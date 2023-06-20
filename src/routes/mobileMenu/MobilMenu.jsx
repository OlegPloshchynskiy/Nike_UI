import React from "react";
import style from "./mobmenu.module.css";
import close_icon from "../../../public/images/x-lg.png";
import { Link } from "react-router-dom";

import avatar from "../../../public/images/person-circle.png";
import jordan from "../../../public/images/Jordan-logo.png";
import favourite from "../../../public/images/favourited-icon.png";
import cart from "../../../public/images/cart-icon.png";
import orders from "../../../public/images/orders-icon.png";
import store from "../../../public/images/store-icon.png";
import help from "../../../public/images/help-icon.png";

const MobilMenu = ({ close }) => {
  return (
    <div className={style.shadow}>
      <div className={style.sidebar}>
        <div className={style.menu_block}>
          <button onClick={close} className={style.close_btn}>
            <img src={close_icon} alt="" />
          </button>
          <Link className={style.profile_link}>
            <img src={avatar} alt="" />
            <span>Hello, User</span>
          </Link>
          <nav className={style.headerMenu}>
            <Link to="/findstore" className={style.menuItem}>
              New & Featured
            </Link>
            <Link to="/findstore" className={style.menuItem}>
              Men
            </Link>
            <Link to="/findstore" className={style.menuItem}>
              Women
            </Link>
            <Link to="/findstore" className={style.menuItem}>
              Kids
            </Link>
            <Link to="/findstore" className={style.menuItem}>
              Sale
            </Link>
            <Link to="/findstore" className={style.menuItem}>
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
            </Link>
            <Link to="/findstore" className={style.menuItemProfiles}>
              <img src={cart} alt="" />
              <span>Bag</span>
            </Link>
            <Link to="/findstore" className={style.menuItemProfiles}>
              <img src={orders} alt="" />
              <span>Orders</span>
            </Link>
            <Link to="/help" className={style.menuItemProfiles}>
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
