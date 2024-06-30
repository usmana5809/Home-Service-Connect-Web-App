import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Services.css';

function Services() {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

	return (
	 
	 <>
	<div id="services" className="services-background">
    <div className="container ">
         <br/> <h1 className='text-center'><b>Our Services</b></h1>
        <div className="row">
				<div className="col-lg-4 col-md-4 col-sm-4 text-center"  data-aos="fade-right" data-aos-duration="2000">
					<Link to="/Beauty" className='Link'>
					<div className="p_10 text-center ">
					<img src="/images/beautty.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='Maintenance'/>
					<div className="repair text-center"><b>Beauty Salon</b></div>
					<div className="maintenance text-center">AuraUserve offers beauty salon solution at your doorstep.</div>
					</div>
					</Link>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-4 text-center"  data-aos="fade-down" data-aos-duration="2000">
					<Link to="/Maintenance" className='Link'>
					<div className="p_10 text-center ">
					<img src="/images/repairing.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='Maintenance'/>
					<div className="repair text-center"><b>Maintenance</b></div>
					<div className="maintenance text-center">A smarter way to keep up with maintenance.</div>
					</div>
					</Link>
				</div>
				<div className="col-lg-4  col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<Link to="/Shifting" className='Link'>
					<div className="p_10 text-center ">
					<img src="/images/home shift.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='Shifting'/>
					<div className="repair text-center"><b>Shifting</b></div>
					<div className="maintenance text-center">AuraUserve helps to take the entire relocation burden off from the customers shoulders.</div>
					</div>
					</Link>
				</div>
			</div>
			<br/><div className="row">
				<div className="col-lg-4 col-md-4 col-sm-4 text-center"  data-aos="fade-right" data-aos-duration="2000">
					<Link to="/Pest_Control" className='Link'>
					<div className="p_10 text-center ">
					<img src="/images/pest cont.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='Pest Control'/>
					<div className="repair text-center"><b>Pest Control</b></div>
					<div className="maintenance text-center">We provide professional pest control services for your home and business.</div>
					</div>
				</Link>
				</div>

				<div className="col-lg-4 col-md-4 col-sm-4 text-center"  data-aos="fade-down" data-aos-duration="2000">
					<Link to="/Cleaning" className='Link'>
					<div className="p_10 text-center ">
					<img src="/images/clean.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='Cleaning'/>
					<div className="repair text-center"><b>Cleaning</b></div>
					<div className="maintenance text-center">Are you having issues with your faucets and sinks? Join us.</div>
					</div>
					</Link>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-4  text-center" data-aos="fade-left" data-aos-duration="2000">
					<Link to="/Renovation" className='Link'>
					<div className="p_10 text-center ">
					<img src="/images/renovation.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='Renovation'/>
					<div className="repair text-center"><b>Renovation</b></div>
					<div className="maintenance text-center">Preserve the beauty and functionality of your place with our comprehensive renovation services.</div>
					</div>
					</Link>
				</div>
			</div>
			<br/><div className="row">
				<div className="col-lg-4 col-md-4 col-sm-4 text-center"  data-aos="fade-right" data-aos-duration="2000">
					<Link to="/Catering" className='Link'>
					<div className="p_10 text-center ">
					<img src="/images/catering.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='Catering Solution'/>
					<div className="repair text-center"><b>Catering Solution</b></div>
					<div className="maintenance text-center">AuraUserve offers complete prepared food solution for your events/parties with professionals and experienced partners.</div>
					</div>
					</Link>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-4  text-center"  data-aos="fade-up" data-aos-duration="2000">
					<Link to="/Washing" className='Link'>
					<div className="p_10 text-center ">
					<img src="/images/car.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='Washing'/>
					<div className="repair text-center"><b>Washing</b></div>
					<div className="maintenance text-center">AuraUserve offers complete solution for washing, cleaning, auto detailing and dry cleaning services at doorstep.
					</div>
					</div>
					</Link>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<Link to="/Clinical" className='Link'>
					<div className="p_10 text-center ">
					<img src="/images/doctor.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='Clinical'/>
					<div className="repair text-center"><b>Clinical</b></div>
					<div className="maintenance text-center">AuraUserve provides facility of Clinical services at your doorstep.</div>
					</div>
					</Link>
				</div>
			</div>
            <br/><div className="row">
				<div className="col-lg-4 col-md-4 col-sm-4 text-center"  data-aos="fade-right" data-aos-duration="2000">
				<Link to="/Solar" className='Link' >
					<div className="p_10 text-center ">
					<img src="/images/solar.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='Solar Panel'/>
					<div className="repair text-center"><b>Solar Panel</b></div>
					<div className="maintenance text-center">Power your place with clean, renewable energy through our solar services.</div>
					</div>
					</Link>
				</div>
                <div className="col-lg-4 col-md-4 col-sm-4 text-center"  data-aos="fade-up" data-aos-duration="2000">
					<Link to="/Gardening" className='Link'>
					<div className="p_10 text-center ">
					<img src="/images/garden.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='Gardening'/>
					<div className="repair text-center"><b>Gardening</b></div>
					<div className="maintenance text-center">AuraUserve provide skilled horticulturists is here to transform your garden into a lush oasis.</div>
					</div>
					</Link>
				</div>
                <div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<Link to="/Home_Security" className='Link'>
					<div className="p_10 text-center ">
					<img src="/images/security.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='Home Security'/>
					<div className="repair text-center"><b>Home Security</b></div>
					<div className="maintenance text-center">AuraUserve provide security services and offer advanced technology and vigilant monitoring to safeguard your home 24/7.</div>
					</div>
					</Link>
				</div>
		</div>
        </div>
		</div>
	</>
  );
}

export default Services;