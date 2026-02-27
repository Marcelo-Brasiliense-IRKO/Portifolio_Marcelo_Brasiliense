import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function SplitWords({ text }) {
    if (!text) return null;
    const words = text.split(/\s+/);
    return words.map((w, i) => (
        <React.Fragment key={i}>
            <span className="overflow-h"><span className="word-inner">{w}</span></span>
            {i < words.length - 1 && ' '}
        </React.Fragment>
    ));
}

export function useWordReveal(options = {}) {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) return;
        const matchMedia = gsap.matchMedia();

        matchMedia.add('(prefers-reduced-motion: no-preference)', () => {
            const words = ref.current.querySelectorAll('.word-inner');

            if (words.length === 0) return;

            const tl = gsap.timeline({
                scrollTrigger: options.triggerImmediate
                    ? null
                    : {
                        trigger: ref.current,
                        start: options.start || 'top 85%',
                        once: true,
                    },
                delay: options.delay || 0,
                onComplete: options.onComplete,
            });

            tl.fromTo(
                words,
                { y: '110%' },
                {
                    y: '0%',
                    duration: options.duration || 0.7,
                    stagger: options.stagger || 0.03,
                    ease: 'power3.out',
                }
            );
        });

        return () => matchMedia.revert();
    }, [options]);

    return ref;
}
