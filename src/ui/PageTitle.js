import React, { useRef } from "react"
import { gsap } from "gsap"
import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect"
import styled from "styled-components"
import ImplodeExplodeInOut from "../animation/ImplodeExplodeInOut"
import FadeInOut from "../animation/FadeInOut"

const Pagetitle = ({ title }) => {
    const lineRef = useRef()

    useIsomorphicLayoutEffect(() => {
        gsap.to(lineRef.current, {
            opacity: 1,
            duration: 1,
            x: 0,
            delay: 0.5,
            ease: "elastic.out",
        })
    })

    return (
        <Title>
            <ImplodeExplodeInOut delay=".5" target="h1">
                {title}
            </ImplodeExplodeInOut>
            <FadeInOut>
                <TitleLine ref={lineRef} />
            </FadeInOut>
        </Title>
    )
}

const Title = styled.h1`
    position: relative;
    padding: 50px 2vw;
    font-size: clamp(38px, 28px + 2vw, 50px);
    color: white;
    font-family: var(--title-font);
`

const TitleLine = styled.span`
    opacity: 0;
    transform: translateX(-200px);
    position: absolute;
    left: 0;
    bottom: -10px;
    width: calc(300px + 5vw);
    height: 2px;
    background: linear-gradient(
        90deg,
        var(--primary) 0,
        rgba(255, 255, 255, 0)
    );
    border-radius: 50px;
`

export default Pagetitle
