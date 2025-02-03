import React from "react";
import "./Footer.css"; // Optional: Add custom CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h4>Get in Touch</h4>
        <p>Email: support@blockchain.com | Phone: 123-456-7890</p>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
            <i className="fab fa-github"></i>
          </a>
        </div>

        <p>&copy; 2024 Blockchain Tech. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
