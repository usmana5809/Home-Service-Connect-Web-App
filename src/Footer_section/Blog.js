import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Blog.css';
import SubNavbar from '../components/SubNavbar';

import Footer from '../components/Footer';


function Blog() {
  return (
    <>
    <SubNavbar/>
      <div id="blog">
        <div className="container">
          <br /><br /><br /><br />
          <h1 className='text-center'><b>Blog</b></h1>
          <div className="row">
        
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card">
                <img src="/images/beautty.png" className="card-img-top" alt="Beauty Salon" height={"100px"}/>
                <div className="card-body">
                  <h5 className="card-title">The Art of Beauty: Salon Services at Your Doorstep</h5>
                  <p className="card-text">
                    Discover how our beauty salon services redefine convenience, offering a range of treatments and professional expertise right in your home.
                  </p>
                  <Link to="/blog/beauty-salon" className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card">
                <img src="/images/repairing.png" className="card-img-top" alt="Maintenance" />
                <div className="card-body">
                  <h5 className="card-title">Keeping Your Space Pristine: The Power of Maintenance</h5>
                  <p className="card-text">
                    Explore how our maintenance services offer a smarter and more efficient way to upkeep your living or working space, ensuring it's always at its best.
                  </p>
                  <Link to="/blog/maintenance" className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card">
                <img src="/images/home shift.png" className="card-img-top" alt="Shifting" />
                <div className="card-body">
                  <h5 className="card-title">Seamless Relocation: Simplifying the Shifting Process</h5>
                  <p className="card-text">
                    Discover how AuraUserve eases the burden of relocation, ensuring a smooth and hassle-free transition for your move.
                  </p>
                  <Link to="/blog/shifting" className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card">
                <img src="/images/pest cont.png" className="card-img-top" alt="Pest Control" />
                <div className="card-body">
                <h5 className="card-title">Keeping Pests at Bay: Professional Pest Control Services</h5>
                <p className="card-text">
                    Learn about our effective and professional pest control services designed to safeguard your home or business from unwanted pests.
                </p>
                <Link to="/blog/pest-control" className="btn btn-primary">Read More</Link>
                </div>
            </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card">
                <img src="/images/clean.png" className="card-img-top" alt="Cleaning" />
                <div className="card-body">
                <h5 className="card-title">Sparkling Clean: Comprehensive Cleaning Solutions</h5>
                <p className="card-text">
                    Explore our range of cleaning services tailored to address various cleaning needs, ensuring a pristine environment for your home or business.
                </p>
                <Link to="/blog/cleaning" className="btn btn-primary">Read More</Link>
                </div>
            </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card">
                <img src="/images/renovation.png" className="card-img-top" alt="Renovation" />
                <div className="card-body">
                <h5 className="card-title">Revamping Spaces: Transformative Renovation Services</h5>
                <p className="card-text">
                    Discover how our comprehensive renovation services breathe new life into spaces, preserving functionality while enhancing aesthetics.
                </p>
                <Link to="/blog/renovation" className="btn btn-primary">Read More</Link>
                </div>
            </div>
            </div>

        
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card">
                <img src="/images/catering.png" className="card-img-top" alt="Catering Solution" />
                <div className="card-body">
                <h5 className="card-title">Culinary Delights: Complete Catering Solutions</h5>
                <p className="card-text">
                    Explore our catering services, offering complete and professionally prepared food solutions for your events or parties.
                </p>
                <Link to="/blog/catering" className="btn btn-primary">Read More</Link>
                </div>
            </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card">
                <img src="/images/car.png" className="card-img-top" alt="Washing" />
                <div className="card-body">
                <h5 className="card-title">Spotless Cleanliness: Washing and Auto Detailing Services</h5>
                <p className="card-text">
                    Discover our complete washing, cleaning, auto detailing, and dry cleaning services brought right to your doorstep.
                </p>
                <Link to="/blog/washing" className="btn btn-primary">Read More</Link>
                </div>
            </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card">
                <img src="/images/doctor.png" className="card-img-top" alt="Clinical" />
                <div className="card-body">
                <h5 className="card-title">Healthcare Access: Clinical Services At Your Doorstep</h5>
                <p className="card-text">
                    Explore our healthcare services offering clinical assistance and support delivered conveniently to your location.
                </p>
                <Link to="/blog/clinical" className="btn btn-primary">Read More</Link>
                </div>
            </div>
            </div>


            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card">
                <img src="/images/solar.png" className="card-img-top" alt="Solar Panel" />
                <div className="card-body">
                <h5 className="card-title">Sustainable Energy: Harnessing Solar Power</h5>
                <p className="card-text">
                    Explore our solar panel services designed to power your space with clean, renewable energy solutions.
                </p>
                <Link to="/blog/solar-panel" className="btn btn-primary">Read More</Link>
                </div>
            </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card">
                <img src="/images/garden.png" className="card-img-top" alt="Gardening" />
                <div className="card-body">
                <h5 className="card-title">Green Escapes: Transformative Gardening Services</h5>
                <p className="card-text">
                    Discover our gardening services, where skilled horticulturists transform your garden into a lush oasis.
                </p>
                <Link to="/blog/gardening" className="btn btn-primary">Read More</Link>
                </div>
            </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card">
                <img src="/images/security.png" className="card-img-top" alt="Home Security" />
                <div className="card-body">
                <h5 className="card-title">Securing Your Haven: Advanced Home Security Services</h5>
                <p className="card-text">
                    Explore our security services equipped with advanced technology and vigilant monitoring, safeguarding your home 24/7.
                </p>
                <Link to="/blog/home-security" className="btn btn-primary">Read More</Link>
                </div>
            </div>
            </div>


          </div>
        </div>
      </div>
<Footer/>
    </>
  );
}

export default Blog;
