import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import SubNavbar from './SubNavbar';
import Footer from './Footer';

const MoreDetails = () => {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

   return (
    <>
    <SubNavbar/>
    <Container className="mt-5">
      <Row>
        <Col><br/>       	
        <br/><h1 className="text-center"><b>Become a Provider with AuraUserve?</b></h1>
			  <p className='text-center'>Welcome to AuraUserve! Join our platform and offer your services to a wide audience.</p>
        </Col>
      </Row>
          <div className="row">
          <div className="col-md-7">
            <p>AuraUserve stands out as the premier choice for service providers due to its commitment to fostering a thriving community of professionals. With a vast and diverse user base, our platform provides unparalleled exposure to potential clients, ensuring that your services reach a wide audience. The intuitive and user-friendly tools streamline the entire process, making it easy for providers to manage schedules, showcase their expertise, and connect with clients seamlessly. AuraUserve prioritizes security, implementing a robust payment system to guarantee reliable and secure transactions. The platform's flexible schedules empower providers to tailor their availability, offering the freedom to manage work-life balance effectively. By choosing AuraUserve, providers not only tap into a broad market but also benefit from a supportive environment that values their contributions, paving the way for increased income and professional success. Join us today and unlock the full potential of your service-oriented career.</p>
          </div>
          <div className='col-md-5'>
              <img className='rounded' src="/images/choose.png" alt="Main" height="400" />
          </div>
        </div>
          {/* Styling for the first row */}
        <Row className="mt-4">
          <Col md={6}>
            <h4 className="mb-3">Why Choose AuraUserve?</h4>
            <p>Discover the benefits of becoming a service provider on AuraUserve:</p>
            <ul>
              <li>Broad user base</li>
              <li>Easy-to-use tools</li>
              <li>Secure payment system</li>
              <li>Increased visibility and customer reach</li>
              <li>Opportunities for career growth</li>
            </ul>
          </Col>
          <Col md={6}>
            <h4 className="mb-3">How It Works</h4>
            <p>Joining AuraUserve is easy! Follow these simple steps to become a provider:</p>
            <ol>
              <li>Sign up and create your profile</li>
              <li>Choose your service categories</li>
              <li>Complete the verification process</li>
              <li>Set your availability and pricing</li>
              <li>Start receiving service requests</li>
            </ol>
          </Col>
        </Row>

        {/* Styling for the second row */}
        <Row className="mt-4">
          <Col md={6}>
            <h4 className="mb-3">Provider Benefits</h4>
            <p>Enjoy the benefits of being a provider on AuraUserve:</p>
            <ul>
              <li>Flexible schedules to suit your lifestyle</li>
              <li>Exposure to a diverse and wide audience</li>
              <li>Potential for increased income and earnings</li>
              <li>Access to performance analytics and insights</li>
              <li>Marketing and promotional opportunities</li>
            </ul>
          </Col>
          <Col md={6}>
            <h4 className="mb-3">Support and Training</h4>
            <p>We offer support and training programs to help providers succeed:</p>
            <ul>
              <li>24/7 customer support</li>
              <li>Online training resources</li>
              <li>Community forums for peer support</li>
              <li>Regular webinars and workshops</li>
              <li>Personalized onboarding assistance</li>
            </ul>
          </Col>
        </Row>

        {/* Styling for the third row */}
        <Row className="mt-4">
          <Col>
            <h4 className="mb-3">Frequently Asked Questions</h4>
            <Card>
              <Card.Body>
                <Card.Text>
                  <strong>Q:</strong> How do I get paid for my services?
                  <br />
                  <strong>A:</strong> AuraUserve handles payments securely, and you'll receive payouts on a regular basis.
                </Card.Text>
                {/* Add more FAQs here */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
<br/>
	<div className="container_req">
	<div className="container">
			<br/><h3 className="text-center"><b>Requirements</b></h3><br/>
			<div className="row">
			<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 transition text-center">
					<img src="/images/age.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='Age'/>
					<div className="repair text-center"><b>Age</b></div>
					<div className="maintenance text-center">You have to be over 18 years of age with a valid CNIC card to register with AuraUserve.</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-down" data-aos-duration="2000">
					<div className="p_10 transition text-center">
					<img src="/images/booking.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='Smartphone'/>
					<div className="repair text-center"><b>Smartphone</b></div>
					<div className="maintenance text-center">You will need an Android or iPhone device to receive bookings on AuraUserve.</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-right" data-aos-duration="2000">
					<div className="p_10 transition ">
					<img src="/images/warehouse.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='Registered Business Center Address'/>
					<div className="repair text-center"><b>Registered Business Center Address</b></div>
					<div className="maintenance text-center">You should have a registered business center address such as office, shop, or saloon address.</div>
				</div>
			</div>
			</div>
				<br/><div className="row">
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 transition">
					<img src="/images/sim-card.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='Registered Mobile Number'/>
					<div className="repair text-center"><b>Registered Mobile Number</b></div>
					<div className="maintenance text-center">You should have registered mobile number where customer can call after booking the job..
					</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-up" data-aos-duration="2000">
					<div className="p_10 transition">
                    <img src="/images/background-check.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='Background Check'/>
					<div className="repair text-center"><b>Background Check</b></div>
					<div className="maintenance text-center">The Background Check process may include drug tests, police reports, credit checks etc.
					</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-right" data-aos-duration="2000">
					<div className="p_10 transition">
                    <img src="/images/best-customer-experience.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='Experience'/>
					<div className="repair text-center"><b>Experience</b> </div>
					<div className="maintenance text-center">You should have atleast 3 years of Experience forin relative field to register with AuraUserve.  </div>
					</div>
				</div>
			</div><br/>
		</div>
    <br/>
		</div>	
			
			
      
       
<Footer/>
    </>
  );
};

export default MoreDetails;