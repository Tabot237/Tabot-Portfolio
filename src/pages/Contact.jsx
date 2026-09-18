import { useEffect } from "react";
import "./Contact.css";

function Contact() {
  useEffect(() => {
    const elements = document.querySelectorAll(".contact-reveal");

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

    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <div className="contact-heading contact-reveal">
            <h2 className="page-heading">Contact</h2>
          <h2>
            Let's build
            <span> something useful.</span>
          </h2>

          <p>
            Have an idea, project, or opportunity? Let’s connect
            and turn it into something practical.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-info">

            <div className="contact-card contact-gold contact-reveal">
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 4h16v16H4z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m4 6 8 6 8-6"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <span>EMAIL</span>
                <strong>Let's connect</strong>
              </div>
            </div>

            <div className="contact-card contact-green contact-reveal">
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 21s7-6.1 7-12A7 7 0 0 0 5 9c0 5.9 7 12 7 12Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <circle
                    cx="12"
                    cy="9"
                    r="2.2"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                </svg>
              </div>

              <div>
                <span>LOCATION</span>
                <strong>Cameroon</strong>
              </div>
            </div>

            <div className="contact-card contact-purple contact-reveal">
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M8 9v8M8 5v.1M12 17v-5a3 3 0 0 1 6 0v5M12 17v-5a3 3 0 0 0-6 0"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                </svg>
              </div>

              <div>
                <span>NETWORK</span>
                <strong>LinkedIn</strong>
              </div>
            </div>

          </div>

          <form className="contact-form contact-reveal">

            <div className="contact-input-row">
              <div className="contact-field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email"
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="6"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button type="button" className="contact-button">
              Send Message
              <span>↗</span>
            </button>

          </form>

        </div>

        <div className="contact-bottom contact-reveal">
          <span>© 2026 Tabot. All rights reserved.</span>
          <span>Full-Stack Developer</span>
        </div>

      </div>
    </section>
  );
}

export default Contact;