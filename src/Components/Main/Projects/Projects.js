import "./Projects.css";
import List from "./List/List";
import Carousel from "./Carousel/Carousel";
import projectData from "../../../projectsData";
import React, { useState } from "react";
import Modal from "react-modal";

export default function Projects() {
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImgClick = (item) => {
    setSelectedImg(item);
  };

  let language;

  if (selectedImg) {
    language = selectedImg.made.map((item) => {
      return (
        <div className="language" key={item.id}>
          <img src={item.icon} alt="img" />
          {item.language}
        </div>
      );
    });
  }

  const data = projectData.map((item) => {
    return <List key={item.id} projects={item} handleClick={handleImgClick} />;
  });

  return (
    <div className="projects" id="projects">
      <h1 className="project-label">Projects</h1>

      <div className="star-bg">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>

      <div className="project-wrapper">{data}</div>
      <div
        className="modal"
        style={{ display: selectedImg ? "block" : "none" }}
        onClick={() => setSelectedImg(null)}
      >
        <div className="modal-wrapper" onClick={() => setSelectedImg(null)}>
          <i className="fa-solid fa-x" onClick={() => setSelectedImg(null)}></i>
          {selectedImg && (
            <div
              className="modal-img-container"
              onClick={() => setSelectedImg(null)}
            >
              <img src={selectedImg.img} alt="img" />
              <div className="info">
                <label>Project Name : {selectedImg.title}</label>
                <div className="language-wrapper">{language}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
