import { gsap } from 'gsap';
import { useRef } from 'react';
import useIsomorphicLayoutEffect from '../../animation/useIsomorphicLayoutEffect';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const NavLink = ({ children, href, delay }) => {
    const el = useRef();

    useIsomorphicLayoutEffect(() => {
        gsap.set(el.current, { y: 20 });
        gsap.to(el.current, {
            y: 0,
            opacity: 1,
            duration: 1,
            delay,
            ease: 'back.out',
        });
    }, []);

    const router = useRouter();
    return (
        <Link href={href}>
            <CustomLink className={`${router.pathname === href ? 'active' : ''}`} ref={el}>
                {children}
            </CustomLink>
        </Link>
    );
};

const CustomLink = styled.span`
    display: inline-block;
    padding: 0 16px;
    /* margin-top: 4px; */
    font-size: 20px;
    font-weight: 600;
    color: var(--text-color);
    transition: 0.3s;
    background: none !important;
    text-decoration: none;
    cursor: pointer;
    opacity: 0;
    @media (max-width: 767px) {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        text-align: center;
        margin-top: 0;
        &:before {
            transition: 0s;
        }
        &.active:before {
            left: calc(50% - 23px);
        }
        &:not(:last-child) {
            border-right: 1px solid rgba(255, 255, 255, 0.05);
        }
    }
    &:hover,
    &.active {
        color: white;
    }
    &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 8px;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: var(--primary);
        z-index: -1;
        transition: 0.3s;
        opacity: 0;
    }
    &:hover:before,
    &.active:before {
        opacity: 1;
    }
`;

export default NavLink;
