import style from "./button.module.css";

const Button = ({ title, func, sFunc, styles, value, icon }) => (
  <button
    value={value}
    className={style.button}
    style={{ ...styles }}
    onClick={func}
    onSubmit={sFunc}
  >
    {title}
    <img src={icon} alt="" />
  </button>
);

export default Button;
 