import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useCounter(target) {
    const ref = useRef(null);
    const [val, setVal] = useState(0);

    useEffect(() => {
        if (!ref.current) return;

        const matchMedia = gsap.matchMedia();

        matchMedia.add('(prefers-reduced-motion: no-preference)', () => {
            ScrollTrigger.create({
                trigger: ref.current,
                start: 'top 90%',
                once: true,
                onEnter: () => {
                    const obj = { v: 0 };
                    gsap.to(obj, {
                        v: target,
                        duration: 1.8,
                        ease: 'power2.out',
                        onUpdate: () => setVal(Math.round(obj.v)),
                    });
                },
            });
        });

        matchMedia.add('(prefers-reduced-motion: reduce)', () => {
            ScrollTrigger.create({
                trigger: ref.current,
                start: 'top 90%',
                once: true,
                onEnter: () => setVal(target),
            });
        });

        return () => matchMedia.revert();
    }, [target]);

    return { ref, val };
}
