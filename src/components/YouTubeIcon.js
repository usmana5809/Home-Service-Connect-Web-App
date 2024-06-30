// YouTubeIcon.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const YouTubeIcon = () => {
  const handleYouTubeClick = () => {
    // Add logic to open the YouTube channel link
    window.open('https://www.youtube.com/YOUR_CHANNEL', '_blank');
  };

  return (
    <div
      style={{
        position: 'fixed',
        right: '10px',
        bottom: '30%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        zIndex: 1000,
        borderRadius: '50%', // Make the icon circular
        background: 'red', // YouTube red
        padding: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', // Add a subtle shadow
        transition: 'background 0.3s', // Smooth color transition
      }}
      onClick={handleYouTubeClick}
      onMouseOver={(e) => (e.target.style.background = '#e62117')} // Single color on hover
      onMouseOut={(e) => (e.target.style.background = '#ff0000')} // Restore original color on hover out
    >
      <FontAwesomeIcon icon={faYoutube} size="2x" style={{ color: '#fff' }} />
    </div>
  );
};

export default YouTubeIcon;
