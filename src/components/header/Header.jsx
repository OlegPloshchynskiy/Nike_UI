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

  const user = JSON.parse(sessionStorage.getItem("logined")) || "";

  const goods = user.goods;

  const checkLogined = () => {
    if (user !== "") {
      return goods.length < 1 ? <></> : <div className={style.count}>{goods.length}</div>
    }
  }

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
            
          </Link>
          <Link className={style.bag} to={user === "" ? "/log_in" : "/cart"}>
            <img src={cart} alt="cart icon" />
            {checkLogined()}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
