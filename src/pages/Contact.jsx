```jsx
import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  useEffect(() => {
    const elements = document.querySelectorAll(".contact-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus(
          data.message || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-panel">
          <div className="contact-left">
            <div className="contact-heading contact-reveal">
              <h2>
                <span className="contact-line-one">
                  Let's talk on your{" "}
                  <span className="great-project">great project</span>
                </span>
                <span className="contact-line-two">together</span>
              </h2>
            </div>

            <div className="contact-links">
              <a
                href="mailto:"
                className="contact-link-card contact-reveal"
              >
                <div className="contact-brand-icon email">
                  <FaEnvelope />
                </div>

                <div className="contact-link-copy">
                  <strong>Email</strong>
                  <small>Let's connect</small>
                </div>

                <span className="message-pill">
                  Message <b><FaEnvelope /></b>
                </span>
              </a>

              <a
                href="#contact"
                className="contact-link-card contact-reveal"
              >
                <div className="contact-brand-icon whatsapp">
                  <FaWhatsapp />
                </div>

                <div className="contact-link-copy">
                  <strong>WhatsApp</strong>
                  <small>Available for work</small>
                </div>

                <span className="message-pill">
                  Message <b className="wa"><FaWhatsapp /></b>
                </span>
              </a>
            </div>

            <div className="contact-socials contact-reveal">
              <a href="#contact" aria-label="GitHub">
                <FaGithub />
              </a>

              <a href="#contact" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <form
            className="contact-form contact-reveal"
            onSubmit={handleSubmit}
          >
            <input
              aria-label="Full name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
            />

            <input
              aria-label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />

            <textarea
              aria-label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="6"
              required
            />

            <button type="submit">
              {status === "Sending..." ? "Sending..." : "➤ Send Now"}
            </button>

            {status && (
              <p
                style={{
                  margin: "4px 0 0",
                  textAlign: "center",
                  color:
                    status === "Message sent successfully!"
                      ? "#12d96b"
                      : "#aaa",
                  fontSize: "13px",
                }}
              >
                {status}
              </p>
            )}
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
            <a href="#contact" aria-label="GitHub">
              <FaGithub />
            </a>

            <a href="#contact" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>

          <p className="footer-copy">
            Copyright © All right reserved – | 2025
          </p>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
```
