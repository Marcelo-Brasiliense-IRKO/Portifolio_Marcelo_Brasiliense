import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { education } from '../../data/portfolio';
import { useWordReveal, SplitWords } from '../../hooks/useWordReveal';

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
    const h2Ref = useWordReveal();
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const matchMedia = gsap.matchMedia();
        matchMedia.add('(prefers-reduced-motion: no-preference)', () => {
            const items = sectionRef.current.querySelectorAll('.edu-entry-row');

            gsap.fromTo(items,
                { opacity: 0, x: 20 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.edu-entries-container',
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    },
                }
            );
        });

        return () => matchMedia.revert();
    }, []);

    return (
        <section id="education" aria-labelledby="education-heading" ref={sectionRef} className="edu-section">
            <div className="container">
                <div className="edu-section-grid">
                    {/* Sticky Header Column */}
                    <div className="edu-sticky-header">
                        <span className="eyebrow">05 / FORMAÇÃO</span>
                        <h2 className="section-h2" id="education-heading" ref={h2Ref}>
                            <SplitWords text="Fundação Acadêmica" />
                        </h2>
                        <p className="edu-desc">
                            Educação contínua focada na interseção de finanças globais, tecnologia de gestão e inteligência artificial.
                        </p>
                    </div>

                    {/* Entries Column */}
                    <div className="edu-entries-container">
                        {education.map((item, index) => (
                            <div key={item.id} className="edu-entry-row">
                                <div className="edu-entry-visual">
                                    <div className="edu-entry-bullet">
                                        <span className="material-symbols-outlined">{item.icon}</span>
                                    </div>
                                    <span className="edu-entry-num">0{index + 1}</span>
                                </div>
                                <div className="edu-entry-content">
                                    <h3 className="edu-entry-degree">{item.degree}</h3>
                                    <p className="edu-entry-school">{item.school}</p>
                                    <span className="edu-entry-date">{item.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
