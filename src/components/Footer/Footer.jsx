import React from "react";
import Button from "../Button/Button";
import Logo from "../../assets/logo2.svg";
import { Facebook, Youtube, Twitter, Pinterest, Instagram } from "../../assets/icons/icons";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <img src={Logo} alt="Easybank" className="footer__logo" />
        <div className="footer__socials">
          <a href="#" aria-label="Facebook" className="footer__social">
            {<img src={Facebook} alt="" />}
          </a>
          <a href="#" aria-label="Youtube" className="footer__social">
            <img src={Youtube} alt="" />
          </a>
          <a href="#" aria-label="Twitter" className="footer__social">
            <img src={Twitter} alt="" />
          </a>
          <a href="#" aria-label="Pinterest" className="footer__social">
            <img src={Pinterest} alt="" />
          </a>
          <a href="#" aria-label="Instagram" className="footer__social">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <nav className="footer__navbar" aria-label="secondary navbar">
        <ul className="footer__list">
          <li className="footer__item">
            <a href="#">About Us</a>
          </li>
          <li className="footer__item">
            <a href="#">Contact</a>
          </li>
          <li className="footer__item">
            <a href="#">Blog</a>
          </li>
          <li className="footer__item">
            <a href="#">Careers</a>
          </li>
          <li className="footer__item">
            <a href="#">Support</a>
          </li>
          <li className="footer__item">
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </nav>
      <div className="footer__container">
        <Button className="btn" />
        <p className="footer__copyright">© Easybank. All Rights Reserved</p>
      </div>
    </footer>
  );
}
