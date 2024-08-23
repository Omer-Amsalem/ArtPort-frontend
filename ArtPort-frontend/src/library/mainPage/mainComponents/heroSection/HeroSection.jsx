import React from 'react';
import './HeroSection.css'; 

const HeroSection = ({ title, subtitle, buttonText }) => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button className="explore-btn">{buttonText}</button>
      </div>
    </section>
  );
};

export default HeroSection;
