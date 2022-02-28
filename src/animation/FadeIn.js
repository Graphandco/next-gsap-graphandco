import React, { useRef, useContext } from "react"
import { gsap } from "gsap"
import { Box } from "theme-ui"
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect"
import { TransitionContext } from "../context/TransitionContext"
import styled from "styled-components"

const FadeIn = ({ as, children, duration, delay, x, y, ease, stagger }) => {
    const el = useRef()

    useIsomorphicLayoutEffect(() => {
        gsap.to(el.current, {
            x: 0,
            y: 0,
            opacity: 1,
            delay: delay || 0,
            duration: duration || 0.5,
            ease: ease || "power4.out",
            stagger: stagger || 0.2,
        })
    }, [])

    return (
        // <Div ref={el} className="fade-in">
        //     {children}
        // </Div>
        <Box
            as={as || "div"}
            sx={{
                opacity: 0,
                transform: "translate(" + (x || 0) + "px, " + (y || 0) + "px)",
            }}
            ref={el}
        >
            {children}
        </Box>
    )
}

const Div = styled.div`
    opacity: 0;
    transform: transform: translate(" + (x || 0) + "px, " + (y || 0) + "px);
`

export default FadeIn
