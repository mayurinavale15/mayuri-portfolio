import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

import {
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt
} from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "service_top8v7z",
        "template_v4zzlzk",
        form.current,
        {
          publicKey: "spAa61frUY8BPp9CE",
        }
      );

      setStatus("Message sent successfully!");
      form.current.reset();
    }  catch (error) {
  console.error("EmailJS error:", error);
  alert(error.text || error.message || "Email sending failed");
  setStatus("Message failed. Please try again.");
} finally {
  setSending(false);
}
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-heading">
        <p>GET IN TOUCH</p>
        <h2>Let's Connect</h2>
        <span>
          I am open to discussing job opportunities, projects and
          professional collaborations.
        </span>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <p className="contact-label">CONTACT ME</p>
          <h3>Let's work together</h3>

          <p className="contact-description">
            If you have a job opportunity or would like to discuss
            a project, feel free to get in touch with me.
          </p>

          <div className="contact-item">
            <div className="contact-icon">@</div>
            <div>
              <a href="mailto:mayurinavale15@gmail.com">
                mayurinavale15@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p>Pune, Maharashtra</p>
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/mayuri-navale-148927314/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/mayurinavale15"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="contact-form">
          <h3>Send Me a Message</h3>

          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="user_name">Your Name</label>
              <input
                id="user_name"
                type="text"
                name="user_name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="user_email">Your Email</label>
              <input
                id="user_email"
                type="email"
                name="user_email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message..."
                required
              />
            </div>

            <button type="submit" disabled={sending}>
              {sending ? "Sending..." : "Send Message ↗"}
            </button>

            {status && <p role="status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
