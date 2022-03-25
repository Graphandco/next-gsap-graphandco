import Link from 'next/link';
import styled from 'styled-components';

const LinkButton = ({ name, newTab, link, dark }) => {
    return (
        <Button dark={dark}>
            {link ? (
                <Link href={link}>
                    <a target={`${newTab ? '_blank' : '_self'}`}>
                        <span>{name}</span>
                    </a>
                </Link>
            ) : (
                <span>{name}</span>
            )}
        </Button>
    );
};

const Button = styled.button`
    padding: 12px 25px;
    background: transparent;
    outline: none;
    /* border: 2px solid var(--primary); */
    border: 2px solid ${(props) => (props.dark ? 'var(--secondary)' : 'var(--primary)')};
    border-radius: 50px;
    cursor: pointer;
    position: relative;
    @media (max-width: 767px) {
        padding: 10px 20px;
    }
    &:before {
        content: '';
        position: absolute;
        inset: 0;
        background: ${(props) => (props.dark ? 'var(--secondary)' : 'var(--primary)')};
        border-radius: 50px;
        z-index: 0;
        clip-path: circle(0% at 0 100%);
        transition: 0.4s ease-in-out;
    }
    a {
        display: grid;
        place-items: center;
    }

    span {
        padding-inline: 10px;
        position: relative;
        z-index: 1;
        text-transform: uppercase;
        font-family: var(--title-font);
        font-size: 20px;
        color: ${(props) => (props.dark ? 'var(--secondary)' : 'var(--primary)')};
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
            color: ${(props) => (props.dark ? 'var(--primary)' : 'var(--secondary)')};
        }
    }
`;

export default LinkButton;
