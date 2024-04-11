import "./App.css";

import { NavBar } from "./Component/NavBar.jsx";
import { HeroSection } from "./Component/HeroSection.jsx";
import { Banner } from "./Component/Banner.jsx";
import { Skill } from "./Component/Skill.jsx";
import { MyRecentWork } from "./Component/MyRecentWork.jsx";
import { AboutMe } from "./Component/AboutMe.jsx";
import { Contact } from "./Component/Contact.jsx";
import { Footer } from "./Component/Footer.jsx";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="wrapper">
        <label htmlFor="darkMode" className="dark-mode-toggler">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>

        <input type="checkbox" id="darkMode" />

        <NavBar />

        <Routes>
          <Route path="/" element={<HeroSection />}></Route>
          <Route path="/skills" element={<Skill />}></Route>
          <Route path="/projects" element={<MyRecentWork />}></Route>
          <Route path="/about" element={<AboutMe />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
