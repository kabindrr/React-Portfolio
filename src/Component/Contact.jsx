import React from "react";

export const Contact = () => {
  return (
    <section class="container contact" id="contact">
      <h2 class="title">
        <span> Contact </span>
      </h2>

      <div class="flex social">
        <a href="">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-square-github"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-youtube"></i>
        </a>
        <a href="tel:0413705873">
          <i class="fa-solid fa-mobile"></i>
        </a>
      </div>
      <h3>OR</h3>

      <div class="flex">
        <a href="mailto:kabindra_rb@protonmail.com" class="email-section">
          <div class="email flex">
            <span>your-email@gmail.com</span>
            <div class="flex send">
              <i class="fa-solid fa-paper-plane"></i>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};
