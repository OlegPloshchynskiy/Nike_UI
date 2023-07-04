import React from "react";
import { Link } from "react-router-dom";

import Layout from "../../layout/Layout";
import Button from "../../components/button/Button";

import top_banner from "../../../public/images/membership/top.jpg";
import bottom_banner from "../../../public/images/membership/bottom.jpg";
import play_btn from "../../../public/images/play_btn.png";

import products from "../../../public/images/membership/products.jpg";
import nike_by_you from "../../../public/images/membership/nike_by_you.jpg";
import rewards from "../../../public/images/membership/rewards.jpg";
import shoping from "../../../public/images/membership/shoping.jpg";
import expiriance from "../../../public/images/membership/expiriance.jpg";
import workouts from "../../../public/images/membership/workouts.jpg";
import shop from "../../../public/images/membership/shop.jpg";
import run from "../../../public/images/membership/run.jpg";
import train from "../../../public/images/membership/train.jpg";
import footer from "../../../public/images/membership/footer.jpg";

import style from "./membership.module.css";
import Cards from "./cards/Cards";
import Questions from "./questions/Questions";

const Membership = () => {
  const styles_btn = {
    display: "flex",
    gap: "10px",
  };

  const benefits_images = [
    {
      src: products,
      title: "Member Products",
      subtitle:
        "First and exclusive access to the newest styles in the Member Shop",
    },
    {
      src: nike_by_you,
      title: "Nike By You",
      subtitle:
        "Customise performance or lifestyle sneakers with unique colourways and materials",
    },
    {
      src: rewards,
      title: "Member Rewards",
      subtitle:
        "Special offers and promos to thank Members throughout the year",
    },
  ];

  const advantages_images = [shoping, expiriance, workouts];

  const apps_images = [
    {
      src: shop,
      title: "Nike App",
      subtitle:
        "Shop: Discover your personal guide to Nike",
    },
    {
      src: run,
      title: "Nike Run Club",
      subtitle:
        "Run: Get motivated with Audio-Guided Runs",
    },
    {
      src: train,
      title: "Nike Training Club",
      subtitle:
        "Train: Break a sweat with over 160 workouts",
    },
  ];

  return (
    <Layout>
      <div className={style.title}>
        <span>Nike Membership</span>
      </div>

      <div className={style.about}>
        <p className={style.title}>Where All Athletes Belong</p>
        <span className={style.subtile_text}>
          When you’re with us, you’re part of something bigger: a global
          community dedicated to bringing out the best in one another, with
          access to the most effective tools for the job, including
          Member-exclusive products, Nike By You customisation, and special
          offers. And it's all free.
        </span>
        <Link to="/join_us">
          <Button title="Join Us" />
        </Link>
      </div>

      <img src={top_banner} alt="" width="100%" />

      <div className={style.year_of_you}>
        <h1>A Year Of You</h1>
        <span>
          365 days. 663 million miles. 37.5 million workouts. Let's see how the
          Nike community made 2022 proud.
        </span>
        <Button title={"Watch"} icon={play_btn} styles={styles_btn}></Button>
      </div>

      <div className={style.benefits}>
        <div className={style.title}>Benefits</div>
        <div className={style.subtitle}>
          Nike Member Benefits bring out your best
        </div>
        <div className={style.cards_block}>
          {benefits_images.map((data, index) => {
            return (
              <Cards
                key={index}
                image={data.src}
                title={data.title}
                subtitle={data.subtitle}
                explore={true}
              />
            );
          })}
        </div>
      </div>

      <div className={style.cards_block}>
        {advantages_images.map((src, index) => {
          return <Cards key={index} image={src} />;
        })}
      </div>

      <div className={style.apps}>
        <div className={style.title}>Member-Only Appsv</div>
        <div className={style.subtitle}>
          Download our apps, your key to accessing benefits
        </div>
        <div className={style.cards_block}>
          {apps_images.map((data, index) => {
            return (
              <Cards
                key={index}
                image={data.src}
                title={data.title}
                subtitle={data.subtitle}
                explore={true}
              />
            );
          })}
        </div>
      </div>
      <img src={bottom_banner} alt="" width={"100%"} />
      <Questions />
      <div className={style.foot}>
          <img src={footer} alt="" width={"100%"} />
          <div className={style.btn_block}>
            <Button title={"Join Us"} />
            <Button title={"Sign In"} />
          </div>
      </div>
    </Layout>
  );
};

export default Membership;
