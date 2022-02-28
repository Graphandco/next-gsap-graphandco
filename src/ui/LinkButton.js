import Link from "next/link"
import styled from "styled-components"

const LinkButton = ({ name, newTab, link }) => {
  return (
    <Button>
      {link ? (
        <Link href={link}>
          <a target={`${newTab ? "_blank" : "_self"}`}>
            <span>{name}</span>
          </a>
        </Link>
      ) : (
        <span>{name}</span>
      )}
    </Button>
  )
}

const Button = styled.button`
  padding: 15px 25px;
  background: transparent;
  outline: none;
  border: 2px solid var(--primary);
  border-radius: 50px;
  cursor: pointer;
  position: relative;
  @media (max-width: 767px) {
    padding: 10px 20px;
  }
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--primary);
    border-radius: 50px;
    z-index: 0;
    clip-path: circle(0% at 0 100%);
    transition: 0.4s ease-in-out;
  }

  span {
    padding-inline: 10px;
    position: relative;
    z-index: 1;
    text-transform: uppercase;
    font-family: var(--title-font);
    font-size: 20px;
    color: var(--primary);
    transition: 0.4s ease-in-out;
    @media (max-width: 767px) {
      font-size: 18px;
    }
  }
  &:hover {
    &:before {
      clip-path: circle(150% at 0 100%);
    }
    span {
      color: hsl(207deg 81% 11%);
    }
  }
`

export default LinkButton
