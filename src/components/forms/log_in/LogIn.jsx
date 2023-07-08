import { useEffect, useState } from "react";
import Layout from "../../../layout/Layout";
import { Toaster, toast } from "react-hot-toast";

import nike_logo from "../../../../public/images/Nike-logo.png";

import style from "./login.module.css";
import Button from "../../button/Button";
import { Link } from "react-router-dom";

const LogIn = () => {
  const styles = {
    width: "100%",
    borderRadius: "5px",
  };

  const [savedAccount, setSavedAccount] = useState([]);

  const [formData, setFormData] = useState([
    {
      email: "",
      password: "",
    },
  ]);

  useEffect(() => {
    const checkAccount = () => {
      const keys = Object.keys(localStorage);

      keys.map((data) => {
        if (data.startsWith("User")) {
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

  const checkData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validAccount = (e) => {
    e.preventDefault();

    for (let userData of savedAccount) {
      if (
        userData.email === formData.email &&
        userData.password === formData.password
        ) {
          localStorage.setItem("logined", JSON.stringify(userData))
          sessionStorage.setItem("logined", JSON.stringify(userData))
          window.location.href = "/profile"
        return;
      }
    }
    toast.error("Invalid email or password");
  };

  return (
    <Layout>
      <Toaster />
      <div className={style.head}>
        <img src={nike_logo} alt="" />
        <p className={style.title}>
          YOUR ACCOUNT <br /> FOR EVERYTHING <br /> NIKE
        </p>
      </div>
      <form action="" className={style.form} onSubmit={validAccount}>
        <input
          type="email"
          name="email"
          id="email"
          className={style.form_item}
          placeholder="Email address"
          onInput={checkData}
        />
        <input
          type="password"
          name="password"
          id="password"
          className={style.form_item}
          placeholder="Password"
          onInput={checkData}
        />
        <p>
          By logging in, you agree to Nike's Privacy Policy and Terms of Use.
        </p>
        <Button title="SIGN IN" styles={styles} />
        <p>
          Not a Memvber? <Link to="/join_us">Join Us</Link>
        </p>
      </form>
    </Layout>
  );
};

export default LogIn;
