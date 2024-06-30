import React from 'react';
import SubNavbar from '../components/SubNavbar';

import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <>
    <SubNavbar/>
    <div className="terms-of-service-container">
    <section className="terms-of-service-section" style={{margin: '5%' }}>
  <br /><br />   <h1>Terms of Service</h1>
        <p className="text-justify">
          Welcome to AuraUserve! These terms and conditions outline the rules and regulations for the use of our platform and services.
        </p>
        <h2>1. Acceptance of Terms</h2>
        <p className="text-justify">
          By accessing or using our services, you agree to comply with these terms. If you do not agree to abide by the terms, please refrain from using our platform.
        </p>
        <h2>2. Services</h2>
        <p className="text-justify">
          Our platform connects users with service providers offering various home services. We aim to provide a reliable and convenient experience, but we do not guarantee the availability or quality of services.
        </p>
        <h2>3. User Accounts</h2>
        <p className="text-justify">
          Users must create an account to access certain features. It's your responsibility to maintain the confidentiality of your account information and to promptly notify us of any unauthorized use or security breaches.
        </p>
        <h2>4. Service Providers</h2>
        <p className="text-justify">
          Service providers on our platform are independent contractors. We do not endorse or guarantee their services. Users engage with service providers at their own risk.
        </p>
        <h2>5. Payments and Refunds</h2>
        <p className="text-justify">
          Payments for services must be made as per the specified terms. Refunds may be provided under certain circumstances as outlined in our refund policy.
        </p>
        <h2>6. Privacy</h2>
        <p className="text-justify">
          We respect user privacy and handle personal information in accordance with our privacy policy.
        </p>
        <h2>7. Modifications to Terms</h2>
        <p className="text-justify">
          We reserve the right to update or modify these terms at any time. Continued use of the platform after changes constitute acceptance of the modified terms.
        </p>
        <h2>8. Contact Information</h2>
        <p className="text-justify">
          If you have any questions or concerns regarding these terms, please contact us at [contact email/phone].
        </p>
      </section>
    </div>
<Footer/>
</>
  );
};

export default TermsOfService;
