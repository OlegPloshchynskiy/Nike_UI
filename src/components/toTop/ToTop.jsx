import React from "react";

import arrow_up from "../../../public/images/arrow-up-short.png";

import style from "./totop.module.css";

const ToTop = () => {
  return (
    <button className={style.btn_totop}>
      <img src={arrow_up} alt="" />
    </button>
  );
};

export default ToTop;
