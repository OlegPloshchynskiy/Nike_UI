import { useEffect, useState } from "react";
import slide_1 from "../../../public/images/banner.jpg";
import slide_2 from "../../../public/images/dont-miss.jpg";
import slide_3 from "../../../public/images/Featured.jpg";

import style from "./preview.module.css";

const Preview = () => {
  const arraySlides = [slide_1, slide_2, slide_3];

  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const newID = setInterval(() => {
      setSlide((prevSlide) => prevSlide + 1);
    }, 6000);

    return () => {
      clearInterval(newID);
    };
  }, []);

  const checkID = () => {
    if (slide == 3) {
      setSlide(0);
    }
  };

  checkID();

  return (
    <div className={style.container}>
      <span className={style.title_container}>
        <p className={style.title}>Hello Nike App</p>
        <p className={style.subtitle}>
          Download the app to access everything Nike. <u>Get Your Great</u>
        </p>
      </span>
      <img src={arraySlides[slide]} alt="Shoes banner" className={style.slides} />
    </div>
  );
};

export default Preview;
