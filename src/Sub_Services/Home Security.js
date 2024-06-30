import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubNavbar from '../components/SubNavbar';
import Footer from '../components/Footer';

function HomeSecurity() {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
	<>
	<SubNavbar />
    <div id="services">
      <div className="container">
     <br/>
	  <br/>
	    <h1 className='text-center'><b>Welcome to Home Security</b></h1>
		<div className="row">
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/home-automation.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Home Security System Installation</b></div>
					<div className="maintenance text-center">Installing comprehensive security systems, including cameras, sensors, and alarms.</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/smart-home.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Smart Home Integration</b></div>
					<div className="maintenance text-center">Integrating security systems with smart home technologies.</div>
					</div>
				</div>
				<div className="col-lg-4  col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/access-control.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Access Control Systems</b></div>
					<div className="maintenance text-center">Installing electronic access control systems for doors and gates.</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/cctv.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Video Surveillance</b></div>
					<div className="maintenance text-center">Implementing high-definition video surveillance systems.</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/notification.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Alarm Monitoring Services</b></div>
					<div className="maintenance text-center">Providing 24/7 monitoring services for alarms and security systems.</div>
					</div>
				</div>
				<div className="col-lg-4  col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/fire-alarm.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Fire and Smoke Detection</b></div>
					<div className="maintenance text-center">Integrating fire and smoke detection systems.</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  	<Footer/>

	</>
  );
}

export default HomeSecurity;