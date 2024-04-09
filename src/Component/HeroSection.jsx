import React from "react";
import image1 from "../assets/images.jpg";

export const HeroSection = () => {
  return (
    <section className="hero-section container" id="header">
      <div className="grid hero">
        <div className="left flex">
          <div>
            Hi I'm <span>Kabindra</span>
          </div>
          <div className="tag">Full Stack Developer</div>
          <p>I love coding and Doing projects</p>
          <div>
            <a href={image1} download>
              <button>
                Download CV <i className="fa-solid fa-download"></i>
              </button>
            </a>
          </div>
        </div>
        <div className="flex right">
          <img src={image1} alt="Speaking Images" />
        </div>
      </div>
    </section>
  );
};
