import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { techStack, principles } from '../../data/portfolio';
import { useWordReveal, SplitWords } from '../../hooks/useWordReveal';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const h2Ref = useWordReveal();
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current) return;
        const blocks = sectionRef.current.querySelectorAll('.about-reveal-block');

        const matchMedia = gsap.matchMedia();
        matchMedia.add('(prefers-reduced-motion: no-preference)', () => {
            blocks.forEach(el => {
                ScrollTrigger.create({
                    trigger: el,
                    start: 'top 88%',
                    onEnter: () => gsap.to(el, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }),
                });
            });
        });

        return () => matchMedia.revert();
    }, []);

    return (
        <section id="about" aria-labelledby="about-heading" ref={sectionRef}>
            <div className="container" style={{ maxWidth: '1200px' }}>
                <span className="eyebrow">01 / SOBRE</span>
                <div className="about-grid">
                    {/* Imagem (Coluna 1) com moldura lateral estilizada */}
                    <div className="about-left about-reveal-block reveal-block">
                        <div className="about-img-container">
                            <div className="about-accent-top-left"></div>
                            <div className="about-accent-bottom-right"></div>
                            <img
                                src="/Arquivos/ChatGPT Image 27 de fev. de 2026, 16_48_26.png"
                                alt="Marcelo Brasiliense"
                                className="about-img grayscale-hover"
                            />
                        </div>
                    </div>

                    {/* Conteúdo (Colunas 2 e 3) */}
                    <div className="about-right space-y-8">
                        <h2 className="about-h2 about-reveal-block reveal-block" id="about-heading" ref={h2Ref}>
                            <SplitWords text="Perfil Híbrido:" /><br />
                            <span style={{ color: 'var(--primary)' }}><SplitWords text="Contabilidade + Tech + IA" /></span>
                        </h2>

                        <div className="about-desc about-reveal-block reveal-block">
                            <p>Baseado no <span style={{ color: 'var(--text)', fontWeight: '500' }}>Rio de Janeiro, Brasil</span>, uno a contabilidade societária e fiscal à tecnologia de ponta.</p>
                            <p>Com mais de uma década de experiência em operações contábeis de larga escala, sou especialista em modernizar processos legados usando Python, Agentes de IA e arquiteturas em nuvem.</p>
                            <p>Minha missão é eliminar redundâncias manuais, permitindo que times contábeis evoluam do registro de dados para a consultoria estratégica de alto valor.</p>
                        </div>

                        {/* Estatísticas / Conquistas */}
                        <div className="about-stats-container about-reveal-block reveal-block">
                            <div className="about-stat-item">
                                <span className="about-stat-num">10+</span>
                                <span className="about-stat-label">Anos de Experiência</span>
                            </div>
                            <div className="about-stat-item">
                                <span className="about-stat-num">50+</span>
                                <span className="about-stat-label">Automações Criadas</span>
                            </div>
                            <div className="about-stat-item">
                                <span className="about-stat-num">40%</span>
                                <span className="about-stat-label">Ganho Médio de Eficiência</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
