import "./App.css";

import image1 from "./assets/images.jpg";
import image2 from "./assets/speakingDummy.jpg";
import image3 from "./assets/profilePhoto.png";
import { NavBar } from "./Component/NavBar.jsx";
import { HeroSection } from "./Component/HeroSection.jsx";
import { Banner } from "./Component/Banner.jsx";
import { Skill } from "./Component/Skill.jsx";
import { MyRecentWork } from "./Component/MyRecentWork.jsx";
import { AboutMe } from "./Component/AboutMe.jsx";
import { Contact } from "./Component/Contact.jsx";
import { Footer } from "./Component/Footer.jsx";

function App() {
  return (
    <>
      <div className="wrapper">
        <label htmlFor="darkMode" className="dark-mode-toggler">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>

        <input type="checkbox" id="darkMode" />
        {/* nav bar */}
        <NavBar />

        {/* hero Section */}
        <HeroSection />

        {/* Banner */}
        <Banner />

        {/* skills */}
        <Skill />

        {/* my recent work */}
        <MyRecentWork />

        {/* about me */}
        <AboutMe />

        {/* contact */}
        <Contact />

        {/* footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
