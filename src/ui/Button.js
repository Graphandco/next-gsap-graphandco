import React, { useRef } from "react"
import { gsap } from "gsap"
import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect"
import styled from "styled-components"
import ImplodeExplodeInOut from "../animation/ImplodeExplodeInOut"

const Button = ({ title, children, fz }) => {
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

    return <Custombutton fz={fz}>{children}</Custombutton>
}

const Custombutton = styled.button`
    position: relative;
    cursor: pointer;
    background-color: var(--primary);
    padding-block: ${(props) => (props.pb ? props.p + "px" : "10px")};
    padding-inline: ${(props) => (props.pi ? props.p + "px" : "20px")};
    border: none;
    color: var(--secondary);
    font-size: ${(props) => (props.fz ? props.fz + "px" : "18px")};
    text-transform: uppercase;
    border-radius: 5px;
    transform: scale(1);
    transition: 0.3s;
    &:after {
        content: "";
        position: absolute;
        inset: 0;
        outline: 1px solid var(--primary) !important;
        outline-offset: 0px;
        transition: 0.3s;
        border-radius: 5px;
    }
    &:hover:after,
    &:focus:after {
        outline-offset: 5px;
    }
`

export default Button
