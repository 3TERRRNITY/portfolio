import React from "react";
import { AiFillTrophy } from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <AiFillTrophy className="about__icon" />
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1 year working on freelance</span>
      </div>

      <div className="about__box">
        <BsFillBriefcaseFill className="about__icon" />
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">A lot...</span>
      </div>

      <div className="about__box">
        <BiSupport className="about__icon" />
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">DM me | online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
