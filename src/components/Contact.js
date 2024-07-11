import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css"; // Import CSS file for styling
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    to_name: "Thirupathi", // Set the recipient's name here
    message: "",
    user_email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9hb2y9i",
        "template_xpex00b",
        form.current,
        "SSL4Z9_k9CdSrRWrl"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          window.alert("Email sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          window.alert("Failed to send email. Please try again later.");
        }
      );

    // Reset form fields after submission
    setFormData({ from_name: "", message: "", user_email: "" });
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2 style={{ color: "#2d1146" }}>
            Let's Discuss <br />
            something <span style={{ color: "#c658a1" }}>cool</span> together
          </h2>
          <p style={{ marginTop: "60px" }}>I'm interested in ....</p>
          <div className="interest-buttons">
            <button className="interest-button">Ecommerce Website</button>
            <button className="interest-button">Web Applications</button>
            <button className="interest-button">Landing Page</button>
            <button className="interest-button">Portfolio</button>
            <button className="interest-button">Blog Website</button>
          </div>
        </div>
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="from_name">Name:</label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                placeholder="Your Name"
                value={formData.from_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="user_email">Email:</label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                placeholder="Your Email"
                value={formData.user_email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
          <div className="social-media-links">
            <a
              href="https://twitter.com/yourprofile"
              className="social-icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com/yourprofile"
              className="social-icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/thirupathirao-padidepu-40298b213"
              className="social-icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 thirupathipadidepu.com. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
