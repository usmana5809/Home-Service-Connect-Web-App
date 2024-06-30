//become.js
// Become.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Become.css';

function Become() {
  const navigate = useNavigate();

  const handleExploreMore = () => {
    // Navigate to the new page when the button is clicked
    navigate('/more-details');
  };

  return (
	<div id="become">
     <div className="container">
		<h1 className="text-center"><b>Become a Provider with AuraUserve?</b></h1>
		<p className='text-center'>Welcome to AuraUserve! Join our platform and offer your services to a wide audience.</p>

		<div className="container">
        <div className="row">
          <div className="col-md-7">
            <p>AuraUserve stands out as the premier choice for service providers due to its commitment to fostering a thriving community of professionals. With a vast and diverse user base, our platform provides unparalleled exposure to potential clients, ensuring that your services reach a wide audience. The intuitive and user-friendly tools streamline the entire process, making it easy for providers to manage schedules, showcase their expertise, and connect with clients seamlessly. AuraUserve prioritizes security, implementing a robust payment system to guarantee reliable and secure transactions. The platform's flexible schedules empower providers to tailor their availability, offering the freedom to manage work-life balance effectively. By choosing AuraUserve, providers not only tap into a broad market but also benefit from a supportive environment that values their contributions, paving the way for increased income and professional success. Join us today and unlock the full potential of your service-oriented career.</p>
          </div>
          <div className='col-md-5'>
              <img className='rounded' src="/images/choose.png" alt="Main" height="400" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button type="button" className="btn btn-dark" onClick={handleExploreMore}>Why Choose?</button><br/><br/><br/>
          </div>
        </div>
    	</div>
	</div>

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
		</div>	
			
			</div>
			
    );
  }
  
  export default Become;