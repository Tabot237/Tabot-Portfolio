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
========================= */

const fallbackLogos = {
  API:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",

  Database:
    "https://cdn.simpleicons.org/databricks/ffffff",
};

/* =========================
   QR LOGO
   Inline SVG so it does not
   depend on an external URL.
========================= */

function QRLogo() {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="64" height="64" rx="8" fill="#ffffff" />

      {/* Top-left finder */}
      <rect x="7" y="7" width="18" height="18" fill="#111111" />
      <rect x="11" y="11" width="10" height="10" fill="#ffffff" />
      <rect x="14" y="14" width="4" height="4" fill="#111111" />

      {/* Top-right finder */}
      <rect x="39" y="7" width="18" height="18" fill="#111111" />
      <rect x="43" y="11" width="10" height="10" fill="#ffffff" />
      <rect x="46" y="14" width="4" height="4" fill="#111111" />

      {/* Bottom-left finder */}
      <rect x="7" y="39" width="18" height="18" fill="#111111" />
      <rect x="11" y="43" width="10" height="10" fill="#ffffff" />
      <rect x="14" y="46" width="4" height="4" fill="#111111" />

      {/* QR pattern */}
      <rect x="30" y="29" width="5" height="5" fill="#111111" />
      <rect x="38" y="29" width="5" height="5" fill="#111111" />
      <rect x="47" y="29" width="5" height="5" fill="#111111" />

      <rect x="28" y="38" width="5" height="5" fill="#111111" />
      <rect x="36" y="38" width="5" height="5" fill="#111111" />
      <rect x="45" y="38" width="5" height="5" fill="#111111" />

      <rect x="29" y="47" width="5" height="5" fill="#111111" />
      <rect x="38" y="48" width="5" height="5" fill="#111111" />
      <rect x="48" y="47" width="5" height="5" fill="#111111" />
    </svg>
  );
};

function TechnologyLogo({ technology }) {
  /* MenuGo QR logo */
  if (technology === "QR") {
    return (
      <span
        className="project-tech-logo"
        title="QR"
      >
        <QRLogo />
      </span>
    );
  }

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

        {/* HEADING */}

        <div className="projects-heading">
          <h2 className="page-heading">Projects</h2>
        </div>

        {/* PROJECT GRID */}

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

                {/* LIVE PROJECT ACTION */}

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