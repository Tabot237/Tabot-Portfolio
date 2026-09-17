import logo from "../assets/logo.jpeg";
import "./Home.css";
import {
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

import profileImage from "../assets/profile.png";

function Home() {
  return (
    <main className="home">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-brand">
          <img
  src={logo}
  alt="Tabot Logo"
  className="nav-logo"
/>

          <div className="brand-text">
            <h2>TABOT</h2>
            <span>FULL-STACK DEVELOPER</span>
          </div>
        </div>

        <div className="nav-links">
          <a href="#home" className="active">
           <h3>Home</h3> 
          </a>

          <a href="#about">
            <h3>About</h3>
          </a>

          <a href="#skills">
           <h3>Skills</h3>
          </a>

          <a href="#projects">
            <h3>Projects</h3>
          </a>

          <a href="#experience">
            <h3>Experience</h3>
          </a>

          <a href="#contact">
            <h3>Contact</h3>
          </a>
        </div>

        <a href="#contact" className="hire-button">
          Hire Me
          <span>↗</span>
        </a>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">

          <div className="hero-intro">
            <span>
             HELLO, I'M TABOT
            </span>
            <div className="intro-line"></div>
          </div>

          <h1>
            Full-Stack
            <br />
            <span>Developer.</span>
          </h1>

          <p className="hero-description">
           Full-Stack Developer I build modern, practical web applications with clean design,
            useful functionality, and a focus on creating great user
            experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Work
              
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="social-area">
            <div className="social-icons">

              <a
                href="#contact"
                aria-label="WhatsApp"
                className="social-icon"
              >
                <FaWhatsapp />
              </a>

              <a
                href="#contact"
                aria-label="Gmail"
                className="social-icon"
              >
                <SiGmail />
              </a>

              <a
                href="#contact"
                aria-label="LinkedIn"
                className="social-icon"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#contact"
                aria-label="X"
                className="social-icon"
              >
                <FaXTwitter />
              </a>

            </div>

            <div className="social-divider"></div>

            <span className="social-tagline">
              BUILD / SOLVE / IMPROVE
            </span>
          </div>
        </div>

        {/* PROFILE IMAGE AREA */}
        <div className="hero-image">

          {/* RINGS — BEHIND PHOTO */}
          <div className="ring ring-one"></div>
          <div className="ring ring-two"></div>

          {/* PHOTO */}
          <img
            src={profileImage}
            alt="Tabot"
            className="profile-image"
          />

        </div>

        {/* RIGHT SIDE SCROLL INDICATOR */}
        <div className="scroll-indicator">
          <span>SCROLL DOWN</span>
          <div className="scroll-line"></div>
          <div className="scroll-dot"></div>
        </div>
      </section>
    </main>
  );
}

export default Home;