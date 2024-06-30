import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubNavbar from '../components/SubNavbar';
import Footer from '../components/Footer';

function Catering() {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
	<>
	  <SubNavbar/>
    <div id="services">
	
      <div className="container" data-aos="fade-left" data-aos-duration="2000">
	  <br/>
	  <br/>
        <h1 className='text-center'><b>Welcome to Catering </b></h1>
		<div className="row">
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/banquet.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Event Catering</b></div>
					<div className="maintenance text-center">Full-service catering for various events such as weddings.</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/buffet.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Corporate Catering</b></div>
					<div className="maintenance text-center">Boxed lunches, buffet setups, and gourmet catering options.</div>
					</div>
				</div>
				<div className="col-lg-4  col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/dinner.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Meal Delivery Services</b></div>
					<div className="maintenance text-center">Delivering ready-to-eat meals to homes or offices.
</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/catering (1).png" height="100rem" width="100rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Food Stations and Food Trucks</b></div>
					<div className="maintenance text-center">Offering food truck services for a unique catering experience.</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/waiter.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Farm-to-Table Catering</b></div>
					<div className="maintenance text-center">Emphasizing the use of locally sourced and seasonal ingredients.</div>
					</div>
				</div>
				<div className="col-lg-4  col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/cate.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Interactive Culinary Experiences</b></div>
					<div className="maintenance text-center">Providing live cooking demonstrations and interactive chef experiences.</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<Footer/>

	</>
  
  );
}

export default Catering;