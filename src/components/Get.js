// Get.js

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { fadeInUp } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const fadeInUpAnimation = keyframes`${fadeInUp}`;

const AnimatedContainer = styled(Container)`
  margin-top: 50px; /* Adjusted margin-top to provide space for the fixed navbar */
  margin-bottom: 20px;
  animation: 1s ${fadeInUpAnimation};
  background-color: #D0D0D0;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #000;
`;

const GetApp = () => {
  return (
    <div id='get'>
      <AnimatedContainer>
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <h2 style={{ color: '#000' }}>Download Our Mobile App</h2>
            <p style={{ color: '#000' }}>Get the AuraUserve app for a seamless experience on your mobile device.</p>
          </Col>
        </Row>

        <Row className="mt-5 justify-content-center">
          <Col md={6} className="text-center">
            {/* Download buttons for Android and iOS */}
            <Button variant="success" className="me-2" href="#" style={{ backgroundColor: '#000', borderColor: '#fff' }}>
              <img
                src="/images/app-store.png"
                alt="Apple Store"
                className="store-icon me-2"
                style={{ width: '30px', height: 'auto' }}
              />
              Download on the App Store
            </Button>
            <Button variant="warning" href="#" style={{ backgroundColor: '#fff', borderColor: '#000' }}>
              <img
                src="/images/playstore.png"
                alt="Google Play"
                className="store-icon me-2"
                style={{ width: '30px', height: 'auto' }}
              />
              Get it on Google Play
            </Button>
          </Col>
        </Row>
      </AnimatedContainer>
    </div>
  );
};

export default GetApp;