import { useEffect } from "react";
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  useEffect(() => {
    const elements = document.querySelectorAll(".contact-reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-panel">
          <div className="contact-left">
            <div className="contact-heading contact-reveal">
              <h2>
                <span className="contact-line-one">
                  Let's talk on your <span className="great-project">great project</span>
                </span>
                <span className="contact-line-two">together</span>
              </h2>
            </div>

            <div className="contact-links">
              <a href="mailto:" className="contact-link-card contact-reveal">
                <div className="contact-brand-icon email"><FaEnvelope /></div>
                <div className="contact-link-copy"><strong>Email</strong><small>Let's connect</small></div>
                <span className="message-pill">Message <b><FaEnvelope /></b></span>
              </a>

              <a href="#contact" className="contact-link-card contact-reveal">
                <div className="contact-brand-icon whatsapp"><FaWhatsapp /></div>
                <div className="contact-link-copy"><strong>WhatsApp</strong><small>Available for work</small></div>
                <span className="message-pill">Message <b className="wa"><FaWhatsapp /></b></span>
              </a>
            </div>

            <div className="contact-socials contact-reveal">
              <a href="#contact" aria-label="GitHub"><FaGithub /></a>
              <a href="#contact" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </div>

          <form className="contact-form contact-reveal">
            <input aria-label="Full name" type="text" placeholder="Your full name" />
            <input aria-label="Email" type="email" placeholder="Your Email" />
            <textarea aria-label="Message" placeholder="Your Message" rows="6"></textarea>
            <button type="button">➤ Send Now</button>
          </form>
        </div>

        <footer className="portfolio-footer contact-reveal">
          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#skills">Skill</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="footer-socials">
            <a href="#contact" aria-label="GitHub"><FaGithub /></a>
            <a href="#contact" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>

          <p className="footer-copy">Copyright © All right reserved – | 2025</p>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
