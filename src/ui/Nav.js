import NavHome from "./NavHome"
import NavLink from "./NavLink"
import { useWindowSize } from "../hooks/useWindowSize"
import { FaHome, FaBoxOpen, FaImages, FaEnvelope } from "react-icons/fa"

const Nav = () => {
    const responsive = useWindowSize()
    return (
        <nav>
            <NavHome />
            <div className="header__right">
                <NavLink href="/" delay={3}>
                    {responsive === "mobile" ? <FaHome /> : "Accueil"}
                </NavLink>
                <NavLink href="/prestations" delay={3.1}>
                    {responsive === "mobile" ? <FaBoxOpen /> : "Prestations"}
                </NavLink>
                <NavLink href="/realisations" delay={3.2}>
                    {responsive === "mobile" ? <FaImages /> : "Réalisations"}
                </NavLink>
                <NavLink href="/contact" delay={3.3}>
                    {responsive === "mobile" ? <FaEnvelope /> : "Contact"}
                </NavLink>
            </div>
        </nav>
    )
}

export default Nav
