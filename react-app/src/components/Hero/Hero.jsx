import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useWordReveal, SplitWords } from '../../hooks/useWordReveal';
import { useParallax } from '../../hooks/useParallax';
import { personal, stats } from '../../data/portfolio';

export default function Hero() {
    const titleRef = useWordReveal({
        delay: 0.2, triggerImmediate: true, onComplete: () => {
            gsap.to('.hero-reveal-block', { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' });
        }
    });
    const { bgRef, containerRef } = useParallax(15);
    const mainRef = useRef(null);

    useEffect(() => {
        const matchMedia = gsap.matchMedia();
        matchMedia.add('(prefers-reduced-motion: no-preference)', () => {
            if (mainRef.current) {
                gsap.to(mainRef.current, {
                    opacity: 0,
                    y: -50,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "bottom center",
                        scrub: true,
                    }
                });
            }
        });
        return () => matchMedia.revert();
    }, []);

    return (
        <section id="hero" aria-label="Introdução" ref={containerRef}>

            {/* Background layer with high visibility video and centered image mimicking Aura AI Fashion */}
            <div className="hero-bg-container" aria-hidden="true">
                <video
                    ref={bgRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="hero-video-bg"
                >
                    <source src="/Arquivos/Whisk_igzlv2m4ytyiftzm1szxgtytugo0qtlwgtyw0sy.mp4" type="video/mp4" />
                </video>
                <div className="hero-bg-overlay"></div>
            </div>

            <div className="hero-content container">
                <div className="hero-stat-block">
                    <div className="num hero-reveal-block reveal-block">{stats[0].target}{stats[0].suffix}</div>
                    <div className="label">{stats[0].label}</div>
                </div>
                <p className="hero-desc hero-reveal-block reveal-block">
                    {personal.bio}
                </p>
            </div>

            {/* Main title overlapping the center photo */}
            <div className="hero-main" ref={mainRef}>
                <h1 className="hero-title mix-blend-mode" aria-label={personal.name} ref={titleRef}>
                    <SplitWords text="Marcelo" /><br />
                    <SplitWords text="Brasiliense" />
                </h1>
                <div className="hero-bottom">
                    <div>
                        <div className="hero-tagline"><strong>AI & Automação</strong> · Contabilidade Estratégica · Tech-Driven</div>
                        <div className="hero-coords" style={{ marginTop: '6px' }}>{personal.coords} · {personal.location}</div>
                    </div>
                    <div className="hero-scroll" aria-hidden="true"><span className="hero-scroll-line"></span> Scroll</div>
                </div>
            </div>
        </section>
    );
}
