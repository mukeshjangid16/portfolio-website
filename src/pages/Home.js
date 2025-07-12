import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Home.css';
import profile from '../assets/profile.jpg'; // Import the profile image

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <img 
          src={profile} 
          alt="Mukesh Jangid Profile" 
          className="profile-picture"
        />
        <h2>Hi, I'm Mukesh</h2>
        <p>
          A passionate <strong>Full Stack MERN Developer</strong> who loves building fast, scalable, and secure web applications. 
          I enjoy solving real-world problems with clean code and modern technologies.
        </p>
        <div className='social-links'>
          <a href="https://www.linkedin.com/in/mukesh-jangid-085244293/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon titleAccess="LinkedIn" />
          </a>
          <a href="mailto:mukeshjangid16@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
            <EmailIcon titleAccess="Email" />
          </a>
          <a href="https://github.com/mukeshjangid16/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon titleAccess="GitHub" />
          </a>
        </div>
      </div>

      <div className='skills'>
        <h1>Skills</h1>
        <div className='skills-container'>
          <div className='card'>
            <h2>Full Stack Development (MERN)</h2>
            <p>MongoDB, Express.js, React.js, Node.js, REST APIs, JWT Auth, Redux, React Query</p>
          </div>
          <div className='card'>
            <h2>Frontend Technologies</h2>
            <p>HTML5, CSS3, JavaScript (ES6+), Material UI, Tailwind CSS, Responsive Design</p>
          </div>
          <div className='card'>
            <h2>Backend & Database</h2>
            <p>Node.js, Express.js, MongoDB, Mongoose, MySQL, Firebase, Cloudinary, Multer</p>
          </div>
          <div className='card'>
            <h2>Dev Tools & Deployment</h2>
            <p>Git, GitHub, VS Code, Postman, Render, Vercel, Netlify, Linux CLI</p>
          </div>
          <div className='card'>
            <h2>Security & Monitoring</h2>
            <p>OWASP, JWT, Bcrypt, Helmet.js, SIEM (Splunk/ELK), MITRE ATT&CK</p>
          </div>
          <div className='card'>
            <h2>Other Skills</h2>
            <p>Web Scraping, API Integration, Real-time Apps (Socket.IO), WordPress, PHP Basics</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
