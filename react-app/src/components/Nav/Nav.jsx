import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const navbar = document.getElementById('navbar');
        if (!navbar) return;

        ScrollTrigger.create({
            start: 'top -60',
            onEnter: () => navbar.classList.add('scrolled'),
            onLeaveBack: () => navbar.classList.remove('scrolled'),
        });
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <nav id="navbar" role="navigation" aria-label="Navegação principal">
                <div className="nav-inner">
                    <a href="#hero" className="nav-logo" aria-label="Início">
                        <span className="nav-logo-dot"></span>MB
                    </a>
                    <div className="nav-links" role="menubar">
                        <a href="#about" role="menuitem">Sobre</a>
                        <a href="#skills" role="menuitem">Skills</a>
                        <a href="#experience" role="menuitem">Experiência</a>
                        <a href="#projects" role="menuitem">Projetos</a>
                    </div>
                    <a href="#contact" className="nav-cta">Contato →</a>
                    <button
                        className="nav-hamburger"
                        aria-expanded={isOpen}
                        aria-controls="mobile-nav"
                        aria-label="Menu"
                        onClick={toggleMenu}
                    >
                        <span style={{ transform: isOpen ? 'rotate(45deg) translate(4px,4px)' : '' }}></span>
                        <span style={{ opacity: isOpen ? 0 : 1 }}></span>
                        <span style={{ transform: isOpen ? 'rotate(-45deg) translate(4px,-4px)' : '' }}></span>
                    </button>
                </div>
            </nav>

            <div className={`mobile-menu ${isOpen ? 'open' : ''}`} id="mobile-nav" role="dialog" aria-label="Menu mobile">
                <a href="#about" onClick={toggleMenu}>Sobre</a>
                <a href="#projects" onClick={toggleMenu}>Projetos</a>
                <a href="#skills" onClick={toggleMenu}>Skills</a>
                <a href="#contact" onClick={toggleMenu}>Contato</a>
            </div>
        </>
    );
}
