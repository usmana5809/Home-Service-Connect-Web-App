import React, { useState } from 'react';
import SubNavbar from '../components/SubNavbar';

import Footer from '../components/Footer';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqData = [
    {
      question: 'What services do you offer?',
      answer:
        'We offer a wide range of services including maintenance, beauty salon solutions, pest control, cleaning, renovation, catering, and more.',
    },
    {
      question: 'How do I book a service?',
      answer:
        'Booking a service is simple. Just navigate to our website or mobile app, select the service you need, choose a provider, and schedule an appointment.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept various payment methods including credit/debit cards, online payments, and cash on delivery.',
    },
    {
      question: 'How can I track my payments?',
      answer:
        'Once you make a payment, you\'ll receive a confirmation email or notification with details of the transaction. You can also track your payments through your account on our app.',
    },
    {
    question: 'What areas do you serve?',
    answer:
      'We currently provide our services in [list of areas/cities]. However, were continually expanding to serve more regions.',
    },
    {
        question: 'How do I cancel or reschedule an appointment?',
        answer:
        'You can cancel or reschedule an appointment by logging into your account on our app or website and accessing your bookings. Follow the provided options to modify your appointment.',
    },
    {
        question: 'Are your service providers background checked?',
        answer:
        'Yes, all our service providers undergo a comprehensive background check, including verification of identities, criminal records, and other relevant checks.',
    },
    {
        question: 'Can I provide feedback or rate a service?',
        answer:
        'Absolutely! After each service, you can leave feedback and ratings for the service provider. Your feedback helps us maintain quality services.',
    },
    {
        question: 'What happens if I am not satisfied with the service?',
        answer:
        'If you`re not satisfied with the service provided, please contact our customer support. We`ll ensure your issue is resolved promptly.',
    },
    {
        question: 'Do I need to be present during the service?',
        answer:
        'It`s recommended that you`re present during the service to discuss any specifics with the provider. However, if you can`t be present, ensure someone is available to guide the service provider.',
    },
    {
        question: 'What are your service hours?',
        answer:
        'Our service hours vary depending on the type of service and provider availability. You can check available time slots on our app or website when booking.',
    },
    {
        question: 'Are your services insured?',
        answer:
        'Yes, we ensure that our services are covered by insurance. However, please refer to the specific service terms and conditions for more details.',
    },
    {
        question: 'Can I request a specific service provider?',
        answer:
        'Yes, you can request a specific service provider if they are available during your preferred time slot. Please mention your preference when booking.',
    },
    {
        question: 'Do you offer discounts or promotions?',
        answer:
        'We occasionally run promotions and discounts. Keep an eye on our app or website for any ongoing offers or subscribe to our newsletter for updates.',
    },
    {
        question: 'How can I contact customer support?',
        answer:
        'You can reach our customer support team through the app, website, or by calling our helpline number provided in the contact section.',
    },
    {
        question: 'Can I change my registered mobile number or email?',
        answer:
        'Yes, you can update your contact information by accessing your profile settings on our app or website.',
    },
    // Add more FAQ data here
  ];

  return (
    <>
    <SubNavbar/>
    <div className="faq-page-container text-center">
      <section className="faq-section">
      <br /><br /><br /><br />
        <h1>FAQ</h1>
        <div className="faq-accordion mx-auto" style={{ maxWidth: '900px' }}>
          {faqData.map((item, index) => (
            <div key={index} className="faq-item border p-3 mb-3">
              <div
                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleAccordion(index)}
                style={{ cursor: 'pointer' }} // Add cursor style here
              >
                {item.question}
              </div>
              {activeIndex === index && (
                <div className="faq-answer mt-2">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Other sections remain the same */}
      </section>
    </div>
    <Footer/>
</>
  );
};

export default FAQPage;
