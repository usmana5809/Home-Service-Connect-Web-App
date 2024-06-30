import React, { useEffect, useState } from 'react';
import NavLink from './NavLink'; 
import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function Navbar() {
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 50;

      setIsNavbarTransparent(scrollPosition < threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-dark bg-black py-0 sticky-top fixed-top ${isNavbarTransparent ? 'transparent-navbar' : ''}`}>
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4 px-2" to="home" smooth={true} duration={500} onClick={scrollToTop}>
      <img src="/images/logo.png" alt="Logo" height="70" style={{ marginRight: '30px' }} />

        </NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="home" smooth={true} duration={500} className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="about" smooth={true} duration={500} className="nav-link">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="services" smooth={true} duration={500} className="nav-link">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="become" smooth={true} duration={500} className="nav-link">Become Provider</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="get" smooth={true} duration={500} className="nav-link">Get App</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="contact" smooth={true} duration={500} className="nav-link">Contact Us</NavLink>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto collapse navbar-collapse justify-content-end">
            <li className="nav-item">
              <a className="nav-link" href="#Youtube"><FontAwesomeIcon icon={faYoutube} /></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#FaceBook"><FontAwesomeIcon icon={faFacebook} /></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
