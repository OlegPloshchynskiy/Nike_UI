import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import avatar from "../../../public/images/person-circle.png";

import style from "./banner.module.css";

const RootBanner = () => {
  const loginedData = JSON.parse(sessionStorage.getItem("logined")) || "";

  const [photo, setPhoto] = useState(avatar);

  const [savedAccount, setSavedAccount] = useState([]);

  const checkData = () => {
    if (loginedData !== "") {
      setPhoto(loginedData.photo);
    }
  };

  const checkLogined = () => {
    if (loginedData === "") {
      return (
        <>
          <Link to="/membership" className={style.menuItem}>
            Join Us
          </Link>
          <div className={style.v_line}></div>
          <Link to="/log_in" className={style.menuItem}>
            Sign In
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link to="/profile" className={style.menuItem}>
            <img src={photo} alt="Profile photo" className={style.avatar} />
            <span>Hello, {loginedData.firstname}</span>
          </Link>
        </>
      );
    }
  };

  return (
    <nav className={style.bannerMenu} onLoad={checkData}>
      <Link to="/findstore" className={style.menuItem}>
        Find a Store
      </Link>
      <div className={style.v_line}></div>
      <Link to="/help" className={style.menuItem}>
        Help
      </Link>
      <div className={style.v_line}></div>
      {checkLogined()}
    </nav>
  );
};

export default RootBanner;
