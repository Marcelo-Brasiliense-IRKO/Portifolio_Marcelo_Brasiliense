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

                <div className="projects-grid-v2" role="list">
                    {projects.map((proj, index) => (
                        <article key={proj.id} className="proj-card-v2 group" role="listitem" tabIndex={0} aria-label={`Projeto ${proj.title}`}>
                            <div className="proj-media-v2" aria-hidden="true">
                                <div className="proj-media-inner">
                                    {proj.image ? (
                                        <img src={proj.image} alt={proj.alt} loading="lazy" />
                                    ) : (
                                        <div className="proj-media-placeholder">
                                            <span className="proj-media-emoji">{proj.emoji}</span>
                                        </div>
                                    )}
                                </div>
                                {/* Optional: Ambient glow similar to Luminal */}
                                <div className="proj-media-glow"></div>
                            </div>

                            <div className="proj-content-v2">
                                <span className="proj-number-v2">0{index + 1}</span>
                                <h3 className="proj-title-v2">{proj.title}</h3>
                                <p className="proj-desc-v2">{proj.desc}</p>

                                <div className="proj-footer-v2">
                                    <div className="proj-footer-left">
                                        <a href="#contact" className="proj-explore-link">
                                            Explorar Projeto
                                            <span className="material-symbols-outlined proj-explore-arrow">arrow_outward</span>
                                        </a>
                                    </div>
                                    {proj.githubUrl && (
                                        <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="proj-github-link" aria-label="Github do Projeto">
                                            <svg viewBox="0 0 24 24" className="github-icon-svg" fill="currentColor">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
