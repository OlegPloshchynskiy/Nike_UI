import Layout from "../../layout/Layout";
import User from "./user_info/User";

import nike_logo from "../../../public/images/Nike-logo.png";

import style from "./profile.module.css"
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const userData = JSON.parse(sessionStorage.getItem("logined")) || "";

  const navigate = useNavigate()


  if (userData === "") {
    navigate("/log_in")
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
