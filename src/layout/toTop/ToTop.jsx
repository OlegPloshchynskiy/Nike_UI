import arrow_up from "../../../public/images/to_top.png";

import style from "./totop.module.css";

const ToTop = () => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    }); 
  }

  

  return (
    <div className={style.btn_totop} onClick={scrollTop}>
      <button className={style.btn}>
        {/* <img src={arrow_up} alt="To top" className={style.totopImg} /> */}
      </button>
    </div>
  );
};

export default ToTop;
