import NavLink from './NavLink';
import { useWindowSize } from '../../hooks/useWindowSize';
import { FaHome, FaBoxOpen, FaImages, FaEnvelope, FaPenNib } from 'react-icons/fa';
import Link from 'next/link';
import Magnetic from '../Magnetic';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Nav = () => {
    const responsive = useWindowSize();
    const [path, setPath] = useState('');
    const router = useRouter();
    useEffect(() => {
        setPath(router.pathname);
    }, []);

    const navItems = [
        {
            label: 'Accueil',
            href: '/',
            mobile: <FaHome />,
        },
        {
            label: 'Prestations',
            href: '/prestations',
            mobile: <FaBoxOpen />,
        },
        {
            label: 'Réalisations',
            href: '/realisations',
            mobile: <FaImages />,
        },
        {
            label: 'Contact',
            href: '/contact',
            mobile: <FaEnvelope />,
        },
    ];
    return (
        <CustomNav>
            {navItems.map((link, index) => (
                <Magnetic key={index}>
                    <div className="navlink">
                        <CustomLink href={link.href} className={path === `${link.href}` ? 'active' : 'el'}>
                            {/* {link.label} */}
                            {responsive === 'mobile' ? link.mobile : link.label}
                        </CustomLink>
                        <div className="indicator"></div>
                    </div>
                </Magnetic>
            ))}

            {/* <Link href="/" delay={2}>
                <Magnetic>
                    <CustomLink className="hey">{responsive === 'mobile' ? <FaHome /> : 'Accueil'}</CustomLink>
                </Magnetic>
            </Link>
            <NavLink href="/prestations" delay={2.1}>
                {responsive === 'mobile' ? <FaBoxOpen /> : 'Prestations'}
            </NavLink>
            <NavLink href="/realisations" delay={2.2}>
                {responsive === 'mobile' ? <FaImages /> : 'Réalisations'}
            </NavLink>
            <NavLink href="/blog" delay={2.3}>
                {responsive === 'mobile' ? <FaPenNib /> : 'Blog'}
            </NavLink>
            <NavLink href="/contact" delay={2.4}>
                {responsive === 'mobile' ? <FaEnvelope /> : 'Contact'}
            </NavLink> */}
        </CustomNav>
    );
};

export default Nav;

const CustomNav = styled.nav`
    display: flex;
    @media (max-width: 767px) {
        justify-content: space-between;
    }
    .navlink {
        flex-grow: 1;
    }
`;

const CustomLink = styled.a`
    display: inline-block;
    position: relative;
    padding: 10px 16px;
    /* margin-top: 4px; */
    font-size: 20px;
    color: var(--text-color);
    transition: 0.3s;
    background: none !important;
    text-decoration: none;
    cursor: pointer;
    /* opacity: 0; */
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
        transition: 0.3s;
        opacity: 0;
    }
    &:hover:before,
    &.active:before {
        opacity: 1;
    }
`;
