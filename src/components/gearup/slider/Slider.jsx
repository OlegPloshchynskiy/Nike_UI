import React, { useState } from "react";
import style from "./slider.module.css";
import arrow from "../../../../public/images/best-of-airmax/arrow.png";

const Slider = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide(currentSlide - 312);
  const prevSlide = () => setCurrentSlide(currentSlide + 312);

  const checkSlider = () => {
    if (currentSlide > 1248) {
        setCurrentSlide(0)
    } else if(currentSlide < 0) {
        setCurrentSlide(1248)
    }
  }

  checkSlider();

  return (
    <div className={style.slider}>
      <div className={style.slider_controls}>
        <p className={style.title}>{props.title}</p>
        <button className={style.controls} onClick={nextSlide}>
          <img src={arrow} alt="Arrow left" />
        </button>
        <button className={style.controls} onClick={prevSlide}>
          <img src={arrow} alt="Arrow right" />
        </button>
      </div>
      <div
        className={style.slide_container}
        style={{ marginLeft: -currentSlide }}
      >
        {props.data.map((elem, index) => {
          return (
            <div key={index} className={style.slides}>
              <img src={elem.src} alt="" style={{ width: "300px" }} />
              <div className={style.top}>
                <p className={style.name}>{elem.name}</p>
                <p className={style.price}>{elem.price}</p>
              </div>
              <p className={style.deescription}>{elem.deescription}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
