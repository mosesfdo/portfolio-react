import React, { useEffect } from 'react'
import Waves from './Components/Waves/Waves';
import './App.css';
import aboutImg from './assets/about-image.jpg';
import TiltedCard from './Components/TiltedCard/TiltedCard';
import SocialIcons from './Components/SocialIcons/SocialIcons';
import projectimg1 from './assets/tunegrab-scrn.png';
import projectimg2 from './assets/tempmail-scrn.png';
import Lenis from 'lenis'
import NavBar from "./Components/NavBar/NavBar"

  

function App() {
  const lenisRef = React.useRef(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: true,
    });
    function raf(time) {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenisRef.current && lenisRef.current.destroy();
    };
  }, []);

  const handleNavScroll = React.useCallback((e) => {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target && lenisRef.current) {
        lenisRef.current.scrollTo(target, { offset: 0 });
      }
    }
  }, []);
  return (
    <div className="app-root">
      <Waves
        lineColor="rgba(255, 255, 255, 0.21)"
        backgroundColor="rgb(0, 0, 0)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
      <div>
        <NavBar scrollToSection={handleNavScroll} />
      </div>
      <div>
        <SocialIcons />
      </div>
      <section id="home" className="hero wrapper">
        <div className="main-hero-text">
          <h2>"I build apps that do the boring stuff
            —so I can pretend I'm being productive."</h2>
          <p>— yokoso —</p>
        </div>
      </section>

    <section id="projects" className="projects wrapper">
      <div className="projects-container">
        <div className='project1'>
          <div class="card-text">
                    <h3>TuneGrab</h3>
                    <a href="https://github.com/mosesfdo/TuneGrab" target="_blank">View Project</a>
                    <p>TuneGrab is a Python application that allows users to download Spotify tracks and playlists as MP3 files using the Spotify API and yt-dlp. With a sleek, dark-themed GUI, it offers an intuitive way to manage your music collection.</p>
                    <h4>Cause:</h4>
                    <p>All I wanted was a simple app to download songs for free. After trying every sketchy tool on the internet, I gave up and built my own. TuneGrab does exactly what I wanted—no ads, no drama, just music.</p>
                </div>
        <div className="project-card-1">
          <a href="https://github.com/mosesfdo/tunegrab" target="_blank" rel="noopener noreferrer">
          <TiltedCard
            imageSrc={projectimg1}
            altText="TuneGrab - Music Downloader"
            captionText="🚀Open Project"
            containerHeight="400px"
            containerWidth="600px"
            imageHeight="400px"
            imageWidth="600px"
            rotateAmplitude={10}
            scaleOnHover={1.15}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">
                TuneGrab - Music Downloader
              </p>
            }
          />
          </a>
        </div>
        </div>

        <div className='project2'>
            <div className="card-text">
                    <h3>TempMail</h3>
                    <a href="https://github.com/mosesfdo/TempMail" target="_blank">View Project</a>
                    <p>This project is a web application designed to simplify task management and collaboration. Built with React and Node.js, it features real-time updates and intuitive drag-and-drop functionality.</p>
                    <h4>Cause:</h4>
                    <p>Inspired by the need for better team collaboration tools, this project aims to streamline workflows and enhance productivity. It’s a solution born out of necessity and refined through user feedback.</p>
                </div>
          
        <div className="project-card-2">
          <a href="https://github.com/mosesfdo/tempmail" target="_blank" rel="noopener noreferrer">
            <TiltedCard
              imageSrc={projectimg2}
              altText="TempMail - Disposable Email App"
              captionText="🚀Open Project"
              containerHeight="400px"
              containerWidth="600px"
              imageHeight="400px"
              imageWidth="600px"
              rotateAmplitude={10}
              scaleOnHover={1.15}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text">
                  TempMail - Disposable Email App
                </p>
              }
            />
          </a>
        </div>
        </div>
      </div>
    </section>
      <section id="about" className="about wrapper">
        <img src={aboutImg} alt="about-image" className="about-img" />
        <h2>
          "And he has filled him with the Spirit of God, with wisdom, with understanding,
          with knowledge and with all kinds of skills—to make artistic designs for work in
           gold, silver and bronze..."
        </h2>
        <p className="verse-mark">— Exodus 35:31-32</p>
        <p>
          I've always been curious by nature. While most people around me just used computers, 
          I found myself digging deeper—trying to understand how things worked under the hood. 
          I was constantly exploring, experimenting, and learning more than my peers. One thing 
          that always frustrated me? Finding the right software, app, or tool for what I needed. 
          Nothing ever seemed to do exactly what I wanted. That's when it hit me—'Why not build my own?'
           A simple idea, maybe even a little wild at the time—but it changed everything. 
           It pushed me to learn how to design and develop products myself. 
           That spark turned into a passion. Now, I don't just look for solutions
        </p>
        <p>—I create them.</p>
      </section>
      <section id="contact" className="contact wrapper">
        <h2>Contact</h2>
        <p>
          Got a project, an idea, or just want to connect? I'm always open to new opportunities and collaborations. 
          Reach out, and let's make something awesome.
        </p>
        <a href="mailto:dmosesfdernando@gmail.com" className='email-button'>Email</a>
      </section>
      
    </div>
  )
}

export default App