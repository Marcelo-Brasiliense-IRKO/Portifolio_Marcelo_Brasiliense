import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skillGroups, marqueeItems } from '../../data/portfolio';
import { useWordReveal, SplitWords } from '../../hooks/useWordReveal';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
    const h2Ref = useWordReveal();
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const matchMedia = gsap.matchMedia();
        matchMedia.add('(prefers-reduced-motion: no-preference)', () => {
            // Marquee
            const track = sectionRef.current.querySelector('.marquee-track');
            if (track) track.classList.add('running');

            // Bars
            const fills = sectionRef.current.querySelectorAll('.skill-bar-fill');
            fills.forEach(bar => {
                ScrollTrigger.create({
                    trigger: bar,
                    start: 'top 90%',
                    once: true,
                    onEnter: () => gsap.to(bar, { width: bar.dataset.w + '%', duration: 1.2, ease: 'power3.out' }),
                });
            });

            // Group reveals
            const groups = sectionRef.current.querySelectorAll('.skill-group');
            gsap.from(groups, {
                y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
                scrollTrigger: { trigger: '.skills-grid', start: 'top 85%', once: true }
            });
        });

        return () => matchMedia.revert();
    }, []);

    return (
        <section id="skills" aria-labelledby="skills-heading" ref={sectionRef}>
            <div className="container">
                <span className="eyebrow">02 / SKILLS</span>
                <h2 className="section-h2" id="skills-heading" style={{ marginBottom: '64px' }} ref={h2Ref}>
                    <SplitWords text="Stack & Ferramentas" />
                </h2>
            </div>

            <div className="marquee-wrap" aria-hidden="true">
                <div className="marquee-track">
                    {marqueeItems.concat(marqueeItems).map((item, i) => (
                        <span key={i} className="marquee-item">{item}</span>
                    ))}
                </div>
            </div>

            <div className="container">
                <div className="skills-grid">
                    {skillGroups.map((group, i) => (
                        <div key={i} className="skill-group" style={{ opacity: 1, transform: 'none' }}>
                            <div className="skill-group-title">{group.title}</div>
                            <div className="skill-bars">
                                {group.skills.map((skill, j) => (
                                    <div key={j} className="skill-bar-row">
                                        <div className="skill-bar-label">
                                            <span>{skill.name}</span>
                                            <span>{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar-track">
                                            <div className="skill-bar-fill" data-w={skill.level} style={{ width: '0' }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
