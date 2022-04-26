import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import useIsomorphicLayoutEffect from '../animation/useIsomorphicLayoutEffect';
import styled from 'styled-components';
import ImplodeExplodeInOut from '../animation/ImplodeExplodeInOut';
import FadeInOut from '../animation/FadeInOut';

const Pagetitle = ({ title, bodyID }) => {
    const lineRef = useRef();

    useIsomorphicLayoutEffect(() => {
        gsap.to(lineRef.current, {
            opacity: 1,
            duration: 1,
            x: 0,
            delay: 0.2,
            ease: 'elastic.out',
        });
    });

    useEffect(() => {
        document.body.setAttribute('id', bodyID ? bodyID : 'page');
        window.scrollTo(0, 0);
        return () => {
            document.body.removeAttribute('id', bodyID ? bodyID : 'page');
        };
    }, [bodyID && bodyID]);

    return (
        <Title>
            <ImplodeExplodeInOut target="h1">{title}</ImplodeExplodeInOut>
            <FadeInOut>
                <TitleLine ref={lineRef} />
            </FadeInOut>
        </Title>
    );
};

const Title = styled.h1`
    margin: 0 auto;
    max-width: 1600px;
    position: relative;
    padding: 50px clamp(15px, 2.5vw, 50px);
    font-size: clamp(38px, 28px + 2vw, 50px);
    color: white;
    font-family: var(--title-font);
    @media (max-width: 767px) {
        padding: 25px 2vw;
    }
`;

const TitleLine = styled.span`
    opacity: 0;
    transform: translateX(-200px);
    position: absolute;
    left: 0;
    bottom: -10px;
    width: calc(300px + 5vw);
    height: 2px;
    background: linear-gradient(90deg, var(--primary) 0, rgba(255, 255, 255, 0));
    border-radius: 50px;
`;

export default Pagetitle;
