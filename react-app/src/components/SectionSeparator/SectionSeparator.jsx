import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SectionSeparator({ design = 'line' }) {
    const containerRef = useRef(null);
    const glowRef = useRef(null);
    const dotRef = useRef(null);

    useEffect(() => {
        const matchMedia = gsap.matchMedia();
        matchMedia.add('(prefers-reduced-motion: no-preference)', () => {
            if (design === 'line' && glowRef.current) {
                gsap.fromTo(
                    glowRef.current,
                    { x: '-20vw', opacity: 0 },
                    {
                        x: '100vw',
                        opacity: 1,
                        duration: 3.5,
                        ease: 'power2.inOut',
                        repeat: -1,
                        yoyo: true,
                    }
                );
            }

            if (dotRef.current) {
                gsap.fromTo(
                    dotRef.current,
                    { scale: 0.5, opacity: 0.3, boxShadow: '0 0 5px var(--primary)' },
                    {
                        scale: 1.8,
                        opacity: 1,
                        boxShadow: '0 0 20px var(--primary), 0 0 40px var(--primary)',
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: 'top 90%',
                            end: 'bottom 10%',
                            scrub: 1,
                        }
                    }
                );
            }
        });

        return () => matchMedia.revert();
    }, [design]);

    return (
        <div
            className={`section-separator sep-${design}`}
            aria-hidden="true"
            ref={containerRef}
        >
            {design === 'line' && (
                <>
                    <div className="separator-glow" ref={glowRef}></div>
                    <div className="separator-center-dot" ref={dotRef}></div>
                </>
            )}

            {design === 'crosshair' && (
                <div className="separator-crosshair-container">
                    <div className="crosshair-icon" ref={dotRef}>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="sep-dashed-line"></div>
                </div>
            )}

            {design === 'minimal' && (
                <div className="separator-minimal-container">
                    <div className="minimal-dash" ref={dotRef}></div>
                </div>
            )}
        </div>
    );
}
