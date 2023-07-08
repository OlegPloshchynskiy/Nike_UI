import { useEffect, useState } from "react";

import avatar from "../../../../public/images/person-circle-big.png";

import PhotoUpload from "../profile_photo/PhotoUpload";
import Button from "../../../components/button/Button";

import style from "./user.module.css";

const User = ({ data }) => {
  const [photo, setPhoto] = useState(avatar);

  const styles = {
    width: "50%",
    background: "rgba(255, 0, 0, 0.63)",
    fontSize: "20px",
  };

  const signOut = () => {
    sessionStorage.setItem("logined", JSON.stringify(""));
    window.location.href = "/log_in";
  };

  const checkData = () => {
    setPhoto(data.photo);
  };

  return (
    <div className={style.profile_container}>
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
      </div>
      <Button title="Sign Out" styles={styles} func={signOut} />
    </div>
  );
};

export default User;
