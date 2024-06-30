import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import SubNavbar from './SubNavbar';

const AboutUs = () => {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
<>
<SubNavbar/>
<br/>
<br/>
<br/>
<br/>
<div className="about-us-container" >
      <section className="about-us">
      <Link to="/AboutMore" className='Link'>

      <div className="container" data-aos="fade-right" data-aos-duration="2000">
          <div className="row justify-content-center">
            <div className="col-md-7">
            <h1><b>Welcome to AuraUserve</b></h1>
              <p>In the world of AuraUserve, we've crafted a space where excellence in services and heartfelt care come together to reshape how you engage with home and clinical services. Our inception was marked by a vision to transform the landscape of accessing essential care, recognizing the significance of time and prioritizing the paramount importance of well-being. At AuraUserve, we're on a mission to redefine your journey through a fusion of top-notch services and genuine compassion. Our commitment is to revolutionize the very essence of how individuals connect with and receive essential care, placing your needs at the forefront of our endeavors. The journey we embark on is fueled by a dedication to not only meet but exceed your expectations in every aspect, ensuring that every moment spent with AuraUserve contributes to an enhanced and enriched quality of life. Welcome to a transformative experience where your well-being is not just a consideration but our primary focus.</p>
            </div>
            <div className='col-md-5 text-center'>
              <img className='rounded' src="/images/about.png" alt="Main" height="400" />
            </div>
          </div><br/><br/><br/>

          <div className="mission-vision-passion">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 text-center">
              <div className="mission">
                <img src="/images/mission.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='mission' />
                <div className="mission text-left"><b>Mission</b></div>
                <div className="mission text-left">
                  Our mission at AuraUserve is to redefine convenience by providing accessible and top-notch home services through innovative technology. We strive to connect skilled professionals with individuals seeking hassle-free solutions, simplifying life's essential needs.
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 text-center">
              <div className="vision">
                <img src="/images/vision.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='vision' />
                <div className="vision text-left"><b>Vision</b></div>
                <div className="vision text-left">
                  Our vision is to become the premier platform that transforms how people access and experience home services globally. We aim to be a trusted hub where seamless integration of technology and service expertise empowers individuals to lead more comfortable lives.
                </div>
              </div>
            </div>
          </div>
        </div><br/><br/><br/>
      </div>
 
        <div className="container" data-aos="fade-right" data-aos-duration="2000">
          <div className="row justify-content-center">


        <div className="col-md-7">
          <h1><b>About Our Mobile App</b></h1>
          <p>
            Our mobile app brings the power of AuraUserve to your fingertips. Experience seamless browsing, easy bookings, and access to a multitude of services, all in one place.
          </p>
          <p>
            With intuitive navigation, easy-to-use features, and a secure platform, our app simplifies your life. Say goodbye to cumbersome service searches and enjoy the ease of managing your household needs with just a few taps.
          </p>
          <p>
            Explore our comprehensive service catalog, review provider details, and effortlessly make appointments—all in one place. Experience the power of AuraUserve, ensuring that your home is well-maintained, secure, and a place of comfort, all through your mobile device.
          </p>
          <p>
            The map integration ensures that you have complete control and visibility, allowing you to choose the most convenient service provider based on location, availability, and customer reviews. Say goodbye to uncertainty and make informed decisions with AuraUserve's map integration.
          </p><br/><br/><br/><br/>
        </div>
            <div className='col-md-5 text-center'>
              <img className='rounded' src="/images/about.png" alt="Main" height="400" />
            </div>


    <div className="row" >
      <div className="col-lg-6 col-md-6 col-sm-6 text-center" >
          <div className="empower text-right">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-3">
                <img src="/images/empowering.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='Empowering' />
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8">
              <div className="empower text-left"><h3><b>Empowering Convenience</b></h3></div>
                <div className="Empowering text-left">AuraUserve is dedicated to revolutionizing the way you access essential services. Our goal is to simplify your life by connecting you with skilled professionals offering a wide range of services right at your doorstep.
            </div>
              </div>
            </div>
          </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 text-center" >
          <div className="become_pvdr text-right">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-2">
                <img src="/images/Become.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='Become Provider' />
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10">
                <div className="Become_pvdr text-left"><h3><b>Become a Service Provider</b></h3></div>
                <div className="Become_pvdr text-left">Are you a skilled professional looking for opportunities? Join our network of service providers! AuraUserve offers a platform for talented individuals to showcase their expertise. By meeting specific criteria such as experience, background checks, and having a registered business center, you can become part of our team.</div>
                <br/>
              </div>
            </div>
          </div>
      </div>
    </div>


        <div className="how-it-works" ><br/><br/><br/>
          <h2><b>Seamless Workflow</b></h2>
          <p>
            Our platform is designed to make life easier. Users can effortlessly browse services, view provider details on a map, and book appointments with a simple click. For service providers, the registration process involves filling a detailed form, undergoing verification, and gaining access to job opportunities.
          </p><br/>
        </div>
        <div className="join-us" >
          <h2><b>Join Our Community</b></h2>
          <p>
            Whether you're seeking services or looking to provide your skills, AuraUserve invites you to join our growing community. Experience the convenience of hassle-free home services. Sign up today and be a part of our journey towards seamless living.
          </p><br/>
            <button type="button" className="btn btn-dark">Join Now</button><br/><br/><br/>
        </div>

       </div>
       </div>

      </Link>
      </section>
 </div>
<Footer/>
</>
);
};

export default AboutUs;
