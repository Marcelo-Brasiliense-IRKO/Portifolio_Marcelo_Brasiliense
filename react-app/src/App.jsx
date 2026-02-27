import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Expertise from './components/Expertise/Expertise';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Stats from './components/Stats/Stats';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import SectionSeparator from './components/SectionSeparator/SectionSeparator';
import './styles/global.css';
import './styles/components.css';

function App() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Custom Cursor logic
    const dot = dotRef.current;
    const ring = ringRef.current;

    const matchMedia = gsap.matchMedia();
    matchMedia.add('(min-width: 769px) and (hover: hover)', () => {
      const onMove = (e) => {
        gsap.set(dot, { x: e.clientX, y: e.clientY });
        gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.18, ease: 'power2.out' });
      };

      const onEnter = () => gsap.to(ring, { scale: 1.8, duration: 0.2 });
      const onLeave = () => gsap.to(ring, { scale: 1, duration: 0.2 });

      document.addEventListener('mousemove', onMove);

      const interactives = document.querySelectorAll('a, button, .proj-card');
      interactives.forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });

      return () => {
        document.removeEventListener('mousemove', onMove);
        interactives.forEach(el => {
          el.removeEventListener('mouseenter', onEnter);
          el.removeEventListener('mouseleave', onLeave);
        });
      };
    });

    return () => matchMedia.revert();
  }, []);

  return (
    <>
      {/* Cursors */}
      <div id="cursor-dot" aria-hidden="true" ref={dotRef}></div>
      <div id="cursor-ring" aria-hidden="true" ref={ringRef}></div>

      {/* Grid decorativo */}
      <div className="grid-lines" aria-hidden="true">
        <span></span><span></span>
      </div>

      <div className="vignette-overlay" aria-hidden="true"></div>

      <Nav />
      <Hero />
      <SectionSeparator design="line" />

      <About />
      <SectionSeparator design="crosshair" />

      <Skills />
      <SectionSeparator design="minimal" />

      <Expertise />
      <SectionSeparator design="line" />

      <Experience />
      <SectionSeparator design="crosshair" />

      <Education />
      <SectionSeparator design="minimal" />

      <Stats />
      <SectionSeparator design="line" />

      <Projects />
      <SectionSeparator design="crosshair" />

      <Contact />
      <Footer />
    </>
  );
}

export default App;
