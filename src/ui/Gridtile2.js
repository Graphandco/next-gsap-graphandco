import RotateInOut3D from "../animation/RotateInOut3D"
import styled from "styled-components"

const GridTile2 = ({ children, bg, bgPosition, siteContent }) => (
    <>
        <RotateInOut3D
            duration={1 + Math.random()}
            delay={0.5 + Math.random()}
            offsetY={120}
        >
            <Tile bg={bg} bgPosition={bgPosition} siteContent={siteContent}>
                {children}
            </Tile>
        </RotateInOut3D>
    </>
)

const Tile = styled.div.attrs({ className: "grid-tile" })`
    display: grid;
    place-items: center;
    overflow: hidden;
    width: 100%;
    height: 100%;
    /* min-height: 250px;
    padding: 2vw; */
    background: ${(props) => props.bg && props.bg};
    background-size: cover;
    background-position: ${(props) =>
        props.bgPosition ? props.bgPosition : "center top"};
    isolation: isolate;
    &:before {
        content: "";
        position: absolute;

        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        background: ${(props) =>
            props.siteContent
                ? "linear-gradient(transparent 0%, rgba(0,0,0,0.8))"
                : "transparent"};
        /* background: linear-gradient(transparent, rgba(0, 0, 0, 0.9)); */
        z-index: -1;
    }
    &:after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(0, 0, 0, 0.25) 100%
        );
        z-index: -1;
    }
`

export default GridTile2
