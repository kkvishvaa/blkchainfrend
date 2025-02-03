import React from "react";
import "./WhyChooseUs.css"; // You can style this component further if needed

const WhyChooseUs = () => {
  return (
    <section id="features" className="py-5">
      <div className="container">
        <h2
          className="section-title"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Why Us? Here’s Why!
        </h2>
        <div className="row">
          <div
            className="col-md-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="feature-card d-flex align-items-start">
              <i className="fas fa-cubes feature-icon me-3"></i>
              <div>
                <h4>Blockchain Made Simple</h4>
                <p>
                  Our easy-to-navigate platform explains even the toughest
                  concepts in simple terms, so you can get started without
                  feeling overwhelmed.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-12"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="feature-card d-flex align-items-start">
              <i className="fas fa-shield-alt feature-icon me-3"></i>
              <div>
                <h4>Your Transactions, Safeguarded</h4>
                <p>
                  Every transaction is fully encrypted and protected by
                  industry-leading security standards.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-12"
            data-aos="fade-up"
            data-aos-duration="2500"
          >
            <div className="feature-card d-flex align-items-start">
              <i className="fas fa-book-open feature-icon me-3"></i>
              <div>
                <h4>Comprehensive Resources</h4>
                <p>
                  We provide in-depth tutorials, guides, and articles to help
                  you understand every aspect of blockchain technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
