import React from 'react'
import  './FloatingBar.css'

function FloatingBar() {
  return (
    <div className="floating-bar">
        <div className="floating-bar-content">
            <div className="bar-icons">
                <a href=""><img src="./public/home.svg" alt="" /></a>
                <a href=""><img src="./public/linkedinicon.svg" alt="" /></a>
                <a href=""><img src="./public/instagram.svg" alt="" /></a>
                <a href=""><img src="./public/githubicon.svg" alt="" /></a>
            </div>

            <a href="#contact" className='contact-button'>Contact</a>
          
        </div>
    </div>
  )
}

export default FloatingBar