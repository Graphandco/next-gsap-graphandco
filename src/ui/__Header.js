import Logo from './__Logo';
import NavLink from './__NavLink';
import { useWindowSize } from '../hooks/useWindowSize';
import { FaHome, FaBoxOpen, FaImages, FaEnvelope } from 'react-icons/fa';
import Nav from './__Nav';

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
