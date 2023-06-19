import React, { useEffect, useState } from "react";

import style from "./bestofair.module.css";

import arrow from "../../../public/images/best-of-airmax/arrow.png";

import se_blue from "../../../public/images/best-of-airmax/97SE.jpg";
import se_yellow from "../../../public/images/best-of-airmax/97SEyellow.jpg";
import go from "../../../public/images/best-of-airmax/270go.jpg";
import futura from "../../../public/images/best-of-airmax/max90futura.jpg";
import se_orange from "../../../public/images/best-of-airmax/max90se.jpg";
import excae from "../../../public/images/best-of-airmax/maxEXCAE.jpg";
import sc from "../../../public/images/best-of-airmax/maxSC.jpg";
import sys_red from "../../../public/images/best-of-airmax/maxSYSTM.jpg";
import sys_black from "../../../public/images/best-of-airmax/maxSYSTMblack.jpg";
import sys_blue from "../../../public/images/best-of-airmax/maxSYSTMblue.jpg";
import pulse from "../../../public/images/best-of-airmax/pulse.jpg";
import tw_se from "../../../public/images/best-of-airmax/TW-SE.jpg";

const BestOfAir = () => {
  const [slideCount, setSlideCount] = useState(0);

  const slides = [
    {
      id: 1,
      src: se_blue,
    },
    {
      id: 2,
      src: se_yellow,
    },
    {
      id: 3,
      src: go,
    },
    {
      id: 4,
      src: futura,
    },
    {
      id: 5,
      src: se_orange,
    },
    {
      id: 6,
      src: excae,
    },
    {
      id: 7,
      src: sc,
    },
    {
      id: 8,
      src: sys_red,
    },
    {
      id: 9,
      src: sys_black,
    },
    {
      id: 10,
      src: sys_blue,
    },
    {
      id: 11,
      src: pulse,
    },
    {
      id: 12,
      src: tw_se,
    },
  ];

  const nextSlide = () => setSlideCount(slideCount + 461)
  const prevtSlide = () => setSlideCount(slideCount - 461)

  const checkSlider = () => {
    if (slideCount > 5150) {
        setSlideCount(0)
    } else if(slideCount < 0) {
        setSlideCount(5150)
    }
  }

  console.log(slideCount);

  checkSlider();

  return (
    <div className={style.slider}>
      <div className={style.slider_controls}>
        <p className={style.title}>Best of Air Max</p>
        <div className={style.btn_block}>
          <p>Shop</p>
          <button className={style.controls} onClick={prevtSlide}>
            <img src={arrow} alt="Arrow left" />
          </button>
          <button className={style.controls} onClick={nextSlide}>
            <img src={arrow} alt="Arrow right" />
          </button>
        </div>
      </div>
      <div className={style.slider_content}>
        <div className={style.slides_container} style={{marginLeft: -slideCount}}>
          {slides.map(({ src, id }) => {
            return (
              <div key={id}>
                <img src={src} alt="" className={style.slides_image} />
                <div className={style.description}>
                    <div className={style.top}>
                        <div className={style.name}>Nike Air Max 97 SE</div>
                        <div className={style.price}>₹ 16 995</div>
                    </div>
                    <div className={style.gender}>Men's Shoes</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BestOfAir;
