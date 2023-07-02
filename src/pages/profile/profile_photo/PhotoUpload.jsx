import React, { useEffect, useState } from "react";

import style from "./upload.module.css";

const PhotoUpload = () => {

  const [id, setId] = useState(0)

  useEffect(() => {
    function generateID() {
      setId(Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000);
    }
  
    generateID()
  }, [])

  const handlePhotoUpload = (event) => {
    

    const file = event.target.files[0];
    const reader = new FileReader();

    // reader.onloadend = () => {
    //   setSelectedPhoto(reader.result); // Зберігаємо фото як рядок
    //   localStorage.setItem('photo', reader.result); // Зберігаємо фото в localStorage
    // };

    reader.onloadend = () => {
      const existingObject = JSON.parse(localStorage.getItem("logined"));
      existingObject.photo = reader.result;
      localStorage.setItem("logined", JSON.stringify(existingObject));
      localStorage.setItem(`loginedUser${id}`, JSON.stringify(existingObject));
      sessionStorage.setItem("logined", JSON.stringify(existingObject));
    };

    if (file) {
      reader.readAsDataURL(file);
    }

    window.location.reload();
  };

  return (
    <div className={style.container}>
      <div className={style.layer}>Choose Photo</div>
      <input
        type="file"
        className={style.upload}
        onChange={handlePhotoUpload}
      />
    </div>
  );
};

export default PhotoUpload;
