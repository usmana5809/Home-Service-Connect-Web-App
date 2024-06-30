//About.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div id="about">
    <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h1><b>About AuraUserve</b></h1><br/>
            <p>In the world of AuraUserve, we've crafted a space where excellence in services and heartfelt care come together to reshape 
              how you engage with home and clinical services. Our inception was marked by a vision to transform the landscape of accessing 
              essential care, recognizing the significance of time and prioritizing the paramount importance of well-being. 
              At AuraUserve, we're on a mission to redefine your journey through a fusion of top-notch services and genuine compassion.
              Our commitment is to revolutionize the very essence of how individuals connect with and receive essential care, 
              placing your needs at the forefront of our endeavors. The journey we embark on is fueled by a dedication to not only meet 
              but exceed your expectations in every aspect, ensuring that every moment spent with AuraUserve contributes to an enhanced and 
              enriched quality of life. Welcome to a transformative experience where your well-being is not just a consideration but our primary focus.</p>
          </div>
          <div className='col-md-5'>z
              <img className='rounded' src="/images/about.png" alt="Main" height="400" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
          <Link to="/AboutMore" className='btn btn-dark'>More About Us</Link><br/><br/><br/>
          </div>
        </div>
    </div>
    </div>
  );
}

export default About;