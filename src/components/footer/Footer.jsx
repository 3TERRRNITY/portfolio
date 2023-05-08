import React from "react";
import "./Footer.css";
import { BsInstagram, BsGithub, BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Nedbalskiy</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#contacts" className="footer__link">
              Contacts
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com"
            className="footer__social-link"
            target="_blanket"
          >
            <BsInstagram />
          </a>

          <a
            href="https://github.com/3TERRRNITY"
            className="footer__social-link"
            target="_blanket"
          >
            <BsGithub />
          </a>

          <a
            href="https://t.me/threename"
            className="footer__social-link"
            target="_blanket"
          >
            <BsTelegram />
          </a>
        </div>
      </div>
      <span className="footer__copy">&#169; Nedbalskiy Fyodor</span>
    </footer>
  );
};

export default Footer;
