// ScrollToTopButton.js
import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    // Show the button when the user scrolls down, otherwise hide it
    setIsVisible(scrollTop > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Add a scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures that this effect runs once when the component mounts

  return (
    <IconButton
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '17px',
        display: isVisible ? 'block' : 'none',
        color: 'white',
        backgroundColor: 'black',
        borderRadius: '40%', // Set border-radius for a circular shape
        '&:hover': {
          backgroundColor: 'grey', // Adjust the background color on hover
        },
      }}
      aria-label="scroll to top"
    >
      <KeyboardArrowUpIcon />
    </IconButton>
  );
};

export default ScrollToTopButton;
