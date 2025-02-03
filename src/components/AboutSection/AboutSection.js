import React from 'react';
import "./AboutSection.css";
const AboutSection = () => {
  return (
    <section id="about" className="container py-5">
      <div className="bgcont">
        <h2 className="section-title" data-aos="fade-up" data-aos-duration="1500">
          Unlock the Power of Blockchain
        </h2>
        <p className="section-content text-center" data-aos="fade-up" data-aos-duration="1500">
          Imagine a world where you have full control over your digital assets and data—this is the power of blockchain.
          Join us as we simplify blockchain technology for beginners and make it easy for anyone to tap into the future of
          finance, smart contracts, and decentralized applications.
        </p>
      </div>
      <h3 className="text-center mt-5">Getting Started with Ease</h3>
      <p className="section-content text-center" data-aos="fade-up" data-aos-duration="1500">
        No need for deep technical knowledge—just follow these simple steps to start your blockchain journey today!
      </p>
      <div className="row text-center mt-4">
        <div className="col-md-12" data-aos="fade-up" data-aos-duration="1500">
          <div className="feature-card">
            <div className="icon-container mb-3">
              <i className="fas fa-wallet"></i>
            </div>
            <h4>Step 1: Link Your Wallet</h4>
            <p>Connecting your wallet to our platform is a breeze! With just a few clicks, you’ll securely access decentralized services, no complex setup required.</p>
          </div>
        </div>
       
      <div className="col-md-12" data-aos="fade-up" data-aos-duration="2000">
        <div className="feature-card">
          <div className="icon-container mb-3">
            <i className="fas fa-cogs"></i>
          </div>
          <h4>Step 2: Discover Blockchain</h4>
          <p>Once your wallet is connected, it’s time to explore! Whether you’re interested in smart contracts or decentralized finance, you’ll find it all at your fingertips.</p>
        </div>
      </div>

  
      <div className="col-md-12" data-aos="fade-up" data-aos-duration="2500">
        <div className="feature-card">
          <div className="icon-container mb-3">
            <i className="fas fa-rocket"></i>
          </div>
          <h4>Step 3: Make Your Move</h4>
          <p>Transact, invest, and interact with ease. Everything is fast, secure, and user-friendly.</p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutSection;
