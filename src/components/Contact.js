import React from "react";

export default function ContactUS() {
  const contactSectionStyle = {
    backgroundColor: '#E8E8E8',
  };

  return (
    <div id="contact">
      <section style={contactSectionStyle} className="py-5">
        <div className="container">
          <div className="row">
            {/* Section Title */}
            <div className="col-lg-8 mx-auto text-center" data-aos="fade-right" data-aos-duration="2000">
              <h1 className="section-heading text-black">Contact Us</h1>
              <hr className="my-4" />
              <p className="text-muted mb-5">We would love to hear from you. Please get in touch with us.</p>
            </div>
          </div>
          <div className="row">
            {/* Phone Info */}
            <div className="col-lg-4 col-md-6 ml-auto text-center mb-4" data-aos="fade-right" data-aos-duration="2000">
              <i className="fas fa-phone fa-2x mb-3 text-black"></i>
              <p className="text-muted">+92-336-7890</p>
            </div>
            {/* Email Info */}
            <div className="col-lg-4 col-md-6 text-center mb-4" data-aos="fade-right" data-aos-duration="2000">
              <i className="fas fa-envelope fa-2x mb-3 text-black"></i>
              <p>
                <a href="mailto:info@aurauserve.com" className="text-dark">info@aurauserve.com</a>
              </p>
            </div>
            {/* Location Info */}
            <div className="col-lg-4 col-md-6 mr-auto text-center mb-4" data-aos="fade-right" data-aos-duration="2000">
              <i className="fas fa-map-marker-alt fa-2x mb-3 text-black"></i>
              <p className="text-muted">Lahore, Pakistan</p>
            </div>
          </div>
          <div className="row">
            {/* Contact Form */}
            <div className="col-lg-8 mx-auto text-center" data-aos="fade-right" data-aos-duration="2000">
              <form>
                <div className="form-row">
                  <div className="col-md-12 mb-3">
                    <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-12 mb-3">
                    <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="form-group">
                  <textarea className="form-control" id="message" rows="4" placeholder="Your Message" required></textarea>
                </div>
                <br />
                <button className="btn btn-dark" type="submit">Send Message</button>
              </form>
            </div>
          </div>
          <div className="row mt-4">
            {/* Contact Person Info */}
            <div className="col-lg-8 mx-auto text-center">
              <p className="text-muted">
                Contact Person: AuraUserve | Email: 
                <a href="mailto:help@aurauserve.com" className="text-black"> help@aurauserve.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
