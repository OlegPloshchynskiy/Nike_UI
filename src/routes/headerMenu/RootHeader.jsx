import { Link } from "react-router-dom";

import style from "./header.module.css";

const RootHeader = () => {
  return (
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
      <Link to="findstore" className={style.menuItem}>
        SNKRS
      </Link>
    </nav>
  );
};

export default RootHeader;
