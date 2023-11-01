// import { useContext } from 'react';
import { FaMobileAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
// import { TransitionContext } from '../context/TransitionContext';
import Link from 'next/link';
import Image from 'next/image';
// import FadeInOut from '../../animation/FadeInOut';

const Footer = () => {
    // const { background } = useContext(TransitionContext);
    // const linkColor = background === 'white' ? 'green' : 'var(--primary)';

    return (
        // <FadeInOut delay={2} y={30}>
        <footer className="footer">
            <div className="footer__wrapper container">
                <div className="footer__column">
                    <div className="footer__column__title">Nous appeler</div>
                    <a href="tel:0661619998" className="footer__column__icon">
                        <FaMobileAlt />
                    </a>
                    <div className="footer__column__description">
                        <div>Par téléphone</div>
                        <a title="M'appeler" href="tel:0661619998">
                            06 61 61 99 98
                        </a>
                    </div>
                </div>
                <div className="footer__column">
                    <div className="footer__column__title">Nous écrire</div>
                    <a href="mailto:contact@graphandco.com" className="footer__column__icon">
                        <FaEnvelope />
                    </a>
                    <div className="footer__column__description">
                        <div>Par mail</div>
                        <a title="M'envoyer un email'" href="mailto:contact@graphandco.com">
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
                        1, rue de la Lucelle <br></br>68127 Sainte-Croix-en-Plaine
                    </div>
                </div>
                <div className="footer__column footer__column__links">
                    <div className="footer__column__title">Liens</div>
                    <ul>
                        <li>
                            <Link href="/mentions-legales">
                                <a>Mentions légales</a>
                            </Link>
                        </li>
                        <li>
                            {' '}
                            <Link href="/politique-de-confidentialite">
                                <a>Politique de confidentialité</a>
                            </Link>
                        </li>
                    </ul>
                    <div className="footer__column__links__description">
                        <Image src="/img/logo.svg" alt="Site Logo" width={25} height={25} />
                        Graph and Co 2023
                    </div>
                </div>
            </div>
        </footer>
        // </FadeInOut>
    );
};

export default Footer;
