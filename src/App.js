// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Main from "./components/Main";
import ServiceSlider from "./components/Slider";
import About from "./components/About";
import Services from "./components/Services";
import Become from "./components/Become";
import Get from "./components/Get";
import Contact from "./components/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton";

import Beauty from "./Sub_Services/Beauty ";
import Catering from "./Sub_Services/Catering";
import Cleaning from "./Sub_Services/Cleaning";
import Clinical from "./Sub_Services/Clinical";
import Gardening from "./Sub_Services/Gardening";
import HomeSecurity from "./Sub_Services/Home Security";
import Maintenance from "./Sub_Services/Maintenance";
import PestControl from "./Sub_Services/Pest Control";
import Renovation from "./Sub_Services/Renovation";
import Shifting from "./Sub_Services/Shifting";
import Solar from "./Sub_Services/Solar";
import Washing from "./Sub_Services/Washing";
import WhatsAppIcon from "./components/WhatsAppIcon";
import YouTubeIcon from "./components/YouTubeIcon";
import MoreDetails from "./components/MoreDetails";
import AboutUs from "./components/About_more";
import FAQ from "./Footer_section/FAQ";
import TermsOfService from "./Footer_section/TermsOfService";
import PrivacyPolicy from "./Footer_section/PrivacyPolicy";
import Blog from "./Footer_section/Blog";



function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <ServiceSlider />
      <About />
      <Services/>
      <Become />
      <Get/>
      <Contact />
      <Footer/>
      <ScrollToTopButton />
      <WhatsAppIcon/>
      <YouTubeIcon/>
    </>
  );
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Slider" element={<ServiceSlider />} />
          <Route path="/About" element={<About />} />
          <Route path="/AboutMore" element={ <AboutUs/>} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Beauty" element={<Beauty />} />
          <Route path="/Catering" element={<Catering />} />
          <Route path="/Cleaning" element={<Cleaning />} />
          <Route path="/Clinical" element={<Clinical />} />
          <Route path="/Gardening" element={<Gardening />} />
          <Route path="/Home_Security" element={<HomeSecurity />} />
          <Route path="/Maintenance" element={<Maintenance />} />
          <Route path="/Pest_Control" element={<PestControl />} />
          <Route path="/Renovation" element={<Renovation />} />
          <Route path="/Shifting" element={<Shifting />} />
          <Route path="/Solar" element={<Solar />} />
          <Route path="/Washing" element={<Washing />} />
          <Route path="/Become" element={<Become />} />
          <Route path="/Get" element={<Get />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ScrollToTopButton"element={<ScrollToTopButton />}/>
          <Route path="/more-details"element={<MoreDetails />}/>
          <Route path="/Blog" element={ <Blog/>} />
          <Route path="/FAQ" element={  <FAQ/>} />
          <Route path="/Terms" element={ <TermsOfService/>}/>
          <Route path="/Privacy" element={ <PrivacyPolicy/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;