import React from "react";

import style from "./question.module.css";
import Button from "../../../components/button/Button";

const Questions = () => {
  const question = [
    {
      question: "What is Nike Membership?",
      answer:
        "Nike Membership gives you access to inspiration, community and exclusive Nike products. It's the best way to access everything Nike, and it's free, fast and easy to join. You can join online or when you download any of the Nike apps.",
    },
    {
      question: "Is Nike Membership free?",
      answer:
        "Yes, Nike Membership is free. That includes our fitness apps, Nike Training Club and Nike Run Club, and their libraries of over 100 workouts, and the SNKRS App, to stay on top of the latest sneaker drops.",
    },
    {
      question: "How fast is sign-up?",
      answer:
        "Join Us with three simple clicks, and you'll be ready to shop, work out and enjoy all of our benefits.",
    },
    {
      question: "What are Member Rewards?",
      answer:
        "All Nike Members receive special offers and product promotions just to say thanks for being with us, or for moments of personal significance like birthdays. Nike Member Rewards is not a points-based system, so you'll receive rewards throughout the year.",
    },
  ];

  return (
    <div>
      <div className={style.head}>
        <div className={style.title}>BREAKING BARRIERS CHALLENGE</div>
        <div className={style.subtitle}>
          50 years and we are never done— run with us for the future of sport.
        </div>
        <Button title={"Download the NRC App"} />
      </div>
      <div className={style.container}>
        <div className={style.title}>Frequently Asked Questions</div>
        <div className={style.question_block}>
          {question.map((elem, index) => {
            return (
              <div className={style.item} key={index}>
                <span className={style.item_title}>{elem.question}</span>
                <span className={style.item_subtitle}>{elem.answer}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Questions;
