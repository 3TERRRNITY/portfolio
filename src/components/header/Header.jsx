import React, { useState } from "react";
import "./Header.css";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import { BiHomeAlt2 } from "react-icons/bi";
import { SiAboutdotme } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { HiShoppingBag } from "react-icons/hi";
import { BsImages } from "react-icons/bs";
import { AiFillContacts } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a className="nav__logo" href="index.html">
          Nedbalskiy
        </a>
        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a className="nav__link active-link" href="#home">
                <BiHomeAlt2 className="nav__icon" />
                <p>Home</p>
              </a>
            </li>

            <li className="nav__item">
              <a className="nav__link" href="#about">
                <SiAboutdotme className="nav__icon" />
                <p>About</p>
              </a>
            </li>

            <li className="nav__item">
              <a className="nav__link" href="#skills">
                <GiSkills className="nav__icon" />
                <p>Skills</p>
              </a>
            </li>

            <li className="nav__item">
              <a className="nav__link" href="#services">
                <HiShoppingBag className="nav__icon" />
                <p>Services</p>
              </a>
            </li>

            <li className="nav__item">
              <a className="nav__link" href="#portfolio">
                <BsImages className="nav__icon" />
                <p>Portfolio</p>
              </a>
            </li>

            <li className="nav__item">
              <a className="nav__link" href="#contact">
                <AiFillContacts className="nav__icon" />
                <p>Contact</p>
              </a>
            </li>
          </ul>
          <span className="nav__close" onClick={() => setToggle(!toggle)}>
            <AiOutlineClose />
          </span>
        </div>

        <span className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <AiOutlineAppstore />
        </span>
      </nav>
    </header>
  );
};

export default Header;
