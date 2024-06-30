//Footer.js
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Footer.css';

export default function Footer() {
  return (
    <>
    <div id="footer" className="footer-background">
      <div className="container">
        <Row>
          <Col lg={3} >
            <div className="footer-section" data-aos="fade-up" data-aos-duration="2000">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="/" className="text-white">Home</a></li>
                <li><a href="/AboutMore" className="text-white">About Us</a></li>
                <li><a href="/Services" className="text-white">Services</a></li>
                <li><a href="/more-details" className="text-white">Become Provider</a></li>
                <li><a href="/Contact" className="text-white">Contact Us</a></li>
              </ul>
            </div>
          </Col>
          <Col lg={3} >
          <div className="footer-section" data-aos="fade-up" data-aos-duration="2000">
            <h3>Get App</h3>
            <ul>
              <li>
                <a href="/IOS" className="text-white">
                  <img src="/images/app-store.png" alt="Apple App Store" style={{ width: '25px', height: '25px', marginRight: '5px' }}/>
                  iOS
                </a>
              </li>
              <li>
                <a href="/Android" className="text-white">
                  <img src="/images/playstore.png" alt="Google Play Store" style={{ width: '25px', height: '25px', marginRight: '5px' }}/>
                  Android
                </a>
              </li>
            </ul>
          </div>
        </Col>
          <Col lg={2} >
            <div className="footer-section" data-aos="fade-up" data-aos-duration="2000">
              <h3>Social</h3>
              <ul>
                <li><a href="/Insta" className="text-white">Instagram</a></li>
                <li><a href="/FB" className="text-white">Facebook</a></li>
                <li><a href="/LI" className="text-white">Linkden</a></li>
                <li><a href="/Twitter" className="text-white">Twiiter</a></li>
              </ul>
            </div>
          </Col>
          <Col lg={2} >
            <div className="footer-section" data-aos="fade-up" data-aos-duration="2000">
              <h3>Resources</h3>
              <ul>
                <li><a href="/FAQ" className="text-white">FAQ</a></li>
                <li><a href="/Blog" className="text-white">Blog</a></li>
              </ul>
            </div>
          </Col>

          <Col lg={2} >
            <div className="footer-section" data-aos="fade-up" data-aos-duration="2000">
              <h3>Legal</h3>
              <ul>
                <li><a href="/Terms" className="text-white">Terms of Service</a></li>
                <li><a href="/Privacy" className="text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
      
      <div class="row justify-content-center" >
        <div class="col-lg-1 mb-1 text-center" data-aos="fade-left" data-aos-duration="2000">
            <a href="https://www.instagram.com/your_instagram_username/" target="_blank" className="text-white" rel="noreferrer">
                <i class="fab fa-instagram fa-3x"></i>
            </a>
        </div>
        <div class="col-lg-1 mb-1 text-center" data-aos="fade-up" data-aos-duration="2000">
            <a href="https://www.facebook.com/your_facebook_username/" target="_blank" className="text-white" rel="noreferrer">
                <i class="fab fa-facebook fa-3x"></i>
            </a>
        </div>
        <div class="col-lg-1 mb-1 text-center" data-aos="fade-right" data-aos-duration="2000">
            <a href="https://www.linkedin.com/in/your_linkedin_username/" target="_blank" className="text-white" rel="noreferrer">
                <i class="fab fa-linkedin fa-3x"></i>
            </a>
        </div>
      </div>
      <div className="divider">
        <footer className="footer">
          <br/>
          <p className="text-white">&copy; 2023 AuraUserve — All rights reserved</p>
        </footer>
      </div>

     </div> 
    </>
  );
}