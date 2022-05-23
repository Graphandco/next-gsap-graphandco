import { useEffect } from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import Link from 'next/link';
import PrestationsSVGMobile from './PrestationsSVGMobile';
import PrestationsSVG from './PrestationsSVG';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import LinkButton from '../LinkButton';
gsap.registerPlugin(ScrollTrigger);

const PrestationsDescription = () => {
    const responsive = useWindowSize();

    useEffect(() => {
        gsap.from('#main_droite', {
            x: -700,
            duration: 2,
            scrollTrigger: {
                trigger: '#main_droite',
                start: 'top bottom-=250',
            },
        });
        gsap.from('#ruban', {
            x: -700,
            duration: 2,
            scrollTrigger: {
                trigger: '#main_droite',
                start: 'top bottom-=250',
            },
        });
    }, []);

    return (
        <section className="prestations-description">
            <div className="prestations-description-wrapper container">
                <h2>Un site « sur mesure » rien que pour vous !</h2>
                <div className="svg-wrapper">{responsive === 'mobile' ? <PrestationsSVGMobile /> : <PrestationsSVG />}</div>
                <div className="prestations-top-content">
                    <p>
                        Chaque site web est unique, car chaque entreprise l'est également. Soyez exigeant : nous créons ainsi votre site « sur-mesure », afin
                        qu'il vous habille comme un vêtement taillé pour vous ! Ni trop grand, ni trop petit, dans une matière seyante et avec un budget qui
                        vous correspond.
                        {/* Découvrez également plus */}
                        {/* d'informations en cliquant sur nos différents packs. */}
                    </p>

                    <p>Jetez un oeil à quelques unes de nos créations pour vous aider à définir vos besoins.</p>

                    <LinkButton name="Voir nos réalisations" link="/realisations" />

                    {/* <p>
                        Nous avons forcément le site taillé pour vous ! N'hésitez pas à
                        <Link href="/contact">
                            <a> nous contacter </a>
                        </Link>
                    </p> */}
                </div>
            </div>
        </section>
    );
};

export default PrestationsDescription;
