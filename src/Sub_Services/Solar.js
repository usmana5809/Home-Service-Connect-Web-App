import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubNavbar from '../components/SubNavbar';
import Footer from '../components/Footer';

function Solar() {
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
	    <h1 className='text-center'><b>Welcome to Solar</b></h1>
		<div className="row">
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/solar.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Solar Panel Installation</b></div>
					<div className="maintenance text-center">Designing and installing solar panel systems for residential and commercial properties.</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/panel.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Solar Maintenance and Repairs</b></div>
					<div className="maintenance text-center">Providing routine maintenance services to ensure optimal performance.</div>
					</div>
				</div>
				<div className="col-lg-4  col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/energy.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Energy Audits and Consultations</b></div>
					<div className="maintenance text-center">Conducting energy audits to assess energy consumption and potential savings.</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/battery.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Solar Battery Storage Solutions</b></div>
					<div className="maintenance text-center">Installing solar battery systems for energy storage.</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/spal.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Solar Financing and Leasing</b></div>
					<div className="maintenance text-center">Offering financing options or leasing programs for solar installations.</div>
					</div>
				</div>
				<div className="col-lg-4  col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/monitor.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Solar Monitoring Systems</b></div>
					<div className="maintenance text-center">Implementing monitoring systems to track the performance of solar installations.</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  	<Footer/>

	</>
  );
}

export default Solar;