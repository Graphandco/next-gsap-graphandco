import Logo from './Logo';
import NavLink from './NavLink';
import { useWindowSize } from '../hooks/useWindowSize';
import { FaHome, FaBoxOpen, FaImages, FaEnvelope } from 'react-icons/fa';
import Nav from './Nav';

const Header = () => {
    const responsive = useWindowSize();
    return (
        <header className="container">
            <Logo />
            <Nav />
        </header>
    );
};

export default Header;
