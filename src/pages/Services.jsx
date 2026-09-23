import { useEffect } from "react";
import "./Services.css";

const services = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive and modern interfaces with clean structure, smooth interactions, and a strong focus on user experience.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    className: "service-gold",
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Developing reliable backend functionality, APIs, and server-side systems that support practical and scalable applications.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    className: "service-green",
  },
  {
    number: "03",
    title: "Full-Stack Development",
    description:
      "Connecting frontend and backend technologies to turn ideas into complete, functional web applications.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    className: "service-purple",
  },
  {
    number: "04",
    title: "UI & Web Design",
    description:
      "Creating clean visual experiences with thoughtful layouts, typography, spacing, and interactive elements.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    className: "service-blue",
  },
  {
    number: "05",
    title: "API Integration",
    description:
      "Connecting applications with APIs and external services to provide useful data and real-world functionality.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
    className: "service-orange",
  },
  {
    number: "06",
    title: "System Solutions",
    description:
      "Working with technology solutions such as access control and time attendance systems to solve practical business needs.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    className: "service-cyan",
  },
];

function Services() {
  useEffect(() => {
    const elements = document.querySelectorAll(".services-reveal");

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

    elements.forEach((element) => observer.observe(element));

    const cards = document.querySelectorAll(".service-card");

    cards.forEach((card) => {
      const handleMouseMove = (event) => {
        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((x - centerX) / centerX) * 4;
        const rotateX = ((centerY - y) / centerY) * 3;

        card.style.setProperty("--rotate-x", `${rotateX}deg`);
        card.style.setProperty("--rotate-y", `${rotateY}deg`);
      };

      const handleMouseLeave = () => {
        card.style.setProperty("--rotate-x", "0deg");
        card.style.setProperty("--rotate-y", "0deg");
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      card._handleMouseMove = handleMouseMove;
      card._handleMouseLeave = handleMouseLeave;
    });

    return () => {
      observer.disconnect();

      cards.forEach((card) => {
        card.removeEventListener(
          "mousemove",
          card._handleMouseMove
        );

        card.removeEventListener(
          "mouseleave",
          card._handleMouseLeave
        );
      });
    };
  }, []);

  return (
    <section className="services" id="services">
      <div className="services-container">

        <div className="services-heading">
          <h2 className="page-heading">Services</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              className={`service-card ${service.className} services-reveal`}
              key={service.number}
              style={{
                "--delay": `${index * 0.08}s`,
              }}
            >
              <div className="service-glow"></div>

              <div className="service-top">
                <span className="service-number">
                  {service.number}
                </span>

                <div className="service-icon">
                  <img
                    src={service.icon}
                    alt=""
                  />
                </div>
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <div className="service-line"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;