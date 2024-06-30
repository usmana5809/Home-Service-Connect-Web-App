import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubNavbar from '../components/SubNavbar';
import Footer from '../components/Footer';

function Beauty() {
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
        <h1 className='text-center'><b>Welcome to beauty salon</b></h1>
		<h2 className='text-center'><b>Salon For Mens</b></h2>
		<div className="row">
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/hair-cutting.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Hair Cut</b></div>
					<div className="maintenance text-center">Specializing in current men's hair trends.Providing trendy cuts and styles.</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/beard.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Beard Setting</b></div>
					<div className="maintenance text-center">Specializing in beard grooming services for shaping and styling.</div>
					</div>
				</div>
				<div className="col-lg-4  col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/facial-treatment.png" height="90rem" width="90rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Facial Treatment</b></div>
					<div className="maintenance text-center">Specializing in facials designed to boost hydration and address dry skin.</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/make.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Makeup</b></div>
					<div className="maintenance text-center">Micro-pigmentation for permanent makeup..</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/massage.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Body Massage</b></div>
					<div className="maintenance text-center">Providing classic Swedish massage techniques for relaxation and tension relief.</div>
					</div>
				</div>
				<div className="col-lg-4  col-md-4 col-sm-4 text-center"data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/hair-care.png" height="90rem" width="90rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Vibrant Hair Colors</b></div>
					<div className="maintenance text-center">Offering a wide range of vibrant and trendy hair colors.</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/waxing.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Body Wax</b></div>
					<div className="maintenance text-center">AuraUserve offers Full-body waxing services.</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-4 text-center"data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/boy-hair-shape.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Hair Treatment</b></div>
					<div className="maintenance text-center">Deep conditioning and revitalizing hair treatments.</div>
					</div>
				</div>
				<div className="col-lg-4  col-md-4 col-sm-4 text-center"data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/pedicure.png" height="90rem" width="90rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Foot Reflexology and Pedicures</b></div>
					<div className="maintenance text-center">Offering foot reflexology for relaxation and wellness.</div>
					</div>
				</div>
			</div>
		</div>
		<div className="container">
	  <br/>
	  <br/>
		<h2 className='text-center'><b>Salon For Womens</b></h2>
		<div className="row">
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/eyelash.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Eyelash Extensions</b></div>
					<div className="maintenance text-center">Individual or volume eyelash extensions.</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/extensions.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Hair Extensions</b></div>
					<div className="maintenance text-center">Offering hair extensions for length and volume.</div>
					</div>
				</div>
				<div className="col-lg-4  col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/nail-polish.png" height="90rem" width="90rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Nail Art and Enhancements</b></div>
					<div className="maintenance text-center">Acrylic, gel, or dip powder nail enhancements.</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/makeup-artist.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Makeup</b></div>
					<div className="maintenance text-center">Micro-pigmentation for permanent makeup.</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/massage.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Body Massage</b></div>
					<div className="maintenance text-center">Providing classic Swedish massage techniques for relaxation and tension relief.</div>
					</div>
				</div>
				<div className="col-lg-4  col-md-4 col-sm-4 text-center"data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/henna.png" height="90rem" width="90rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Mehndi</b></div>
					<div className="maintenance text-center">Incorporating contemporary and fusion Mehndi styles.</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/waxing.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Body Wax</b></div>
					<div className="maintenance text-center">AuraUserve offers Full-body waxing services.</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-4 text-center"data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/hair-straightener.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Hair Treatment</b></div>
					<div className="maintenance text-center">Deep conditioning and revitalizing hair treatments.</div>
					</div>
				</div>
				<div className="col-lg-4  col-md-4 col-sm-4 text-center"data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/pedicure.png" height="90rem" width="90rem" className="img-responsive images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Foot Reflexology and Pedicures</b></div>
					<div className="maintenance text-center">Offering foot reflexology for relaxation and wellness.</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<Footer/>
	</>
  );
}

export default Beauty;