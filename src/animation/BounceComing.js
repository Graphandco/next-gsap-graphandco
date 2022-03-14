import React, { useRef, useContext } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/dist/SplitText';
import { Box } from 'theme-ui';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';
import { TransitionContext } from '../context/TransitionContext';
import { randomNumber } from './util';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(SplitText);

const BounceComing = ({ children, target, delay, durationIn, durationOut }) => {
    const { timeline } = useContext(TransitionContext);
    const el = useRef();

    useIsomorphicLayoutEffect(() => {
        const splitText = new SplitText(target);
        const chars = splitText.chars;
        chars.forEach((char) => {
            // intro animation
            gsap.fromTo(
                char,
                {
                    x: 0,
                    y: -150,
                    z: randomNumber(100, 100),
                    opacity: 0,
                    rotation: randomNumber(360, 720),
                    rotationX: randomNumber(-360, 360),
                    rotationY: randomNumber(-360, 360),
                    ease: 'power4.out',
                },
                {
                    x: 0,
                    y: 0,
                    z: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    opacity: 1,
                    duration: durationIn || 0.75,
                    delay: delay + Math.random() * 0.5 || 0.5 + Math.random() * 0.5,
                    ease: 'power4.out',
                    scrollTrigger: {
                        start: 'top bottom-=200',
                        trigger: char,
                        scrub: true,
                        //toggleActions: 'play none none reverse',
                    },
                }
            );

            // outro animation
            timeline.add(
                gsap.to(char, 1, {
                    x: randomNumber(-2000, 2000),
                    y: randomNumber(-1000, 1000),
                    z: randomNumber(100, 100),
                    opacity: 0,
                    rotation: randomNumber(360, 720),
                    rotationX: randomNumber(-360, 360),
                    rotationY: randomNumber(-360, 360),
                    ease: 'power4.in',
                    duration: durationOut || 0.1,
                }),
                0
            );
        });

        gsap.set(el.current, {
            opacity: 1,
        });
    }, []);

    return (
        <Box sx={{ opacity: 0 }} ref={el}>
            {children}
        </Box>
    );
};

export default BounceComing;
