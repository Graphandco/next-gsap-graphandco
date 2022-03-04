import NavLink from './__NavLink';
import { useWindowSize } from '../hooks/useWindowSize';
import { FaHome, FaBoxOpen, FaImages, FaEnvelope } from 'react-icons/fa';

const Nav = () => {
    const responsive = useWindowSize();
    return (
        <nav>
            <NavLink href="/" delay={3}>
                {responsive === 'mobile' ? <FaHome /> : 'Accueil'}
            </NavLink>
            <NavLink href="/prestations" delay={3.1}>
                {responsive === 'mobile' ? <FaBoxOpen /> : 'Prestations'}
            </NavLink>
            <NavLink href="/realisations" delay={3.2}>
                {responsive === 'mobile' ? <FaImages /> : 'Réalisations'}
            </NavLink>
            <NavLink href="/contact" delay={3.3}>
                {responsive === 'mobile' ? <FaEnvelope /> : 'Contact'}
            </NavLink>
        </nav>
    );
};

export default Nav;
