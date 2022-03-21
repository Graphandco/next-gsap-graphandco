import { useEffect } from 'react';
import Link from 'next/link';
import PrestationsSVG from './PrestationsSVG';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const PrestationsDescription = () => {
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
                <h2>Nous réalisons le site taillé pour vous !</h2>
                <div className="svg-wrapper">
                    <PrestationsSVG />
                </div>
                <div className="prestations-top-content">
                    <p>
                        Nous avons à coeur de définir avec vous le site qui <strong>vous ressemble</strong>. En fonction de vos besoins nous établirons ensemble
                        un cahier des charges. Chaque site est unique, car chaque entreprise l'est également. C'est pour cela qu'il est important que le site
                        soit réalisé sur-mesure, afin qu'il vous convienne comme un vêtement taillé pour vous ! Ni trop grand, ni trop petit, dans une matière
                        seyante et avec un budget qui vous correspond.
                    </p>

                    <p>
                        Vous pouvez jeter un oeil à quelques unes de
                        <Link href="/realisations">
                            <a> nos réalisations </a>
                        </Link>
                        pour vous aider à établir vos besoins. Découvrez également plus d'informations en cliquant sur nos différents packs ou n'hésitez pas à
                        nous demander conseil, nous serons ravis de vous guider.
                    </p>

                    <p>
                        Nous avons forcément le site taillé pour vous ! N'hésitez pas à
                        <Link href="/contact">
                            <a> nous contacter </a>
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PrestationsDescription;
