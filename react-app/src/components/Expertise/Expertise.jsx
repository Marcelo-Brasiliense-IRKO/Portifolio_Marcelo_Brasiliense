import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { expertise } from '../../data/portfolio';
import { useWordReveal, SplitWords } from '../../hooks/useWordReveal';

gsap.registerPlugin(ScrollTrigger);

export default function Expertise() {
    const h2Ref = useWordReveal();
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const matchMedia = gsap.matchMedia();
        matchMedia.add('(prefers-reduced-motion: no-preference)', () => {
            const items = sectionRef.current.querySelectorAll('.expertise-card');

            gsap.fromTo(items,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.12,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.expertise-grid',
                        start: 'top 85%',
                        toggleActions: 'play none none none' // Play when enters, don't reverse or reset
                    },
                }
            );
        });

        return () => matchMedia.revert();
    }, []);

    return (
        <section id="expertise" aria-labelledby="expertise-heading" ref={sectionRef}>
            <div className="container" style={{ maxWidth: '1200px' }}>
                <span className="eyebrow" style={{ display: 'block', textAlign: 'center', marginBottom: '16px' }}>03 / ESPECIALIDADES</span>
                <div className="section-header" style={{ marginBottom: '64px', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <h2 className="section-h2" id="expertise-heading" ref={h2Ref} style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', textAlign: 'center', marginBottom: '16px', fontWeight: '800' }}>
                        <SplitWords text="Expertise & Domínios" />
                    </h2>
                    <p style={{ color: 'var(--muted)', textAlign: 'center', fontSize: '1.2rem', letterSpacing: '0.02em', maxWidth: '800px' }}>Soluções estratégicas para a era da transformação digital</p>
                </div>

                <div className="expertise-grid">
                    {expertise.map((item) => (
                        <div key={item.id} className="expertise-card shine-effect">
                            <span className="material-symbols-outlined expertise-icon">{item.icon}</span>
                            <h3 className="expertise-title">{item.title}</h3>
                            <p className="expertise-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
