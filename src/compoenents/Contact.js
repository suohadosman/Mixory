import React from 'react';
import './Contact.css';

function Contact () {
  return (
    <div className="contact-container">
      <header className="contact-hero">
        <h1>Contact Us</h1>
        <p>We're here to help! Reach out with any questions or concerns.</p>
      </header>

      <section className="contact-form-section">
        <div className="form-container">
          <h2>Send Us a Message</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="support-info">
          <h2>Need Help?</h2>
          <p>If you're experiencing an issue or need assistance, please email us directly or use the form.</p>
          <ul>
            <li>Email: <a href="mailto:support@example.com">support@example.com</a></li>
            <li>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></li>
            <li>Working Hours: Mon - Fri, 9 AM - 6 PM</li>
          </ul>

          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
            <a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a>
            <a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a>
            <a href="#"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a>
          </div>
        </div>
      </section>

      <footer className="contact-footer">
      &copy; {new Date().getFullYear()} Mixory by Suhad Al Othman. All rights reserved.
      </footer>
    </div>
  );
};

export default Contact;