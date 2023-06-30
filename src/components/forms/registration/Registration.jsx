import React, { useEffect, useState } from "react";
import Layout from "../../../layout/Layout";

import nike_logo from "../../../../public/images/Nike-logo.png";

import style from "./registration.module.css";
import Button from "../../button/Button";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

const Registration = () => {
  const [list, setList] = useState([]);
  const countriesArray = [];
  const URL = "https://countries-cities.p.rapidapi.com/location/country/list";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5884794babmsh5cc357571f33b3bp121611jsn3e839091c9fe",
      "X-RapidAPI-Host": "countries-cities.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const getCountry = async () => {
      try {
        const response = await fetch(URL, options);
        const data = await response.json();

        const countries = data.countries;

        for (let key in countries) {
          const value = countries[key];
          countriesArray.push(value);
          setList(countriesArray.sort());
        }
      } catch (error) {
        console.log("Error fetching:" + error);
      }
    };

    getCountry();
  }, []);

  const lastId = JSON.parse(localStorage.getItem("id"));
  const [usersCount, setUsersCount] = useState(lastId + 1);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    birth: "",
    country: "",
    gender: "",
  });

  const [formEmail, setFormEmail] = useState("");
  const [savedEmail, setSavedEmail] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "email") {
      setFormEmail(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (let email of savedEmail) {
      if (formEmail.toLowerCase() === email.toLowerCase()) {
        toast.error("This email is already being used by another account");
        return;
      }
    }

    if(e.target.name === "email") {
      console.log(e.target.value);
    }

    setUsersCount(usersCount + 1);
    localStorage.setItem(`User${usersCount}`, JSON.stringify(formData));
    localStorage.setItem(`id`, JSON.stringify(usersCount));
    toast.success("Welcome!");
  };
  // console.log(savedEmail);
  useEffect(() => {
    const checkLocalStorage = () => { 
      const keys = Object.keys(localStorage);
      const emailArray = [];

      keys.forEach((key) => {
        if (key.startsWith("User")) {
          const storedData = localStorage.getItem(key);
          if (storedData !== null) {
            const response = JSON.parse(storedData);
            emailArray.push(response.email);
            setSavedEmail(emailArray);
          } else {
            console.log(`Значення для ключа ${key} не знайдено.`);
          }
        }
      });
    };

    checkLocalStorage();
  }, []);

  const styles = {
    width: "100%",
    borderRadius: "5px",
  };

  return (
    <Layout>
      <Toaster />
      <div className={style.head}>
        <img src={nike_logo} alt="" />
        <p className={style.title}>BECOME A NIKE MEMBER</p>
        <p className={style.subtitle}>
          Create your Nike Member profile and get first access to the very best
          of Nike products, inspiration and community.
        </p>
      </div>
      <form action="" className={style.form} onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          className={style.form_item}
          placeholder="Email address"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          className={style.form_item}
          placeholder="Password"
          onChange={handleChange}
        />
        <input
          type="text"
          name="firstname"
          id="first-name"
          className={style.form_item}
          placeholder="First Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastname"
          id="last-name"
          className={style.form_item}
          placeholder="Last Name"
          onChange={handleChange}
        />
        <input
          type="date"
          name="birth"
          id="birth"
          className={style.form_item}
          placeholder="Date of Birth"
          onChange={handleChange}
        />
        <label htmlFor="date">
          Get a Nike Member Reward every year on your Birthday.
        </label>
        <select
          name="country"
          id=""
          className={style.form_item}
          onChange={handleChange}
          defaultValue="Select Country"
        >
          {list.map((name, index) => {
            return (
              <option value={name} key={index} className={style.select_options}>
                {name}
              </option>
            );
          })}
        </select>
        <div className={style.btn_block}>
          <button
            className={style.gender}
            name="gender"
            value="male"
            type="button"
            onFocus={handleChange}
          >
            Male
          </button>
          <button
            className={style.gender}
            name="gender"
            value="female"
            type="button"
            onFocus={handleChange}
          >
            Female
          </button>
        </div>
        <span>
          By creating an account, you agree to Nike's Privacy Policy and Terms
          of Use.
        </span>
        <Button title="JOIN US" styles={styles} />
        <span>
          Alredy a member? <Link>Sign in</Link>
        </span>
      </form>
    </Layout>
  );
};

export default Registration;
