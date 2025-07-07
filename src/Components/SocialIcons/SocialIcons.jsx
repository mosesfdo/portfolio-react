import React from 'react';
import './SocialIcons.css';

function SocialIcons() {
  return (
    <div className="social-icons">
        <a href="https://www.linkedin.com/in/mosesfdo/" target="_blank" rel="noopener noreferrer"><img src="./src/assets/linkedin.svg" alt="linkedin" /></a>
        <a href="https://github.com/mosesfdo" target="_blank" rel="noopener noreferrer"><img src="./src/assets/github.svg" alt="github" /></a>
        <a href="./src/assets/resume.pdf" download>
            <img src="./src/assets/resume.svg" alt="resume" />
        </a>
    </div>
  )
}

export default SocialIcons