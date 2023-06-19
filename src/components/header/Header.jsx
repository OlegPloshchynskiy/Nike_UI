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

const Header = () => {
  return (
    <>
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
          <Link>
            <img src={favourited} alt="favourite icon" />
          </Link>
          <Link>
            <img src={cart} alt="cart icon" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
