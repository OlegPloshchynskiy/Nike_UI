import React from "react";
import Layout from "../../layout/Layout";
import Container from "../../components/container/Container";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";

import search_icon from "../../../public/images/search-icon.png";
import like from "../../../public/images/like.png";
import dislike from "../../../public/images/dislike.png";
import phone from "../../../public/images/phone.png";
import sms from "../../../public/images/sms.png";
import mail from "../../../public/images/mail.png";
import location from "../../../public/images/location-marker.png";

import style from "./help.module.css";

const Help = () => {
  return (
    <Layout>
      <Container>
        <h1>Get Help</h1>
        <div className={style.search_container}>
          <input
            type="search"
            name="search"
            id={style.search}
            placeholder="What can we help you with?"
          />
          <img src={search_icon} alt="" />
        </div>

        <div className={style.content}>
          <section className={style.content_text}>
            <p className={style.title}>
              WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
            </p>
            <p className={style.text}>
              We want to make buying your favourite Nike shoes and gear online
              fast and easy, and we accept the following payment options:
            </p>
            <p style={{ marginLeft: "30px" }} className={style.text}>
              Visa, Mastercard, Diners Club, Discover, American Express, Visa
              Electron, Maestro
              <br />
              <br />
              If you enter your PAN information at checkout, you'll be able to
              pay for your order with PayTM or a local credit or debit card.
              <br />
              <br />
              Apple Pay
            </p>
            <p className={style.text}>
              <Link className={style.links}>Nike Members</Link> can store
              multiple debit or credit cards in their profile for faster
              checkout. If you're not already a Member,{" "}
              <Link className={style.links}>join us</Link> today.
            </p>
            <div className={style.btn_block}>
              <Button title="JOIN US" />
              <Button title="SHOP NIKE" />
            </div>
            <p className={style.subtitle}>FAQs</p>
            <b className={style.text}>
              Does my card need international purchases enabled?
            </b>
            <p className={style.text}>
              Yes, we recommend asking your bank to enable international
              purchases on your card. You will be notified at checkout <br /> if
              international purchases need to be enabled.
            </p>
            <p className={style.text}>
              Please note, some banks may charge <u>a small transaction fee</u>{" "}
              for international orders.
            </p>
            <p className={style.text}>
              <b>Can I pay for my order with multiple methods?</b>
              <br />
              No, payment for Nike orders can't be split between multiple
              payment methods.
            </p>
            <p className={style.text}>
              <b>What payment method is accepted for SNKRS orders?</b>
              <br />
              You can use any accepted credit card to pay for your SNKRS order.
            </p>
            <p className={style.text}>
              <b> Why don't I see Apple Pay as an option?</b>
              <br />
              To see Apple Pay as an option in the Nike App or on Nike.com,
              you'll need to use a compatible Apple device running the latest{" "}
              <br />
              OS, be signed in to your iCloud account and have a supported card
              in your Wallet. Additionally, you'll need to use Safari to use{" "}
              <br />
              Apple Pay on Nike.com.
            </p>
            <p className={style.text}>Was this answer helpful?</p>
            <div className={style.rated_block}>
              <img src={like} alt="" />
              <img src={dislike} alt="" />
            </div>
            <p className={style.text}>RELATED</p>
            <p className={style.subtitle} style={{ marginLeft: "30px" }}>
              <u>WHAT ARE NIKE'S DELIVERY OPTIONS?</u>
              <u>HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</u>
            </p>
          </section>
          <aside className={style.navigations}>
            <p className={style.title}>CONTACT US</p>
            <nav className={style.navs}>
              <div className={style.navs_card}>
                <img src={phone} alt="" />
                <p className={style.card_title}>000 800 919 0566</p>
                <p className={style.card_subtitle}>
                  Products & Orders: 24 hours a day, 7 days a week Company Info
                  & Enquiries: 07:30 - 16:30, Monday - Friday
                </p>
              </div>

              <div className={style.navs_card}>
                <img src={sms} alt="" />
                <p className={style.card_title}>24 hours a day</p>
                <p className={style.card_subtitle}>7 days a week</p>
              </div>

              <div className={style.navs_card}>
                <img src={mail} alt="" />
                <p className={style.card_title}>We'll reply within</p>
                <p className={style.card_subtitle}>five business days</p>
              </div>

              <Link to="/findstore" className={style.link}>
              <div className={style.navs_card}>
                <img src={location} alt="" />
                <p className={style.card_title}>STORE LOCATOR</p>
                <p className={style.card_subtitle}>Find Nike retail stores near you</p>
              </div>
              </Link>
            </nav>
          </aside>
        </div>
      </Container>
    </Layout>
  );
};

export default Help;
