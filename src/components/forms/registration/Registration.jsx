import React, { useEffect, useState } from "react";
import Layout from "../../../layout/Layout";

import nike_logo from "../../../../public/images/Nike-logo.png";

import style from "./registration.module.css";
import Button from "../../button/Button";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

const Registration = () => {
  const [list, setList] = useState([]);
  const [valid, setValid] = useState(false);
  const [created, setCreated] = useState(false);

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

    if (!valid) {
      return toast.error("You should fill all fields!");
    }
    
    for (let email of savedEmail) {
      if (formEmail.toLowerCase() === email.toLowerCase()) {
        toast.error("This email is already being used by another account");
        return;
      }
    }

    setUsersCount(usersCount + 1);
    localStorage.setItem(`User${usersCount}`, JSON.stringify(formData));
    localStorage.setItem(`id`, JSON.stringify(usersCount));
    toast.success("Welcome!");
    window.location.href = "/log_in"
  };

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

  const { email, password, firstname, lastname, birth, country, gender } =
    formData;

  const validForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;

    if (!emailRegex.test(email)) {
      console.log("Invalid email");
      return setValid(false);
    }

    if (!passwordRegex.test(password)) {
      console.log("Invalid password");
      return setValid(false);
    }

    if (firstname.length < 3) {
      return setValid(false);
    }

    if (lastname.length < 3) {
      return setValid(false);
    }

    if (!birth) {
      return setValid(false);
    }

    if (country === "") {
      return setValid(false);
    }

    if (gender === "") {
      return setValid(false);
    }

    setValid(true);
  };

  console.log(created);

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
          onBlur={validForm}
          style={valid ? { borderColor: "green" } : { borderColor: "red" }}
        />
        <input
          type="password"
          name="password"
          id="password"
          className={style.form_item}
          placeholder="Password"
          onChange={handleChange}
          onBlur={validForm}
          style={valid ? { borderColor: "green" } : { borderColor: "red" }}
        />
        <input
          type="text"
          name="firstname"
          id="first-name"
          className={style.form_item}
          placeholder="First Name"
          onChange={handleChange}
          onBlur={validForm}
          style={valid ? { borderColor: "green" } : { borderColor: "red" }}
        />
        <input
          type="text"
          name="lastname"
          id="last-name"
          className={style.form_item}
          placeholder="Last Name"
          onChange={handleChange}
          onBlur={validForm}
          style={valid ? { borderColor: "green" } : { borderColor: "red" }}
        />
        <input
          type="date"
          name="birth"
          id="birth"
          className={style.form_item}
          placeholder="Date of Birth"
          onChange={handleChange}
          onBlur={validForm}
        />
        <label htmlFor="date">
          Get a Nike Member Reward every year on your Birthday.
        </label>
        <select
          name="country"
          id=""
          className={style.form_item}
          onChange={handleChange}
          onBlur={validForm}
        >
          <option selected disabled>
            Select country
          </option>
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
            onBlur={validForm}
          >
            Male
          </button>
          <button
            className={style.gender}
            name="gender"
            value="female"
            type="button"
            onFocus={handleChange}
            onBlur={validForm}
          >
            Female
          </button>
        </div>
        <span>
          By creating an account, you agree to Nike's Privacy Policy and Terms
          of Use.
        </span>

        {/* <Link to={handleSubmit}> */}
          <Button
            title="JOIN US"
            styles={styles}
            func={handleSubmit}
            disabled={valid}
          />
        {/* </Link> */}

        <span>
          Alredy a member? <Link to="/log_in">Sign in</Link>
        </span>
      </form>
    </Layout>
  );
};

export default Registration;
