import "./Header.css";
import React, { useState } from "react";

export default function Header() {
  const [isActive, setActive] = useState("false");

  const scrollToAbout = () => {
    const aboutElement = document.getElementById("about");
    aboutElement.scrollIntoView({ behavior: "smooth" });
    setActive(!isActive);
  };

  const scrollToSkill = () => {
    const aboutElement = document.getElementById("skill");
    aboutElement.scrollIntoView({ behavior: "smooth" });
    setActive(!isActive);
  };

  const scrollToHome = () => {
    const aboutElement = document.getElementById("home");
    aboutElement.scrollIntoView({ behavior: "smooth" });
    setActive(!isActive);
  };

  const scrollToProjects = () => {
    const aboutElement = document.getElementById("projects");
    aboutElement.scrollIntoView({ behavior: "smooth" });
    setActive(!isActive);
  };

  const burger = () => {
    setActive(!isActive);
  };

  return (
    <nav className="nav">
      <div className="logo">
        rvc<span>.</span>
      </div>
      <div className={isActive ? "nav-links " : "nav-links show"}>
        <ul>
          <li onClick={scrollToHome}>Home</li>
          <li onClick={scrollToSkill}>Skills</li>
          <li onClick={scrollToProjects}>Projects</li>
          <li onClick={scrollToAbout}>About Me</li>
        </ul>
      </div>
      <div className="contact-me-btn">
        <button>Contact Me</button>
      </div>
      <div className="burger">
        <div
          className={isActive ? "burger-btn" : "burger-btn-show"}
          id="burger-btn"
          onClick={burger}
        >
          <div className="stick1"></div>
          <div className="stick2"></div>
          <div className="stick3"></div>
        </div>
      </div>
    </nav>
  );
}
