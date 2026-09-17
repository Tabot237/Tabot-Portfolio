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

        <div className="skills-heading skills-reveal">
          <span className="section-label">
            MY SKILLS
          </span>

          <h2>
            Tools I use to
            <span> build and solve.</span>
          </h2>

          <p>
            Technologies and tools I use to build modern,
            practical web applications.
          </p>
        </div>

        <div className="skills-grid">

          <div className="skill-card skills-reveal">
            <span className="skill-number">01</span>

            <h3>Frontend</h3>

            <p>
              Building responsive and interactive user interfaces.
            </p>

            <div className="skill-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Vite</span>
            </div>
          </div>

          <div className="skill-card skills-reveal">
            <span className="skill-number">02</span>

            <h3>Backend</h3>

            <p>
              Creating functional applications and server-side systems.
            </p>

            <div className="skill-list">
              <span>Node.js</span>
              <span>Express</span>
              <span>APIs</span>
              <span>Databases</span>
            </div>
          </div>

          <div className="skill-card skills-reveal">
            <span className="skill-number">03</span>

            <h3>Tools</h3>

            <p>
              Tools I use to develop, manage and improve projects.
            </p>

            <div className="skill-list">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>npm</span>
            </div>
          </div>

          <div className="skill-card skills-reveal">
            <span className="skill-number">04</span>

            <h3>Other</h3>

            <p>
              Practical technologies and concepts used across projects.
            </p>

            <div className="skill-list">
              <span>UI Design</span>
              <span>Responsive Design</span>
              <span>Problem Solving</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;