import { useEffect, useState } from "react";
import logo from "../assets/logo.jpeg";
import "./Home.css";

import profileImage from "../assets/profile.png";

function Home({ theme = "dark", onThemeChange = () => {} }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".home-reveal");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
          else entry.target.classList.remove("show");
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => revealObserver.observe(element));

    const sectionIds = ["about", "services", "skills", "projects", "experience", "contact"];
    const setActiveSection = (id) => {
      // The active glow belongs only to the matching navbar item.
      // Page titles keep their own permanent swipe animation.
      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.classList.toggle(
          "active-section",
          link.getAttribute("href") === `#${id}`
        );
      });
    };

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-28% 0px -55% 0px", threshold: [0, 0.01, 0.2] }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) sectionObserver.observe(section);
    });

    const handleNavClick = (event) => {
      const link = event.currentTarget;
      const id = link.getAttribute("href")?.slice(1);
      if (id) setActiveSection(id);
    };

    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach((link) => link.addEventListener("click", handleNavClick));

    const initialId = window.location.hash.slice(1);
    if (sectionIds.includes(initialId)) setActiveSection(initialId);

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
      navLinks.forEach((link) => link.removeEventListener("click", handleNavClick));
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="home" id="home">
      <nav className="navbar home-reveal">
        <div className="nav-brand">
          <img src={logo} alt="Tabot Logo" className="nav-logo" />
          <div className="brand-text">
            <h2>TABOT</h2>
            <span>FULL-STACK DEVELOPER</span>
          </div>
        </div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={closeMenu}><h3>About</h3></a>
          <a href="#skills" onClick={closeMenu}><h3>Skills</h3></a>
          <a href="#projects" onClick={closeMenu}><h3>Projects</h3></a>
          <a href="#experience" onClick={closeMenu}><h3>Experience</h3></a>
          <a href="#services" onClick={closeMenu}><h3>Services</h3></a>
          <a href="#contact" onClick={closeMenu}><h3>Contact</h3></a>
        </div>

        <div className="theme-control">
          <button
            type="button"
            className={`theme-toggle-button ${theme}`}
            aria-label="Choose light or dark mode"
            aria-expanded="false"
            onClick={(event) => {
              const control = event.currentTarget.parentElement;
              control.classList.toggle("open");
            }}
          >
            <span className="theme-toggle-icon" aria-hidden="true">
              {theme === "dark" ? "☾" : "☀"}
            </span>
            <span className="theme-toggle-label">
              {theme === "dark" ? "Dark" : "Light"}
            </span>
          </button>

          <div className="theme-menu">
            <span>Choose appearance</span>
            <button
              type="button"
              className={theme === "dark" ? "selected" : ""}
              onClick={(e) => {
                onThemeChange("dark");
                e.currentTarget.closest(".theme-control")?.classList.remove("open");
              }}
            >
              <b>☾</b> Dark mode
            </button>
            <button
              type="button"
              className={theme === "light" ? "selected" : ""}
              onClick={(e) => {
                onThemeChange("light");
                e.currentTarget.closest(".theme-control")?.classList.remove("open");
              }}
            >
              <b>☀</b> Light mode
            </button>
          </div>
        </div>

        <a href="#contact" className="hire-button" onClick={closeMenu}>
          Hire Me <span>↗</span>
        </a>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-orbit-label" aria-hidden="true">
            <svg className="orbit-pointer" viewBox="0 0 28 32" aria-hidden="true">
              <path d="M2 2 L25 16 L14 17 L10 29 Z" />
            </svg>
            <span className="orbit-name">TABOT</span>
          </div>

          <h1 className="home-reveal">
            <span className="hero-line hero-line-1">Front-End Development,</span>
            <span className="hero-line hero-line-2">Responsive Design,</span>
            <span className="hero-line hero-line-3">Web Animations.</span>
          </h1>
        </div>

        <div className="hero-image home-reveal">
          <div className="hero-rings" aria-hidden="true">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
          <img src={profileImage} alt="Tabot" className="profile-image" />
        </div>

        <div className="scroll-indicator home-reveal">
          <span>SCROLL DOWN</span>
          <div className="scroll-line"></div>
          <div className="scroll-dot"></div>
        </div>
      </section>
    </main>
  );
}

export default Home;
