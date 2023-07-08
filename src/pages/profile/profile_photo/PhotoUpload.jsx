import { useEffect, useState } from "react";

import style from "./upload.module.css";

const PhotoUpload = () => {

  const currentUser = JSON.parse(sessionStorage.getItem("logined"))

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

    const keys = Object.keys(localStorage);

    keys.forEach((user) => {
      if (user.startsWith("User")) {
        const storedData = JSON.parse(localStorage.getItem(user));
        
        if (storedData.email === currentUser.email) {
          reader.onloadend = () => {
            const existingObject = JSON.parse(localStorage.getItem("logined"));
            existingObject.photo = reader.result;
            localStorage.setItem("logined", JSON.stringify(existingObject));
            localStorage.setItem(user, JSON.stringify(existingObject));
            sessionStorage.setItem("logined", JSON.stringify(existingObject));
          };
          if (file) {
            reader.readAsDataURL(file);
          }
        }

      }
    })



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
