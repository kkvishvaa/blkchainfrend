import React from 'react';
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <video autoPlay muted loop>
        <source src="4389377-uhd_3840_2024_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content" data-aos="fade-up" data-aos-duration="1500">
        <h1>Welcome to the Blockchain Revolution</h1>
        <p>Decentralizing the future with secure, transparent, and efficient technology.</p>
      </div>
    </section>
  );
};

export default HeroSection;
