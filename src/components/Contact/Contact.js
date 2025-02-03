import React from "react";
import "./Contact.css"; // You can style this component further if needed

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2
          className="section-title"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Contact Us
        </h2>
        <p
          className="section-content text-center"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Have any questions? Reach out to us through our contact form or social media platforms!
        </p>
        <div className="row">
          <div className="col-md-6">
            <form action="#" method="post">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phno" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="phno"
                  required
                />
              </div>
              <button type="submit" className="btn btn-secondary">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-6 pt-5">
            <p>
              <a href="#" className="scrolling-text">
                <i className="fab fa-discord"></i> Join our community on Discord
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
