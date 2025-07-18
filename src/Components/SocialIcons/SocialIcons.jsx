import React from 'react';
import './SocialIcons.css';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';
import resume from '../../assets/resume.pdf';
import resumeIcon from '../../assets/resume.svg';

function SocialIcons() {
  return (
    <div className="social-icons">
        <a href="https://www.linkedin.com/in/mosesfdo/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" /></a>
        <a href="https://github.com/mosesfdo" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" /></a>
        <a href={resume} download>
            <img src={resumeIcon} alt="resume" />
        </a>
    </div>
  )
}

export default SocialIcons