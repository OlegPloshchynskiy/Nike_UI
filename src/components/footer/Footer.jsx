import React, { useEffect, useState } from "react";
import style from "./footer.module.css";

import location from "../../../public/images/location.png";

import twitter from '../../../public/images/footer-links/twitter.png'
import facebook from '../../../public/images/footer-links/facebook.png'
import youtube from '../../../public/images/footer-links/youtube.png'
import instagram from '../../../public/images/footer-links/instagram.png'

const Footer = () => {

  const [cureLocation, setCureLocation] = useState("Loading...");


  const URL = "https://ip-geo-location.p.rapidapi.com/ip/check?format=json";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5884794babmsh5cc357571f33b3bp121611jsn3e839091c9fe",
      "X-RapidAPI-Host": "ip-geo-location.p.rapidapi.com",
    },
  }; 
  

  useEffect(() => {

    const getLocation = async () => {
      try {
        const response = await fetch(URL, options);
        const data = await response.json();
        const countryName = data.country.name;
        const lat = data.location.latitude;
        const lon = data.location.longitude;

        localStorage.setItem("lat", JSON.stringify(lat));
        localStorage.setItem("lon", JSON.stringify(lon));
        setCureLocation(countryName);
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    };

    getLocation();
  }, []);

  return (
    <footer className={style.footer}>


      <div className={style.footer_navs}>
        <div className={style.footer_menu}>
          <ul>
            <li>Find A Store</li>
            <li>Become A Member</li>
            <li>Sign Up for Email</li>
            <li>Send Us Feedback</li>
            <li>Student Discounts</li>
          </ul>
          <ul>
            <li>Get Help</li>
            <li>Order Status</li>
            <li>Delivery</li>
            <li>Returns</li>
            <li>Payment Options</li>
            <li>Contact Us On Nike.com Inquiries</li>
            <li>Contact Us On All Other Inquiries</li>
          </ul>
          <ul>
            <li>About Nike</li>
            <li>News</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Sustainability</li>
          </ul>
        </div>
        <div className={style.footer_links}>
          <a href="#"><img src={twitter} alt="" /></a>
          <a href="#"><img src={facebook} alt="" /></a>
          <a href="#"><img src={youtube} alt="" /></a>
          <a href="#"><img src={instagram} alt="" /></a>
        </div>
      </div>



      <div className={style.bottom}>
        <div className={style.bottom_items}>
          <span className={style.location}>
            <img src={location} alt="Location icon" />
            {cureLocation}
          </span>
          <span className={style.rights}>
            © 2023 Nike, Inc. All Rights Reserved
          </span>
        </div>
        <div className={style.bottom_items}></div>

        <div className={style.terms_block}>
          <ul>
            <li> </li>
            <li>Guides</li>
            <li>Terms of Sale</li>
            <li>Terms of Use</li>
            <li>Nike Privacy Policy</li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
