import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubNavbar from '../components/SubNavbar';
import Footer from '../components/Footer';

function PestControl() {
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
	    <h1 className='text-center'><b>Welcome to Pest Control</b></h1>
		<div className="row">
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/insecticide.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>General Pest Control</b></div>
					<div className="maintenance text-center">Regular inspections and treatments for common pests like ants,spiders.</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/rat.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Rodent Control</b></div>
					<div className="maintenance text-center">A smarter way to identification and elimination of mice and rats</div>
					</div>
				</div>
				<div className="col-lg-4  col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/mosquito.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Mosquito Control</b></div>
					<div className="maintenance text-center">AuraUserve helps Larvicide treatments for standing water.</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/bed-bug.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Bed Bug Extermination</b></div>
					<div className="maintenance text-center">AuraUserve provides inspection and identification of bed bug infestations.</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/snail.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Wildlife Control</b></div>
					<div className="maintenance text-center">Humane removal of wildlife such as raccoons, squirrels, and birds.</div>
					</div>
				</div>
				<div className="col-lg-4  col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/bee.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Bee and Wasp Removal</b></div>
					<div className="maintenance text-center">AuraUserve helps Safe removal of beehives and wasp nests.</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  	<Footer/>

	</>
  );
}

export default PestControl;