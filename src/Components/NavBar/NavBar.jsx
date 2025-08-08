import React, { useEffect } from 'react'   
import './NavBar.css'

function NavBar({ scrollToSection }) {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-anchor');
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, { threshold: 0.6 });
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="Navbar">
        <div className="TopLogo">
            <a href="#">mosesfdo</a>
            <p>Full Stack Developer</p>
        </div>

        <div className="Navlinks">
            <ul>
                <li><a href="#home" className="nav-anchor" onClick={scrollToSection}>Home</a></li>
                <li><a href="#projects" className="nav-anchor" onClick={scrollToSection}>Projects</a></li>
                <li><a href="#about" className="nav-anchor" onClick={scrollToSection}>About</a></li>
            </ul>
        </div>

    </div>
  )
}

export default NavBar