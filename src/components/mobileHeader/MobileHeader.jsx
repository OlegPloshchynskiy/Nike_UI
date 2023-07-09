import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import MobileMenu from "../../routes/mobileMenu/MobilMenu";

import nike_logo from "../../../public/images/Nike-logo.png";
import cart_icon from "../../../public/images/cart-icon.png";
import list from "../../../public/images/list.png";
import search_icon from "../../../public/images/search-icon.png";

import style from "./mobileheader.module.css";

const MobileHeader = () => {

  const bag = JSON.parse(localStorage.getItem("logined")) || 0;

  const [menuState, setMenuState] = useState(0);

  const handleMenu = () => {
    menuState === 0 ? setMenuState(1) : setMenuState(0)
  }

  return (
    <header>
      <Toaster position="top-center" reverseOrder={false} />

      <nav className={style.navs}>
        <Link to="/">
          <img src={nike_logo} alt="Nike logo" />
        </Link>
        <div className={style.menu_block}>
          <Link to="/" className={style.bag}>
            <img src={cart_icon} alt="Cart" />
            <div className={style.count}>{bag.goods.length}</div>
          </Link>
          <button className={style.menu_btn} onClick={handleMenu}>
            <img src={list} alt="List button" />
          </button>
        </div>
      </nav>
      <div className={style.search_container}>
        <img src={search_icon} alt="Search icon" />
        <input
          type="search"
          name=""
          id={style.search_input}
          placeholder="Search Nike and Jordan products"
        />
      </div>
      {menuState === 1 ? <MobileMenu close={handleMenu} /> : <></>}
    </header>
  );
};

export default MobileHeader;
