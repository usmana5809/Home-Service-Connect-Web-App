import React from 'react';
import SubNavbar from '../components/SubNavbar';

import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <>
    <SubNavbar/>
    <div className="privacy-policy-container">
      <section className="privacy-policy-section" style={{ margin: '5%' }}>
      <br /><br />
        <h1>Privacy Policy</h1>
        <p className="text-justify">
          Your privacy is important to us. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our services.
        </p>
        <h2>1. Information Collection</h2>
        <p className="text-justify">
          We collect personal information such as name, email, phone number, and address when you create an account or book a service. We may also collect usage data and device information.
        </p>
        <h2>2. Use of Information</h2>
        <p className="text-justify">
          We use collected information to provide and improve our services, personalize user experience, process payments, communicate with users, and ensure platform security.
        </p>
        <h2>3. Data Security</h2>
        <p className="text-justify">
          We implement appropriate security measures to protect user data from unauthorized access, alteration, disclosure, or destruction.
        </p>
        <h2>4. Information Sharing</h2>
        <p className="text-justify">
          We do not sell, trade, or rent user information to third parties. However, we may share data with service providers or for legal compliance and safety reasons.
        </p>
        <h2>5. Cookies and Tracking</h2>
        <p className="text-justify">
          We may use cookies and similar tracking technologies to enhance user experience and track website usage. Users can manage cookie preferences in their browser settings.
        </p>
        <h2>6. Updates to Privacy Policy</h2>
        <p className="text-justify">
          We reserve the right to update or modify this Privacy Policy. Users will be notified of any changes, and continued use of our services after revisions constitutes acceptance of the updated policy.
        </p>
        <h2>7. Contact Information</h2>
        <p className="text-justify">
          For questions or concerns regarding our Privacy Policy, please contact us at [contact email/phone].
        </p>
      </section>
    </div>
<Footer/>
</>
  );
};

export default PrivacyPolicy;
