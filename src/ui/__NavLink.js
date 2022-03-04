import { gsap } from 'gsap';
import { useRef } from 'react';
import useIsomorphicLayoutEffect from '../animation/useIsomorphicLayoutEffect';
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

const CustomLink = styled.a`
    opacity: 0;
    padding: 16px;
    margin-top: 4px;
    font-size: 20px;
    font-weight: 600;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
`;

export default NavLink;
