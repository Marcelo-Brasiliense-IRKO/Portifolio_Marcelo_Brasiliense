import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../../data/portfolio';
import { useWordReveal, SplitWords } from '../../hooks/useWordReveal';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
    const h2Ref = useWordReveal();

    useEffect(() => {
        const matchMedia = gsap.matchMedia();
        matchMedia.add('(prefers-reduced-motion: no-preference)', () => {
            gsap.from('.proj-card', {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.projects-grid',
                    start: 'top 80%',
                    once: true,
                },
            });
        });
        return () => matchMedia.revert();
    }, []);

    return (
        <section id="projects" aria-labelledby="projects-heading">
            <div className="container">
                <div className="section-header">
                    <div>
                        <span className="eyebrow">07 / PROJETOS</span>
                        <h2 className="section-h2" id="projects-heading" ref={h2Ref}>
                            <SplitWords text="Trabalhos Selecionados" />
                        </h2>
                    </div>
                    <a href="#contact" className="section-link" aria-label="Ver todos os projetos">Ver todos →</a>
                </div>

                <div className="projects-grid" role="list">
                    {projects.map((proj) => (
                        <article key={proj.id} className="proj-card" role="listitem" tabIndex={0} aria-label={`Projeto ${proj.title}`}>
                            <div className="proj-thumb" aria-hidden="true" style={{ overflow: 'hidden' }}>
                                {proj.image ? (
                                    <img src={proj.image} alt={proj.alt} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                                ) : (
                                    <div className="proj-thumb-bg" style={{ background: 'linear-gradient(135deg, #0a0a1a, #1a0a2d)' }}>
                                        {proj.emoji}
                                    </div>
                                )}
                            </div>
                            <div className="proj-body">
                                <div className="proj-tags">
                                    {proj.tags.map(tag => <span key={tag} className="proj-tag">{tag}</span>)}
                                </div>
                                <h3 className="proj-title">{proj.title}</h3>
                                <p className="proj-desc">{proj.desc}</p>
                                <div className="proj-footer">
                                    <span className="proj-year">{proj.year}</span>
                                    <div className="proj-arrow" aria-hidden="true">↗</div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
