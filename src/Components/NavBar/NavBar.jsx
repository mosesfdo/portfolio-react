import React from 'react'   
import './NavBar.css'

function NavBar() {
  return (
    <div className="Navbar">
        <div className="TopLogo">
            <a href="#">mosesfdo</a>
            <p>Full Stack Developer</p>
        </div>

        <div className="Navlinks">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
                
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>

    </div>






  )
}

export default NavBar