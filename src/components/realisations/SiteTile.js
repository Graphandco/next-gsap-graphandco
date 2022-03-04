import Image from "next/image"
import styled from "styled-components"
import RotateInOut3D from "../../animation/RotateInOut3D"

const SiteTile = ({ name, desc, image, link }) => {
    return (
        <RotateInOut3D
            duration={1 + Math.random()}
            delay={0.5 + Math.random()}
            offsetY={120}
        >
            <TileInner>
                <SiteImage
                    className="op5"
                    src={image}
                    width={600}
                    height={372}
                />
                <SiteName>{name}</SiteName>
            </TileInner>
        </RotateInOut3D>
    )
}

const TileInner = styled.div`
    position: relative;
    &:hover {
        img {
            filter: blur(6px);
        }
        .site-name {
            transform: translateY(50px);
        }
    }
`

const SiteImage = styled(Image)`
    filter: blur(0px);
    transition: 0.2s;
`

const SiteName = styled.div.attrs({ className: "site-name" })`
    position: absolute;
    bottom: 20px;
    right: 20px;
    color: white;
    text-transform: uppercase;
    font-family: var(--title-font);
    font-weight: bold;
    font-size: 1.2rem;
    transform: translateY(0);
    transition: 0.2s;
    &:hover {
        opacity: 0;
    }
`

export default SiteTile
