import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useParallax(strength = 20) {
    const bgRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        if (!bgRef.current || !containerRef.current) return;

        const matchMedia = gsap.matchMedia();

        matchMedia.add('(prefers-reduced-motion: no-preference)', () => {
            gsap.to(bgRef.current, {
                yPercent: strength,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });
        });

        return () => matchMedia.revert();
    }, [strength]);

    return { bgRef, containerRef };
}
