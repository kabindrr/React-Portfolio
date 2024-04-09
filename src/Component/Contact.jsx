import React from "react";

export const Contact = () => {
  return (
    <section className="container contact" id="contact">
      <h2 className="title">
        <span> Contact </span>
      </h2>

      <div className="flex social">
        <a href="">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-square-github"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a href="tel:0413705873">
          <i className="fa-solid fa-mobile"></i>
        </a>
      </div>
      <h3>OR</h3>

      <div className="flex">
        <a href="mailto:kabindra_rb@protonmail.com" className="email-section">
          <div className="email flex">
            <span>your-email@gmail.com</span>
            <div className="flex send">
              <i className="fa-solid fa-paper-plane"></i>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};
