import React from "react";
import Button from "../Button/Button";
import Mockup from "../../assets/images/image-mockups.png";
import "./HomeSection.scss";

export default function HomeSection() {
  return (
    <section className="home">
      <div className="home__container">
        <img src={Mockup} alt="" className="home__img" />
      </div>
      <div className="home__content">
        <h1 className="home__heading">Next generation digital banking</h1>
        <p className="home__text">
          Take your financial life online. Your Easybank account will be a one-stop-shop for spending,
          saving, budgeting, investing, and much more.
        </p>
        <Button className="btn" />
      </div>
    </section>
  );
}
