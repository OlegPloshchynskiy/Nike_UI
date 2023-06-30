import MapContainer from "../map/MapContainer";
import { Link } from "react-router-dom";

import jordan from "../../../public/images/jordan-logo.png";
import nike from "../../../public/images/nike-logo.png";
import cart from "../../../public/images/cart-icon.png";
import search from "../../../public/images/search-icon.png";
import favourited from "../../../public/images/favourited-icon.png";

import RootBanner from "../../routes/banner/RootBanner";
import RootHeader from "../../routes/headerMenu/RootHeader";

import style from "./header.module.css";
import { Toaster } from "react-hot-toast";

const Header = () => {
  const bag = JSON.parse(localStorage.getItem("bagCount")) || 0;
  const fav = JSON.parse(localStorage.getItem("favCount")) || 0;

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className={style.banner}>
        <img src={jordan} alt="Jordan logo" />
        <p className={style.title}>Skip to main content</p>
        <RootBanner />
      </div>

      <div className={style.headerMenu}>
        <Link to="/">
          <img src={nike} alt="Nike logo" />
        </Link>
        <RootHeader />
        <div className={style.rootBlock}>
          <div className={style.searchContainer}>
            <Link>
              <img src={search} alt="search icon" />
            </Link>
            <input
              type="search"
              className={style.search}
              placeholder="Search"
              required="required"
            />
          </div>
          <Link className={style.bag}>
            <img src={favourited} alt="favourite icon" />
            <div className={style.count}>{fav}</div>
          </Link>
          <Link className={style.bag}>
            <img src={cart} alt="cart icon" />
            <div className={style.count}>{bag}</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
