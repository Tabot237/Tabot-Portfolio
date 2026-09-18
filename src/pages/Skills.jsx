import { useEffect } from "react";
import "./Skills.css";

function Skills() {
  useEffect(() => {
    const elements = document.querySelectorAll(".skills-reveal");

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

    const cards = document.querySelectorAll(".skill-card");

    const handleMouseMove = (event) => {
      const card = event.currentTarget;
      const rect = card.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const centerX = rect.width / 2;

      /*
        Small 2D sideways tilt.
        Maximum rotation = 2.5 degrees.
      */
      const rotate = ((x - centerX) / centerX) * 2.5;

      card.style.transform = `rotate(${rotate}deg)`;
    };

    const handleMouseLeave = (event) => {
      const card = event.currentTarget;

      card.style.transform = "rotate(0deg)";
    };

    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      observer.disconnect();

      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        {/* =========================
            HEADING
        ========================= */}

        <div className="skills-heading skills-reveal">
         <h2 className="page-heading">My Skills</h2>

          <h2>
            Tools I use to
            <span> build and solve.</span>
          </h2>

          <p>
            Technologies and tools I use to build modern,
            practical web applications.
          </p>
        </div>

        {/* =========================
            SKILLS GRID
        ========================= */}

        <div className="skills-grid">

          {/* =========================
              FRONTEND
          ========================= */}

          <div className="skill-card-wrapper skills-reveal">
            <div className="skill-card skill-card-blue">

              <div className="skill-glow"></div>

              <div className="skill-card-content">

                <div className="skill-card-title">
                  <h3>Frontend Development</h3>
                </div>

                <div className="skill-items">

                  <div className="skill-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                      alt="HTML"
                    />

                    <div>
                      <strong>HTML</strong>
                      <span>Experienced</span>
                    </div>
                  </div>

                  <div className="skill-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                      alt="JavaScript"
                    />

                    <div>
                      <strong>JavaScript</strong>
                      <span>Experienced</span>
                    </div>
                  </div>

                  <div className="skill-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                      alt="TypeScript"
                    />

                    <div>
                      <strong>TypeScript</strong>
                      <span>Experienced</span>
                    </div>
                  </div>

                  <div className="skill-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                      alt="React"
                    />

                    <div>
                      <strong>React</strong>
                      <span>Experienced</span>
                    </div>
                  </div>

                  <div className="skill-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                      alt="Next.js"
                    />

                    <div>
                      <strong>Next.js</strong>
                      <span>Experienced</span>
                    </div>
                  </div>

                  <div className="skill-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                      alt="React Native"
                    />

                    <div>
                      <strong>React Native</strong>
                      <span>Experienced</span>
                    </div>
                  </div>

                  <div className="skill-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                      alt="Vite"
                    />

                    <div>
                      <strong>Vite</strong>
                      <span>Experienced</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* =========================
              BACKEND
          ========================= */}

          <div className="skill-card-wrapper skills-reveal">
            <div className="skill-card skill-card-green">

              <div className="skill-glow"></div>

              <div className="skill-card-content">

                <div className="skill-card-title">
                  <h3>Backend &amp; Databases</h3>
                </div>

                <div className="skill-items">

                  <div className="skill-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg"
                      alt="NestJS"
                    />

                    <div>
                      <strong>NestJS</strong>
                      <span>Experienced</span>
                    </div>
                  </div>

                  <div className="skill-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
                      alt="Go"
                    />

                    <div>
                      <strong>Go</strong>
                      <span>Experienced</span>
                    </div>
                  </div>

                  <div className="skill-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                      alt="PostgreSQL"
                    />

                    <div>
                      <strong>PostgreSQL</strong>
                      <span>Experienced</span>
                    </div>
                  </div>

                  <div className="skill-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg"
                      alt="Firebase"
                    />

                    <div>
                      <strong>Firebase</strong>
                      <span>Intermediate</span>
                    </div>
                  </div>

                  <div className="skill-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                      alt="Node.js"
                    />

                    <div>
                      <strong>Node.js</strong>
                      <span>Experienced</span>
                    </div>
                  </div>

                  <div className="skill-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                      alt="Express"
                    />

                    <div>
                      <strong>Express</strong>
                      <span>Experienced</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* =========================
              TOOLS
          ========================= */}

          <div className="skill-card-wrapper skills-reveal">
            <div className="skill-card skill-card-purple">

              <div className="skill-glow"></div>

              <div className="skill-card-content">

                <div className="skill-card-title">
                  <h3>Development Tools</h3>
                </div>

                <div className="skill-items">

                  <div className="skill-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                      alt="Git"
                    />

                    <div>
                      <strong>Git</strong>
                      <span>Experienced</span>
                    </div>
                  </div>

                  <div className="skill-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                      alt="GitHub"
                    />

                    <div>
                      <strong>GitHub</strong>
                      <span>Experienced</span>
                    </div>
                  </div>

                  <div className="skill-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
                      alt="VS Code"
                    />

                    <div>
                      <strong>VS Code</strong>
                      <span>Experienced</span>
                    </div>
                  </div>

                  <div className="skill-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
                      alt="npm"
                    />

                    <div>
                      <strong>npm</strong>
                      <span>Experienced</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* =========================
              OTHER
          ========================= */}

          <div className="skill-card-wrapper skills-reveal">
            <div className="skill-card skill-card-gold">

              <div className="skill-glow"></div>

              <div className="skill-card-content">

                <div className="skill-card-title">
                  <h3>Other Skills</h3>
                </div>

                <div className="skill-items">

                  <div className="skill-item">
                    <div className="skill-text-icon">
                      UI
                    </div>

                    <div>
                      <strong>UI Design</strong>
                      <span>Experienced</span>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-text-icon">
                      RD
                    </div>

                    <div>
                      <strong>Responsive Design</strong>
                      <span>Experienced</span>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-text-icon">
                      PS
                    </div>

                    <div>
                      <strong>Problem Solving</strong>
                      <span>Experienced</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;