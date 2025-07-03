import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Waves from './Components/Waves/Waves';
import './App.css';

function App() {
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
        opacity={0.2}
      />
      <div>
        <NavBar />
      </div>
      <section id="home" className="hero wrapper">
        <div className="main-hero-text">
          <h2>"I build apps that do the boring stuff
            —so I can pretend I'm being productive."</h2>
          <p>— yokoso —</p>
        </div>
      </section>

      <section id="about" className="about wrapper">
            <img src="src\assets\about-image.jpg" alt="about-image" className="about-img" />
            <h2>"And he has filled him with the Spirit of God, with wisdom, with understanding,
                 with knowledge and with all kinds of skills—to make artistic 
                 designs for work in gold, silver and bronze..."</h2>
            <p className="verse-mark">— Exodus 35:31-32</p>
            <p>I've always been curious by nature. While most people around me 
                just used computers, I found myself digging deeper—trying to
                 understand how things worked under the hood. I was constantly 
                 exploring, experimenting, and learning more than my peers. 
                 One thing that always frustrated me? Finding the right software,
                  app, or tool for what I needed. Nothing ever seemed to do exactly
                   what I wanted. That's when it hit me—'Why not build my own?' 
                   A simple idea, maybe even a little wild at the time—but it
                    changed everything. It pushed me to learn how to design and
                     develop products myself. That spark turned into a passion. 
                     Now, I don't just look for solutions

                    </p>
                    <p>—I create them.</p>
      </section>
    </div>
  )
}

export default App