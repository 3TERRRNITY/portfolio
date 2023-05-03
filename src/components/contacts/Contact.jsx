import React, { useRef } from "react";
import "./Contact.css";
import { AiOutlineArrowRight, AiOutlineMail } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ulxyges",
      "template_kbps8uv",
      form.current,
      "QwqDIHLAckTGJL4F-"
    );
    e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact me!</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <AiOutlineMail className="contact__card-icon"></AiOutlineMail>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                fedor.nedbalskij@gmail.com
              </span>

              <a
                href="mailto:fedor.nedbalskij@gmail.com"
                className="contact__button"
              >
                Write me{" "}
                <AiOutlineArrowRight className="contact__button-icon"></AiOutlineArrowRight>
              </a>
            </div>

            <div className="contact__card">
              <TbBrandTelegram className="contact__card-icon"></TbBrandTelegram>

              <h3 className="contact__card-title">Telegram</h3>
              <span className="contact__card-data">@threename</span>

              <a href="https://t.me/threename" className="contact__button">
                Write me{" "}
                <AiOutlineArrowRight className="contact__button-icon"></AiOutlineArrowRight>
              </a>
            </div>
          </div>
        </div>
        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form className="contact__form" ref={form} onSubmit={sendEmail}>
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea
                name="project"
                cols={"30"}
                rows={"10"}
                className="contact__form-input"
                placeholder="Describe your project"
              />
            </div>
            <button className="button button--flex">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
