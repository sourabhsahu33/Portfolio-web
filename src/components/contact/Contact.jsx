import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title"> Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">sourabh.sahu@gmail.com</span>
              {/* Removed the email link */}
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+91-9826454567</span>
              {/* Removed the WhatsApp link */}
            </div>

            <div className="contact__card">
              <i className="bx bx-home contact__card-icon"></i>
              <h3 className="contact__card-title">Address</h3>
              <span className="contact__card-data">SEONI (MP) , INDIA  </span>
              {/* Removed the Google Maps link */}
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your message</h3>

          <form className="contact__form" id="ff">
            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">Name</label>
              <input type="text" name="name" className="contact__form-input" placeholder="Enter your name" />
            </div>
            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">Email</label>
              <input type="email" name="email" className="contact__form-input" placeholder="Enter your email" />
            </div>

            <div className="contact__form-div contact__form-area">
              <label htmlFor="" className="contact__form-tag">Message</label>
              <textarea name="message" cols="30" rows="10" className="contact__form-input" placeholder="Write your query."></textarea>
            </div>
            <button className="button button--flex">
              Send Message
              <svg
                className="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="var(--container-color)"
              >
                {/* ... SVG Path Data ... */}
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
