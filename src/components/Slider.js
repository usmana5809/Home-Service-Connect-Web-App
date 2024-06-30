import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Slider.css'; // Import your custom CSS file

const ServiceSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
  };

  const imageSize = { width: '80px', height: '80px' };

  const serviceImages = [
    '/images/beautty.png',
    '/images/carpenter.png',
    '/images/car.png',
    '/images/doctor.png',
    '/images/clean.png',
    '/images/garden.png',
    '/images/home shift.png',
    '/images/pest cont.png',
    '/images/plumbing.png',
    '/images/repairing.png',
    '/images/security.png',
    '/images/bulb.png',
    '/images/solar.png',
    '/images/carpenter.png',
  ];

  return (
    <section className="section">
      <div className="grid-container full">
        <div className="grid-x">
          <div className="cell text-center">
            <header>
              <h2 className="text-white">Some of our Services</h2>
            </header>

            <div className="logo-container">
              <Slider {...settings}>
                {serviceImages.map((image, index) => (
                  <div key={index} className="logo-div">
                    <img className="logo-img" src={image} alt={`Service ${index}`} style={imageSize} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSlider;