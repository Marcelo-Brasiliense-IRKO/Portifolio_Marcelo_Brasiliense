import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { experience } from '../../data/portfolio';
import { useWordReveal, SplitWords } from '../../hooks/useWordReveal';

export default function Experience() {
    const h2Ref = useWordReveal();
    const sectionRef = useRef(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { x: 50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const markerVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.2 }
        }
    };

    return (
        <section id="experience" aria-labelledby="experience-heading" ref={sectionRef}>
            <div className="container" style={{ maxWidth: '1100px' }}>
                <div style={{ textAlign: 'left', marginBottom: '80px', paddingLeft: '60px' }}>
                    <span className="eyebrow">04 / EXPERIÊNCIA</span>
                    <h2 className="section-h2" id="experience-heading" ref={h2Ref} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '10px' }}>
                        <SplitWords text="Trajetória Profissional" />
                    </h2>
                </div>

                <motion.div
                    className="experience-vertical-timeline"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {experience.map((exp, index) => (
                        <div key={exp.id} className="experience-item-wrapper" style={{ paddingLeft: '80px' }}>
                            <motion.div className="experience-marker" variants={markerVariants}>
                                <span className="material-symbols-outlined">
                                    {index === 0 ? 'rocket_launch' : index === 1 ? 'hub' : 'shield_person'}
                                </span>
                            </motion.div>

                            <motion.div
                                className="experience-card-new"
                                variants={itemVariants}
                                whileHover={{ x: 10, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(0, 123, 255, 0.3)' }}
                            >
                                <div className="experience-card-header">
                                    <h3 className="experience-card-title">{exp.title}</h3>
                                    <span className="experience-card-date">{exp.date}</span>
                                </div>
                                <div className="experience-card-meta">
                                    <span className="experience-card-company">{exp.company}</span>
                                    {exp.location && <span className="experience-card-location"> · {exp.location}</span>}
                                </div>

                                <p className="experience-context">{exp.context}</p>

                                <div className="experience-content-grid">
                                    <div className="experience-deliverables">
                                        <h4>Principais Entregas:</h4>
                                        <ul className="experience-card-list">
                                            {exp.deliverables.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="experience-impact-container">
                                        <h4>Impacto Gerado:</h4>
                                        <div className="experience-impact-list">
                                            {exp.impact.map((item, i) => (
                                                <div key={i} className="impact-item">
                                                    <span className="material-symbols-outlined impact-icon">trending_up</span>
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="experience-stack">
                                    <div className="stack-badges">
                                        {exp.stack.map((tech, i) => (
                                            <motion.span
                                                key={i}
                                                className="stack-badge"
                                                whileHover={{ y: -2, color: 'var(--primary)', borderColor: 'var(--primary)', backgroundColor: 'rgba(0, 123, 255, 0.05)' }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
