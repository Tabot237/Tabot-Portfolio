import { useEffect } from "react";
import "./About.css";
import profileImage from "../assets/profile.png";

function About() {
useEffect(() => {
  const elements = document.querySelectorAll(".about-reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  elements.forEach((element) => observer.observe(element));

  return () => observer.disconnect();
}, []);

  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-image about-reveal">
          <div className="about-image-ring"></div>

          <img
            src={profileImage}
            alt="Tabot"
          />
        </div>

        <div className="about-content">

          <span className="section-label about-reveal">
            ABOUT ME
          </span>

          <h2 className="about-reveal">
            Turning ideas into
            <span> practical solutions.</span>
          </h2>

          <p className="about-reveal">
            I’m a Full-Stack Developer interested in building modern,
            practical web applications that solve real problems.
          </p>

          <p className="about-reveal">
            I enjoy working across both the frontend and backend,
            combining clean interfaces with useful functionality to
            create applications that are simple and effective to use.
          </p>

          <div className="about-info about-reveal">

            <div className="info-item">
              <span>ROLE</span>
              <strong>Full-Stack Developer</strong>
            </div>

            <div className="info-item">
              <span>FOCUS</span>
              <strong>Web Development</strong>
            </div>

            <div className="info-item">
              <span>APPROACH</span>
              <strong>Build / Solve / Improve</strong>
            </div>

          </div>

          <a href="#skills" className="about-button about-reveal">
            Explore My Skills
            <span>↗</span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default About;