import matrixLogo from "../assets/matrix-logo.png";
import { useEffect } from "react";
import "./Experience.css";

const technologyLogos = {
  HTML:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",

  CSS:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",

  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",

  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",

  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",

  Git:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",

  GitHub:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",

  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",

  Vite:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",

  PostgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",

  Database:
    "https://cdn.simpleicons.org/databricks/ffffff",

  API:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",

  "Matrix COSEC": matrixLogo,
};
function Technology({ name }) {
  const logo = technologyLogos[name];

  return (
    <span className="experience-tech" title={name}>
      {logo ? (
        <img src={logo} alt={name} />
      ) : (
        <span className="experience-tech-text">
          {name}
        </span>
      )}

      <span className="experience-tech-name">
        {name}
      </span>
    </span>
  );
}

function Experience() {
  useEffect(() => {
    const elements =
      document.querySelectorAll(".experience-reveal");

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

    elements.forEach((element) =>
      observer.observe(element)
    );

    return () => observer.disconnect();
  }, []);

  return (
    <section className="experience" id="experience">
      <div className="experience-container">

        {/* =========================
            HEADING
        ========================= */}

        <div className="experience-heading experience-reveal">

          <span className="section-label">
            EXPERIENCE
          </span>

          <h2>
            Where I’ve
            <span> learned and grown.</span>
          </h2>

          <p>
            My journey through development, learning, and
            hands-on experience.
          </p>

        </div>

        {/* =========================
            TIMELINE
        ========================= */}

        <div className="experience-timeline">

          <div className="experience-line"></div>

          {/* =========================
              EXPERIENCE 01
          ========================= */}

          <div className="experience-item experience-reveal">

            <div className="experience-dot">
              <span></span>
            </div>

            <div className="experience-card experience-card-gold">

              <div className="experience-top">

                <span className="experience-date">
                  2026 — PRESENT
                </span>

                <span className="experience-type">
                  Internship
                </span>

              </div>

              <h3>
                Full-Stack Developer Intern
              </h3>

              <h4>
                ACTA / Promedia
              </h4>

              <p>
                Working with enterprise technology solutions while
                developing practical skills in web development,
                systems, and technical problem solving.
              </p>

              <div className="experience-tags">

                <Technology name="HTML" />
                <Technology name="CSS" />
                <Technology name="JavaScript" />
                <Technology name="React" />
                <Technology name="Matrix COSEC" />

              </div>

            </div>
          </div>

          {/* =========================
              EXPERIENCE 02
          ========================= */}

          <div className="experience-item experience-reveal">

            <div className="experience-dot">
              <span></span>
            </div>

            <div className="experience-card experience-card-green">

              <div className="experience-top">

                <span className="experience-date">
                  2025 — 2026
                </span>

                <span className="experience-type">
                  Development
                </span>

              </div>

              <h3>
                Full-Stack Development
              </h3>

              <h4>
                Personal & Team Projects
              </h4>

              <p>
                Building modern web applications across frontend
                and backend technologies while improving my ability
                to turn ideas into practical solutions.
              </p>

              <div className="experience-tags">

                <Technology name="React" />
                <Technology name="JavaScript" />
                <Technology name="Node.js" />
                <Technology name="Git" />
                <Technology name="GitHub" />

              </div>

            </div>
          </div>

          {/* =========================
              EXPERIENCE 03
          ========================= */}

          <div className="experience-item experience-reveal">

            <div className="experience-dot">
              <span></span>
            </div>

            <div className="experience-card experience-card-purple">

              <div className="experience-top">

                <span className="experience-date">
                  2024 — 2025
                </span>

                <span className="experience-type">
                  Learning
                </span>

              </div>

              <h3>
                Web Development Journey
              </h3>

              <h4>
                Continuous Learning
              </h4>

              <p>
                Developing a strong foundation in web technologies,
                responsive interfaces, programming concepts, and
                modern development workflows.
              </p>

              <div className="experience-tags">

                <Technology name="HTML" />
                <Technology name="CSS" />
                <Technology name="JavaScript" />
                <Technology name="React" />
                <Technology name="Vite" />

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;