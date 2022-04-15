import NavLink from './NavLink';
import { useWindowSize } from '../../hooks/useWindowSize';
import { FaHome, FaBoxOpen, FaImages, FaEnvelope, FaPenNib } from 'react-icons/fa';

const Nav = () => {
    const responsive = useWindowSize();
    return (
        <nav>
            <NavLink href="/" delay={2}>
                {responsive === 'mobile' ? <FaHome /> : 'Accueil'}
            </NavLink>
            <NavLink href="/prestations" delay={2.1}>
                {responsive === 'mobile' ? <FaBoxOpen /> : 'Prestations'}
            </NavLink>
            <NavLink href="/realisations" delay={2.2}>
                {responsive === 'mobile' ? <FaImages /> : 'Réalisations'}
            </NavLink>
            {/* <NavLink href="/blog" delay={2.3}>
                {responsive === 'mobile' ? <FaPenNib /> : 'Blog'}
            </NavLink> */}
            <NavLink href="/contact" delay={2.4}>
                {responsive === 'mobile' ? <FaEnvelope /> : 'Contact'}
            </NavLink>
        </nav>
    );
};

export default Nav;
