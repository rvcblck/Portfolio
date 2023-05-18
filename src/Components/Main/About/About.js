import React, { useRef } from "react";
import "./About.css";

export default function Home() {
  const aboutMeRef = useRef(null);

  return (
    <div ref={aboutMeRef} className="about-me" id="about">
      <div className="about-me-left">
        <div className="img-container">
          <img src="./images/grad_pic.jpg" alt="grad-pic" />
          <div className="img-circle"></div>
          <div className="img-circle2"></div>
        </div>
      </div>
      <div className="about-me-right">
        <div className="about-me-wrapper">
          <h1>
            About Me <span></span>
          </h1>
          <div className="img-container-mobile">
            <img src="./images/grad_pic.jpg" alt="grad-pic" />
            {/* <div className="img-circle"></div> */}
            {/* <div className="img-circle2"></div> */}
          </div>
          <p>
            I’m Rovic G. De Leon, and I recently graduated with a degree in IT.
            Throughout my academic journey, I have developed a strong passion
            for web development. I’m always the programmer of the group
            projects, capstone, and even during my internships. I handled both
            frontend and backend development.
          </p>
          <h2>Educational Background</h2>
          <hr />
          {/* <h2>College</h2> */}
          <div className="edu-bg">
            <div className="edu-bg-icon">
              <img src="./images/bsu-logo.png" alt="img" />
            </div>
            <div className="edu-bg-info">
              <h2>Bulacan State University</h2>
              <div>Course : Bachelor of Science in Information Technology</div>
              <div>Major : Web and Mobile Development</div>
              <div>2019 - 2023</div>
            </div>
          </div>
          <div className="edu-bg">
            <div className="edu-bg-icon">
              <img
                src="./images/aclc-logo.png"
                alt="img"
                style={{ backgroundColor: "#fff", borderRadius: "50%" }}
              />
            </div>
            <div className="edu-bg-info">
              <h2>
                AMA Computer Learning Center <br />
                (College Of Baliuag)
              </h2>
              <div>Track : Technical-Vocational-Livelihood</div>
              <div>Strand : Information and Communication Technology</div>
              <div>2017 - 2019</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
