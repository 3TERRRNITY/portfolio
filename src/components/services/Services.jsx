import React, { useState } from "react";
import "./Services.css";
import { AiOutlineClose, AiOutlineArrowRight } from "react-icons/ai";
import { SiFrontendmentor } from "react-icons/si";
import { BiBadgeCheck } from "react-icons/bi";

const Services = () => {
  const [toggleModal, setToggleModal] = useState(0);

  const toggleTab = (index) => {
    setToggleModal(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <SiFrontendmentor className="services__icon"></SiFrontendmentor>
            <h3 className="services__title">Frontend develop</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View more
            <AiOutlineArrowRight className="services__button-icon"></AiOutlineArrowRight>
          </span>

          <div
            className={
              toggleModal === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <AiOutlineClose
                className="services__modal-close"
                onClick={() => toggleTab(0)}
              ></AiOutlineClose>
              <h3 className="services__modal-title">Frontend Develop</h3>
              <p className="services__modal-description">
                Service with 1 year of experience.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <BiBadgeCheck className="services__modal-icon"></BiBadgeCheck>
                  <p className="services__modal-info">
                    I develop the user interfaces
                  </p>
                </li>
                <li className="services__modal-service">
                  <BiBadgeCheck className="services__modal-icon"></BiBadgeCheck>
                  <p className="services__modal-info">Web page development</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
