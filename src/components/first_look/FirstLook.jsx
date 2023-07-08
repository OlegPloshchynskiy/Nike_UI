import Button from "../button/Button";

import style from "./firstlook.module.css";

const FirstLook = () => {
  return (
    <div className={style.first_look}>
      <p className={style.small_title}>First Look</p>
      <p className={style.title}>Nike Air Max Pulse</p>
      <p className={style.subtitle}>
        Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
        Pulse <br /> —designed to push you past your limits and help you go to the max.
      </p>
      <div className={style.btn_block}>
        <Button title="Notify Me" />
        <Button title="Shop Air Max" />
      </div>
    </div>
  );
};

export default FirstLook;
