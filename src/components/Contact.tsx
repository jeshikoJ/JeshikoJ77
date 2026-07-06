import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Let's <span>Connect</span></h3>
        <p className="contact-tagline">Open to full-stack, DevOps, and creative engineering opportunities.</p>
        <div className="contact-divider"></div>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Direct Contact</h4>
            <p>
              <a href="mailto:chandranjeshiko@gmail.com" data-cursor="disable">
                chandranjeshiko@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+917395881571" data-cursor="disable">
                +91 73958 81571
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social Profiles</h4>
            <a
              href="https://github.com/jeshikoJ"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/jeshiko-j"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed & Built <br />by <span>Jeshiko J</span>
            </h2>
            <h5>
              <MdCopyright /> 2026 — All rights reserved
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
