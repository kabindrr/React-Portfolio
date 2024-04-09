import React from "react";
import image1 from "../assets/images.jpg";

export const AboutMe = () => {
  return (
    <section className="about" id="about">
      <h2 className="title">
        <span> About Me </span>
      </h2>

      <div className="container flex about-content">
        <div className="flex myImg">
          <img src={image1} width="100%" alt="" />
        </div>
        <div className="my-bio container">
          <h2>Kabindra Ranabhat</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
            ipsum magnam ipsam animi quas libero consequuntur veritatis quisquam
            nobis adipisci, eligendi veniam! Molestiae eum non quidem ullam,
            rerum corrupti a!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            consequuntur dolores ut inventore odit aliquam magni quaerat
            blanditiis corrupti earum vitae quas, quos ducimus eum, cumque eaque
            accusamus non facilis!
          </p>
          <p>Sydney, Australia</p>

          <div>
            <div className="tag">Interest</div>
            <div className="flex">
              <span>Coding</span>
              <span>Football</span>
              <span>Hiking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
