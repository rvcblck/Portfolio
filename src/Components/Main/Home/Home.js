import "./Home.css";

export default function Home() {
  const scrollToAbout = () => {
    const aboutElement = document.getElementById("about");
    aboutElement.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    const aboutElement = document.getElementById("projects");
    aboutElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home" id="home">
      <div className="shape1"></div>
      <div className="shape2"></div>
      <div className="shape3"></div>
      <div className="webdev">WEB DEVELOPER</div>
      <div className="home-left">
        <h1>Hi ! &nbsp; I'm Rovic</h1>
        <span>
          As a dedicated and passionate web developer, I possess the necessary
          skills and expertise to ensure the success of your project.
        </span>
        <div className="home-links">
          <button onClick={scrollToAbout} className="home-about-me">
            About Me
          </button>
          <button onClick={scrollToProjects} className="my-works">
            My Works
          </button>
        </div>
      </div>
      <div className="home-right">
        <div className="img-container">
          <img src="./images/profile_pic.png" alt="profile" />
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="mailto:deleon.rovic.g.5570@gmail.com">
                <button>
                  <i className="fa-solid fa-envelope"></i>
                </button>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/rovic-de-leon-8980a4261">
                <button>
                  <i className="fa-brands fa-linkedin-in"></i>
                </button>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/rovic.killua16">
                <button>
                  <i className="fa-brands fa-facebook-f"></i>
                </button>
              </a>
            </li>
            <li>
              <a href="https://github.com/rvcblck">
                <button>
                  <i className="fa-brands fa-github"></i>
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
