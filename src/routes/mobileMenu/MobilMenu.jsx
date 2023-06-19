import React from "react";
import style from "./mobmenu.module.css";
import close_icon from "../../../public/images/x-lg.png";

const MobilMenu = ( {close} ) => {
  return (
    <div className={style.shadow}>
      <div className={style.sidebar}>
        <button onClick={close}>
          <img src={close_icon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default MobilMenu;
