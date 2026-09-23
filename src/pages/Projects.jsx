import { useEffect } from "react";
import "./Projects.css";

const projects = [
  {
    title: "ShoeLink",
    category: "Service Platform",
    description:
      "A platform connecting customers with reliable shoe menders and repair services.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85",
    technologies: ["React", "JavaScript", "CSS"],
  },
  {
    title: "FarmConnect",
    category: "Agriculture Platform",
    description:
      "A platform designed to connect farmers directly with customers looking for fresh products.",
    image:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=85",
    technologies: ["React", "Node.js", "API"],
  },
  {
    title: "SwiftDrop",
    category: "Delivery Platform",
    description:
      "A delivery platform designed to connect customers, businesses and delivery services.",
    image:
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1200&q=85",
    technologies: ["React", "Node.js", "Database"],
  },
  {
    title: "MenuGo",
    category: "Restaurant Platform",
    description:
      "A QR-based restaurant ordering system designed to make ordering faster and easier.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
    technologies: ["React", "JavaScript", "QR"],
  },
  {
    title: "Shopora",
    category: "E-Commerce",
    description:
      "An e-commerce platform designed for browsing products and managing online purchases.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
    technologies: ["React", "Node.js", "Database"],
  },
  {
    title: "LocalLink",
    category: "Business Platform",
    description:
      "A platform helping customers discover local businesses and connect with their services.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
    technologies: ["React", "API", "CSS"],
  },
  {
    title: "Eventra",
    category: "Event Platform",
    description:
      "A platform for discovering, organizing and managing events in one place.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85",
    technologies: ["React", "Node.js", "API"],
  },
  {
  title: "CampusHub",
  category: "Student Platform",
  description:
    "A digital platform designed to bring useful student resources and campus services together.",
  image:
    "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85",
  technologies: ["React", "JavaScript", "Database"],
},
  {
    title: "Fixora",
    category: "Service Platform",
    description:
      "A platform connecting customers with local professionals for everyday services and repairs.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=85",
    technologies: ["React", "Node.js", "API"],
  },
  {
    title: "Future Project",
    category: "Coming Soon",
    description:
      "A future project currently being explored and developed as part of my learning journey.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
    technologies: ["React", "JavaScript", "More Soon"],
  },
];

/* =========================
   REAL TECHNOLOGY LOGOS
========================= */

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

  Express:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",

  Vite:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",

  Git:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",

  GitHub:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",

  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",

  PostgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",

  MySQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
};

/* =========================
   FALLBACK ICONS
   For generic technologies
========================= */

const fallbackLogos = {
  API:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",

  Database:
    "https://cdn.simpleicons.org/databricks/ffffff",

  QR:
    "https://cdn.simpleicons.org/qrcode/ffffff",
};

function TechnologyLogo({ technology }) {
  const logo =
    technologyLogos[technology] ||
    fallbackLogos[technology];

  if (!logo) {
    return (
      <span className="project-tech-text">
        {technology}
      </span>
    );
  }

  return (
    <span
      className="project-tech-logo"
      title={technology}
    >
      <img
        src={logo}
        alt={technology}
      />
    </span>
  );
}

function Projects() {
  useEffect(() => {
    const elements =
      document.querySelectorAll(".projects-reveal");

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
        threshold: 0.12,
      }
    );

    elements.forEach((element) =>
      observer.observe(element)
    );

    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        {/* =========================
            HEADING
        ========================= */}

        <div className="projects-heading">
          <h2 className="page-heading">Projects</h2>
        </div>

        {/* =========================
            PROJECT GRID
        ========================= */}

        <div className="projects-grid">

          {projects.map((project, index) => (
            <article
              className={`project-card projects-reveal project-card-${index + 1}`}
              key={project.title}
            >

              {/* IMAGE */}

              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={`${project.title} project`}
                  className="project-image"
                />

                <div className="project-image-overlay"></div>

                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* CONTENT */}

              <div className="project-content">

                <span className="project-category">
                  {project.category}
                </span>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                {/* LIVE PROJECT ACTION — intentionally above technology logos */}

                <div className="project-links project-links-primary">
                  <span className="project-link project-link-disabled">
                    Visit Live
                    <span>↗</span>
                  </span>
                </div>

                {/* TECHNOLOGY LOGOS */}

                <div className="project-technologies">

                  {project.technologies.map(
                    (technology) => (
                      <TechnologyLogo
                        key={technology}
                        technology={technology}
                      />
                    )
                  )}

                </div>

              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;