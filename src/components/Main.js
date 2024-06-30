//Main.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';

function Main() {
  return (
    <div id="home" className="main-background">
      <section className="container1" >
        <div className="container-fluid main-container">
          <div className="row" >
            <div className="col-md-6" data-aos="fade-right" data-aos-duration="2000"><br/>
              <h1><b>Welcome to AuraUserve</b></h1><br/><br/>
              <h5><i>Your Trusted Home and Clinical Services Partner</i></h5>
              <p>Welcome to AuraUserve, where convenience meets care. Elevate your lifestyle with our seamless home services and comprehensive clinical solutions. Whether you're looking for a skilled service provider for your home or seeking top-notch clinical care, AuraUserve is your go-to destination.</p>
             <br/><br/>
              <button type="button" className="btn btn-dark">Chat with us on Whatsapp</button><br/><br/>
            </div>
            <div className="col-md-6 text-center">
              <img className='rounded' src="/images/main.png" alt="Main" height="350" data-aos="fade-up" data-aos-duration="2000"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;