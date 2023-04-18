import React, { useState } from "react";
import "./Header.scss";
import Logo from "../../assets/logo.svg";
import Button from "../Button/Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className={`overlay ${isMenuOpen ? "overlay--visible" : ""}`} />
      <header className="header">
        <nav aria-label="Menu" className="header__navbar">
          <a href="#" aria-label="Easybank">
            <img src={Logo} alt="Easybank" />
          </a>
          <button aria-label="Menu Button" className="header__hamburger" onClick={handleMenuClick}>
            <span className="header__span"></span>
            <span className="header__span"></span>
            <span className="header__span"></span>
          </button>
          <ul className={`header__list ${isMenuOpen ? "header__list--open" : ""}`}>
            <li className="header__item">
              <a href="#" className="header__link">
                Home
              </a>
            </li>
            <li className="header__item">
              <a href="#" className="header__link">
                About
              </a>
            </li>
            <li className="header__item">
              <a href="#" className="header__link">
                Contact
              </a>
            </li>
            <li className="header__item">
              <a href="#" className="header__link">
                Blog
              </a>
            </li>
            <li className="header__item">
              <a href="#" className="header__link">
                Careers
              </a>
            </li>
          </ul>
          <Button className="btn btn--hidden" />
        </nav>
      </header>
    </>
  );
}
