import React from 'react';
import './About.css';
import image4 from "./Images/image-4.jpeg";
const values = [
  {
    title: "Trust",
    icon: (
      <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7v6c0 5.55 3.84 10.74 10 12 6.16-1.26 10-6.45 10-12V7l-10-5zm0 2.18L19.6 7 12 10.82 4.4 7 12 4.18zM4 9.4l7.6 3.82v6.9C7.95 18.14 4 13.8 4 9.4zm9.6 10.72v-6.9L21 9.4c0 4.4-3.95 8.74-7.4 10.72z" />
      </svg>
    ),
    description: "We build long-term relationships based on honesty and reliability.",
  },

  {
    title: "Quality",
    icon: (
      <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0L9.09 6.26 2 7.27l5 4.87L5.82 20 12 16.91 18.18 20 17 12.14l5-4.87-7.09-1.01z" />
      </svg>
    ),
    description: "We guarantee top-quality products that exceed customer expectations.",
  },
  {
    title: "Commitment",
    icon: (
      <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 4.44l1.41 1.41L7.83 11.44H20v2H7.83l5.58 5.59L12 20.44l-8-8z" />
      </svg>
    ),
    description: "We are dedicated to delivering excellence in everything we do.",
  },
  {
    title: "Customer Satisfaction",
    icon: (
      <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z" />
      </svg>
    ),
    description: "Our priority is to make sure every customer is happy and supported.",
  },
];

function About () {
  return (
    <div className="about-container">
      <header className="about-hero">
        <h1>About Our Store</h1>
        <p>Your trusted destination for premium online shopping.</p>
      </header>

      <section className="about-section continer">
        <div className="about-image">
          <img src={image4} alt="About Us" />
        </div>
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            We aim to deliver an outstanding e-commerce experience by offering top-quality products, affordable prices, and excellent customer service.
          </p>
        </div>
      </section>

      <section className="about-values">
        <h2>Core Values</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div className="value-card" key={index}>
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="about-footer">
        &copy; {new Date().getFullYear()} Mixory by Suhad Al Othman. All rights reserved.
      </footer>
    </div>
  );
};

export default About;