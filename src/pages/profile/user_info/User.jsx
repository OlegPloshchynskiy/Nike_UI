import React, { useEffect, useState } from "react";

import avatar from "../../../../public/images/person-circle-big.png";

import style from "./user.module.css";
import PhotoUpload from "../profile_photo/PhotoUpload";
import Button from "../../../components/button/Button";

const User = ({ data }) => {
  const loginedData = JSON.parse(localStorage.getItem("logined")) || "";

  const [photo, setPhoto] = useState(avatar);

  const styles = {
    width: "50%",
    background: "red",
    fontSize: "20px",
  };

  const signOut = () => {
    sessionStorage.setItem("logined", JSON.stringify(""));
    window.location.href = "/log_in";
  };

  const [savedAccount, setSavedAccount] = useState([]);

  useEffect(() => {
    const checkAccount = () => {
      const keys = Object.keys(localStorage);

      keys.map((data) => {
        if (data.startsWith("loginedUser")) {
          const storedData = localStorage.getItem(data);
          if (storedData !== null) {
            const response = JSON.parse(storedData);
            setSavedAccount((setData) => [...setData, response]);
          }
        }
      });
    };

    checkAccount();
  }, []);

  const checkData = () => {
    savedAccount.map((elem) => {
      if (elem.email === loginedData.email) {
        setPhoto(elem.photo);
      }
    });
  };

  return (
    <div>
      <div className={style.head}>
        <div className={style.photo_container} onLoad={checkData}>
          <div className={style.avatar_block}>
            {photo && <img src={photo} alt="Фото" className={style.avatar} />}
          </div>
          <PhotoUpload />
        </div>
        <div className={style.name}>
          <h1>{data.firstname}</h1>
          <h1>{data.lastname}</h1>
        </div>
      </div>
      <div className={style.info}>
        <div className={style.rows}>
          <h2>Country</h2>
          <span>{data.country}</span>
        </div>
        <div className={style.rows}>
          <h2>Birthday</h2>
          <span>{data.birth}</span>
        </div>
        <div className={style.rows}>
          <h2>Gender</h2>
          <span>{data.gender}</span>
        </div>
        <Button title="Sign Out" styles={styles} func={signOut} />
      </div>
    </div>
  );
};

export default User;
