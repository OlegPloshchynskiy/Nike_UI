import Slider from "./slider/Slider";

import man_1 from "../../../public/images/gear-up-slider/man/shorts-black-short.jpg";
import man_2 from "../../../public/images/gear-up-slider/man/t-short-blue.jpg";
import man_3 from "../../../public/images/gear-up-slider/man/shorts-white.jpg";
import man_4 from "../../../public/images/gear-up-slider/man/t-short-orange.jpg";
import man_5 from "../../../public/images/gear-up-slider/man/shorts-black.jpg";
import man_6 from "../../../public/images/gear-up-slider/man/t-short-white.jpg";

import woman_1 from "../../../public/images/gear-up-slider/woman/leggings.jpg";
import woman_2 from "../../../public/images/gear-up-slider/woman/t-short-black.jpg";
import woman_3 from "../../../public/images/gear-up-slider/woman/shorts-black.jpg";
import woman_4 from "../../../public/images/gear-up-slider/woman/t-short-blue.jpg";
import woman_5 from "../../../public/images/gear-up-slider/woman/shorts-green.jpg";
import woman_6 from "../../../public/images/gear-up-slider/woman/top-blue.jpg";

import style from "./gearup.module.css";

const slidesMan = [
  {
    src: man_1,
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    price: "₹ 3 895",
    deescription: "Men's Short-Sleeve Running Top",
  },
  {
    src: man_2,
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    price: "₹ 3 895",
    deescription: "Men's Short-Sleeve Running Top",
  },
  {
    src: man_3,
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    price: "₹ 3 895",
    deescription: "Men's Short-Sleeve Running Top",
  },
  {
    src: man_4,
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    price: "₹ 3 895",
    deescription: "Men's Short-Sleeve Running Top",
  },
  {
    src: man_5,
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    price: "₹ 3 895",
    deescription: "Men's Short-Sleeve Running Top",
  },
  {
    src: man_6,
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    price: "₹ 3 895",
    deescription: "Men's Short-Sleeve Running Top",
  },
];

const slidesWoman = [
    {
      src: woman_1,
      name: "Nike Dri-FIT ADV TechKnit Ultra",
      price: "₹ 3 895",
      deescription: "Men's Short-Sleeve Running Top",
    },
    {
      src: woman_2,
      name: "Nike Dri-FIT ADV TechKnit Ultra",
      price: "₹ 3 895",
      deescription: "Men's Short-Sleeve Running Top",
    },
    {
      src: woman_3,
      name: "Nike Dri-FIT ADV TechKnit Ultra",
      price: "₹ 3 895",
      deescription: "Men's Short-Sleeve Running Top",
    },
    {
      src: woman_4,
      name: "Nike Dri-FIT ADV TechKnit Ultra",
      price: "₹ 3 895",
      deescription: "Men's Short-Sleeve Running Top",
    },
    {
      src: woman_5,
      name: "Nike Dri-FIT ADV TechKnit Ultra",
      price: "₹ 3 895",
      deescription: "Men's Short-Sleeve Running Top",
    },
    {
      src: woman_6,
      name: "Nike Dri-FIT ADV TechKnit Ultra",
      price: "₹ 3 895",
      deescription: "Men's Short-Sleeve Running Top",
    },
  ];

const GearUp = () => {
  return (
    <div className={style.container}>
      <p className={style.title}>Gear Up</p>
      <div className={style.sliders_block}>
        <Slider data={slidesMan} title="Shop Men's"/>
        <Slider data={slidesWoman} title="Shop Men's"/>
      </div>
    </div>
  );
};

export default GearUp;
