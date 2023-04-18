import React from "react";
import "./FeatureSection.scss";
import { Onboarding, API, Online, Budget } from "../../assets/icons/icons";

const features = [
  {
    id: 1,
    icon: Online,
    title: "Online Banking",
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    id: 2,
    icon: Budget,
    title: "Simple Budgeting",
    description:
      "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },
  {
    id: 3,
    icon: Onboarding,
    title: "Fast Onboarding",
    description:
      "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    id: 4,
    icon: API,
    title: "Open API",
    description:
      " Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

export default function FeatureSection() {
  return (
    <section className="feature">
      <div>
        <h2 className="feature__heading">Why choose Easybank?</h2>
        <p className="feature__text">
          We leverage Open Banking to turn your bank account into your financial hub. Control your
          finances like never before.
        </p>
      </div>
      <div className="feature__container">
        {features.map((feature) => (
          <div className="feature__item" key={feature.id}>
            <img src={feature.icon} alt="" className="feature__icon" />
            <h3 className="feature__title">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
