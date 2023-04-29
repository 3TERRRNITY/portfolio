import React from "react";
import { BsInstagram, BsGithub, BsTelegram } from "react-icons/bs";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com"
        className="home__social-icon"
        target="_blanket"
      >
        <BsInstagram />
      </a>

      <a
        href="https://github.com/3TERRRNITY"
        className="home__social-icon"
        target="_blanket"
      >
        <BsGithub />
      </a>

      <a
        href="https://t.me/threename"
        className="home__social-icon"
        target="_blanket"
      >
        <BsTelegram />
      </a>
    </div>
  );
};

export default Social;
