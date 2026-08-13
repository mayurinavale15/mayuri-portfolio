import "./Contact.css";

import {
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      {/* Contact Heading */}
      <div className="contact-heading">
        <p>GET IN TOUCH</p>

        <h2>Let's Connect</h2>

        <span>
          I am open to discussing job opportunities, projects and
          professional collaborations.
        </span>
      </div>


      {/* Contact Container */}
      <div className="contact-container">

        {/* Contact Information */}
        <div className="contact-info">

          <p className="contact-label">
            CONTACT ME
          </p>

          <h3>Let's work together</h3>

          <p className="contact-description">
            If you have a job opportunity or would like to discuss
            a project, feel free to get in touch with me.
          </p>


          {/* Email */}
          <div className="contact-item">

            <div className="contact-icon">
              @
            </div>

            <div>
              <a href="mailto:mayurinavale15@gmail.com">
                mayurinavale15@gmail.com
              </a>
            </div>

          </div>


          {/* Location */}
          <div className="contact-item">

            <div className="contact-icon">
                <FaMapMarkerAlt />
            </div>

            <div>
              <p>Pune, Maharashtra</p>
            </div>

          </div>


          {/* Social Icons */}
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


        {/* Contact Form */}
        <div className="contact-form">

          <h3>Send Me a Message</h3>

          <form>

            <div className="form-group">
              <label>Your Name</label>

              <input
                type="text"
                placeholder="Enter your name"
              />
            </div>


            <div className="form-group">
              <label>Your Email</label>

              <input
                type="email"
                placeholder="Enter your email"
              />
            </div>


            <div className="form-group">
              <label>Your Message</label>

              <textarea
                rows="6"
                placeholder="Write your message..."
              ></textarea>
            </div>


            <button type="submit">
              Send Message ↗
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;

