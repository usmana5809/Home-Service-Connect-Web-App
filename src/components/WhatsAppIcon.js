// WhatsAppIcon.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppIcon = () => {
  const handleWhatsAppClick = () => {
    // Add logic to open the WhatsApp chat
    window.open('https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER', '_blank');
  };

  return (
    <div
      style={{
        position: 'fixed',
        right: '5px',
        bottom: '40%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        zIndex: 1000,
        borderRadius: '50%', // Make the icon circular
        background: '#128C7E', // WhatsApp green
        padding: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', // Add a subtle shadow
        transition: 'background 0.3s', // Smooth color transition
      }}
      onClick={handleWhatsAppClick}
      onMouseOver={(e) => (e.target.style.background = '#128C7E')} // Single color on hover
      onMouseOut={(e) => (e.target.style.background = '#128C7E')} // Restore original color on hover out
    >
      <FontAwesomeIcon icon={faWhatsapp} size="3x" style={{ color: '#fff' }} />
    </div>
  );
};

export default WhatsAppIcon;
