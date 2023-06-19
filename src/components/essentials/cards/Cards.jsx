import React from "react";
import Button from "../../button/Button";

const Cards = ({ src, title }) => {
  const styles = {
    background: "white",
    color: "black",
    position: "absolute",
    bottom: "48px",
    left: "48px",
  };

  return (
    <div style={{position: "relative"}}>
      <img src={src} alt="" />
      <Button title={title} styles={styles} />
    </div>
  );
};

export default Cards;
