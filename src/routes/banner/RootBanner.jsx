import React from "react";
import { Link } from "react-router-dom";

import style from './banner.module.css'

const RootBanner = () => {
  return (
    <nav className={style.bannerMenu}>
      <Link to="/findstore" className={style.menuItem}>Find a Store</Link>
      <div className={style.v_line}></div>
      <Link to="/help" className={style.menuItem}>Help</Link>
      <div className={style.v_line}></div>
      <Link to="/join_us" className={style.menuItem}>Join Us</Link>
      <div className={style.v_line}></div>
      <Link to="/findstore" className={style.menuItem}>Sign In</Link>
    </nav>
  )
};

export default RootBanner;
