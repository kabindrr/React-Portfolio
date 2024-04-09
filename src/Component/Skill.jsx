import React from "react";

export const Skill = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="title">
        <span>Skills</span>
      </h2>

      <div className="container flex skills-container">
        <div>
          <i className="fa-brands fa-html5" style={{ color: "red" }}></i>
          <span>HTML</span>
        </div>

        <div>
          <i className="fa-brands fa-css3-alt" style={{ color: "blue" }}></i>
          <span>CSS</span>
        </div>

        <div>
          <i className="fa-brands fa-js"></i>
          <span>Javascript</span>
        </div>

        <div>
          <i className="fa-brands fa-square-github"></i>
          <span>Github</span>
        </div>
        <div>
          <i className="fa-brands fa-figma"></i>
          <span>Figma</span>
        </div>
      </div>
    </section>
  );
};
