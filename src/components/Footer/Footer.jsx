import React from "react";
import Button from "../Button/Button";
import Logo from "../../assets/logo2.svg";
import { Facebook, Youtube, Twitter, Pinterest, Instagram } from "../../assets/icons/icons";
import "./Footer.scss";

const socialMediaData = [
  { label: "facebook", image: Facebook },
  { label: "youtube", image: Youtube },
  { label: "twitter", image: Twitter },
  { label: "pinterest", image: Pinterest },
  { label: "instagram", image: Instagram },
];

const footerLinks = ["About Us", "Contact", "Blog", "Careers", "Support", "Privacy Policy"];

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <img src={Logo} alt="Easybank" className="footer__logo" />
        <div className="footer__socials">
          {socialMediaData.map((socialMedia) => (
            <a
              href="#"
              aria-label={socialMedia.label}
              key={socialMedia.label}
              className="footer__social">
              <img src={socialMedia.image} alt="" />
            </a>
          ))}
        </div>
      </div>
      <nav className="footer__navbar" aria-label="secondary navbar">
        <ul className="footer__list">
          {footerLinks.map((text, index) => (
            <li key={index} className="footer__item">
              <a href="#">{text}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="footer__container">
        <Button className="btn" />
        <p className="footer__copyright">© Easybank. All Rights Reserved</p>
      </div>
    </footer>
  );
}
