import { useEffect } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./About.css";

function About() {
  useEffect(() => {
    const elements = document.querySelectorAll(".about-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Page title */}
        <div className="about-heading">
          <h2 className="page-heading">About Me</h2>
        </div>

        {/* Code on the left + content on the right */}
        <div className="about-code-section">

          {/* LEFT: Code card */}
          <div className="code-window about-reveal">
            <div className="code-window-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <pre>{`const developer = {
  firstName: "Tabot",
  lastName: "Ghislain Orock",
  role: "Full-Stack Developer",
  focus: "Web Applications",
  approach: "Build / Solve / Improve",
};`}</pre>
          </div>

          {/* RIGHT: Writing, stats and socials */}
          <div className="about-content">

            {/* Description */}
            <div className="about-copy about-reveal">
              <p>
                I'm Tabot Ghislain Orock, a Full-Stack Developer with a passion for creating
                user-friendly applications. I enjoy building practical
                solutions across the frontend and backend, with a focus on
                clean interfaces and useful functionality.
              </p>
            </div>

            {/* Stats */}
            <div className="about-stats about-reveal">
              <div>
                <strong>4+</strong>
                <span>Years of Experience</span>
              </div>

              <div>
                <strong>10+</strong>
                <span>Completed Projects</span>
              </div>

              <div>
                <strong>10+</strong>
                <span>Technologies Used</span>
              </div>
            </div>

            {/* Social links */}
            <div className="about-socials about-reveal">
              <a href="#contact" aria-label="GitHub">
                <FaGithub />
              </a>

              <a href="#contact" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;