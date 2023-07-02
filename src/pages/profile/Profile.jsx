import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import User from "./user_info/User";

import nike_logo from "../../../public/images/Nike-logo.png";

import style from "./profile.module.css"

const Profile = () => {
  const userData = JSON.parse(localStorage.getItem("logined")) || "";



  if (userData === "") {
    window.location.href = "/log_in";
  }

  return (
    <Layout>
      <div className={style.title}>
        <h1>Your NIKE account</h1>
        <img src={nike_logo} alt="" />
      </div>
      <User data={userData} />
    </Layout>
  );
};

export default Profile;
