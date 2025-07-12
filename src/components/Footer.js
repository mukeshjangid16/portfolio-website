import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='socialMedia'>
        
        <a href="https://www.instagram.com/mukesh.____16/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <InstagramIcon />
        </a>
        <a href="https://github.com/mukeshjangid16/Redux-cart" target="_blank" rel="noopener noreferrer" className="social-icon">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/mukeshjangid16/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <LinkedInIcon />
        </a>
      </div>
      <p>&copy; 2025 Mukesh Jangid.</p>
    </footer>
  );
}

export default Footer;
