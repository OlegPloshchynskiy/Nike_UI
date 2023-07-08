import { useEffect, useState } from "react";

import style from "./photo.module.css";

const GoodsPhoto = ({ image }) => {
  const [imageCount, setImageCount] = useState(6);

  const [isLargeScreen, setIsLargeScreen] = useState(
    window.matchMedia("(min-width: 1270px)").matches
  );

  useEffect(() => {
    const handleImageCount = () => {
      if (!isLargeScreen) setImageCount(1);
    };

    const mediaQuery = window.matchMedia("(min-width: 1270px)");

    const handleResize = (event) => {
      setIsLargeScreen(event.matches);
    };

    mediaQuery.addListener(handleResize);

    handleImageCount();
    return () => {
      mediaQuery.removeListener(handleResize);
    };
  }, [imageCount]);

  const photo = Array.from({ length: imageCount }, (value, index) => (
    <div key={index} className={style.loading}>
      <img src={image} alt="" width="100%" />
    </div>
  ));

  return <div className={style.goods_images}>{photo}</div>;
};

export default GoodsPhoto;
