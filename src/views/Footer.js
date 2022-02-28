import { useContext } from "react"
import { FaMobileAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { TransitionContext } from "../context/TransitionContext"
import Link from "next/link"

const Footer = () => {
    const { background } = useContext(TransitionContext)
    const linkColor = background === "white" ? "green" : "var(--primary)"

    return (
        <footer className="footer">
            <div className="footer__wrapper container">
                <div className="footer__column">
                    <div className="footer__column__title">Nous appeler</div>
                    <a href="tel:0661619998" className="footer__column__icon">
                        <FaMobileAlt />
                    </a>
                    <div className="footer__column__description">
                        <div>Par téléphone</div>
                        <a href="tel:0661619998">06 61 61 99 98</a>
                    </div>
                </div>
                <div className="footer__column">
                    <div className="footer__column__title">Nous écrire</div>
                    <a href="tel:0661619998" className="footer__column__icon">
                        <FaEnvelope />
                    </a>
                    <div className="footer__column__description">
                        <div>Par mail</div>
                        <a href="mailto:contact@graphandco.com">
                            contact@graphandco.com
                        </a>
                    </div>
                </div>
                <div className="footer__column">
                    <div className="footer__column__title">Nous trouver</div>
                    <a className="footer__column__icon">
                        <FaMapMarkerAlt />
                    </a>
                    <div className="footer__column__description">
                        1, rue de la Lucelle <br></br>68127
                        Sainte-Croix-en-Plaine
                    </div>
                </div>
                <div className="footer__column footer__column-links">
                    <div className="footer__column__title">Liens</div>
                    <ul>
                        <li>
                            <Link href="/mentions-legales">
                                <a>Mentions légales</a>
                            </Link>
                        </li>
                        <li>
                            {" "}
                            <Link href="/politique-de-confidentialite">
                                <a>Politique de confidentialité</a>
                            </Link>
                        </li>
                    </ul>
                    <div className="footer__column__description">
                        Graph and Co 2022
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
