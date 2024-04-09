import "./App.css";

import image1 from "./assets/images.jpg";
import image2 from "./assets/speakingDummy.jpg";
import image3 from "./assets/profilePhoto.png";

function App() {
  return (
    <>
      <div className="wrapper">
        {/* nav bar */}
        <header>
          <div className="header container flex">
            <div className="flex logo">
              <div className="joti-one-regular">Kabindra</div>
              <div>Full Stack Developer</div>
            </div>

            <label htmlFor="hamburgerMenu">
              <i className="fa-solid fa-bars"></i>
            </label>
            <input type="checkbox" id="hamburgerMenu" />

            <div className="menu">
              <ul className="flex navigation">
                <li>
                  <a href="#header">Home</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </header>

        {/* hero Section */}
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

        {/* Banner */}
        <section className="flex banner container">
          <div className="flex info-content">
            <div className="flex icon-container">
              <i className="fa-solid fa-award"></i>
            </div>
            <div>
              <span>IT</span>
              <p>Graduation</p>
            </div>
          </div>
          <div className="info-divider"></div>
          <div className="flex info-content">
            <div className="flex icon-container">
              <i className="fa-solid fa-award"></i>
            </div>
            <div>
              <span>1+ Projects</span>
              <p>Completed</p>
            </div>
          </div>

          <div className="info-divider"></div>
          <div className="flex info-content">
            <div className="flex icon-container">
              <i className="fa-solid fa-award"></i>
            </div>
            <div>
              <span>1+ year</span>
              <p>Experience</p>
            </div>
          </div>
        </section>

        {/* skills */}
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
              <i
                className="fa-brands fa-css3-alt"
                style={{ color: "blue" }}
              ></i>
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

        {/* my recent work */}
        <section className="projects container" id="projects">
          <h2 className="title">
            <span> My Projects </span>
          </h2>

          <div className="grid project-container">
            <div className="project-card">
              <div className="top">
                <img src={image3} alt="" width="100%" />
              </div>
              <div className="bottom container">
                <div className="links">
                  <a href="">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-chrome"></i>
                  </a>
                </div>
                <h3>Personal portfolio</h3>
                <p>Techstack: HTML, CSS, Javascript, React</p>
              </div>
            </div>

            <div className="project-card">
              <div className="top">
                <img src={image3} alt="" width="100%" />
              </div>
              <div className="bottom container">
                <div className="links">
                  <a href="">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-chrome"></i>
                  </a>
                </div>
                <h3>Personal portfolio</h3>
                <p>Techstack: HTML, CSS, Javascript, React</p>
              </div>
            </div>

            <div className="project-card">
              <div className="top">
                <img src={image3} alt="" width="100%" />
              </div>
              <div className="bottom container">
                <div className="links">
                  <a href="">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-chrome"></i>
                  </a>
                </div>
                <h3>Personal portfolio</h3>
                <p>Techstack: HTML, CSS, Javascript, React</p>
              </div>
            </div>

            <div className="project-card">
              <div className="top">
                <img src={image3} alt="" width="100%" />
              </div>
              <div className="bottom container">
                <div className="links">
                  <a href="">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-chrome"></i>
                  </a>
                </div>
                <h3>Personal portfolio</h3>
                <p>Techstack: HTML, CSS, Javascript, React</p>
              </div>
            </div>
          </div>
        </section>

        {/* about me */}

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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus ipsum magnam ipsam animi quas libero consequuntur
                veritatis quisquam nobis adipisci, eligendi veniam! Molestiae
                eum non quidem ullam, rerum corrupti a!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis consequuntur dolores ut inventore odit aliquam magni
                quaerat blanditiis corrupti earum vitae quas, quos ducimus eum,
                cumque eaque accusamus non facilis!
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
      </div>
    </>
  );
}

export default App;
