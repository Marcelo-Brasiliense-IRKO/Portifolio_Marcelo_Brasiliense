import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useWordReveal, SplitWords } from '../../hooks/useWordReveal';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const h2Ref = useWordReveal();
    const formRef = useRef(null);
    const [btnText, setBtnText] = useState('Enviar mensagem →');
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        if (!formRef.current) return;
        const matchMedia = gsap.matchMedia();
        matchMedia.add('(prefers-reduced-motion: no-preference)', () => {
            ScrollTrigger.create({
                trigger: formRef.current,
                start: 'top 85%',
                once: true,
                onEnter: () => gsap.to(formRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }),
            });
        });
        return () => matchMedia.revert();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setBtnText('Enviado! ✓');
        setIsSuccess(true);
        setTimeout(() => {
            setBtnText('Enviar mensagem →');
            setIsSuccess(false);
            e.target.reset();
        }, 2500);
    };

    return (
        <section id="contact" aria-labelledby="contact-heading">
            <div className="container">
                <div className="contact-grid">
                    <div className="contact-left">
                        <span className="eyebrow">08 / CONTATO</span>
                        <h2 className="section-h2" id="contact-heading" ref={h2Ref}>
                            <SplitWords text="Vamos trabalhar juntos" />
                        </h2>
                        <p className="contact-intro">
                            Tem um projeto em mente ou quer modernizar sua operação contábil? Sinta-se à vontade para entrar em contato.
                        </p>
                        <p className="contact-sub">
                            Aberto a projetos freelance, posições full-time e parcerias estratégicas. Respondo em até 24h.
                        </p>
                        <div className="contact-links">
                            <a href="mailto:marcelo@exemplo.com" className="contact-link-item" aria-label="Enviar email">
                                <div className="clink-icon" aria-hidden="true">@</div>
                                <span>marcelo@exemplo.com</span>
                            </a>
                            <a href="https://linkedin.com/in/mbrasiliense" className="contact-link-item" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <div className="clink-icon" aria-hidden="true">in</div>
                                <span>linkedin.com/in/mbrasiliense</span>
                            </a>
                            <a href="https://github.com/mbrasiliense98" className="contact-link-item" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <div className="clink-icon" aria-hidden="true">gh</div>
                                <span>github.com/mbrasiliense98</span>
                            </a>
                        </div>
                    </div>

                    <div className="contact-right reveal-block" style={{ opacity: 0, transform: 'translateY(20px)' }} ref={formRef}>
                        <form className="form" onSubmit={handleSubmit} noValidate aria-label="Formulário de contato">
                            <div className="form-group">
                                <label className="form-label" htmlFor="f-name">Nome</label>
                                <input className="form-input" type="text" id="f-name" name="name" placeholder="Seu nome completo" required autoComplete="name" />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="f-email">E-mail</label>
                                <input className="form-input" type="email" id="f-email" name="email" placeholder="seu@email.com" required autoComplete="email" />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="f-subject">Assunto</label>
                                <input className="form-input" type="text" id="f-subject" name="subject" placeholder="Ex: Projeto freelance, parceria..." />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="f-msg">Mensagem</label>
                                <textarea className="form-input" id="f-msg" name="message" rows="5" placeholder="Me conte sobre o seu projeto..."></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn-primary"
                                style={isSuccess ? { background: '#22c55e', color: '#fff' } : {}}
                            >
                                {btnText}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
