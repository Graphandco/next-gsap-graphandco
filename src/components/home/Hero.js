import { useEffect } from 'react';
import ImplodeExplodeInOut from '../../animation/ImplodeExplodeInOut';
import FadeInOutUp from '../../animation/FadeInOutUp';
import ScaleInOut from '../../animation/ScaleInOut';
import LottieRocket from '../../animation/lottie/LottieRocket';
import LinkButton from '../LinkButton';

const Hero = () => {
    useEffect(() => {
        document.body.setAttribute('id', 'index');
        window.scrollTo(0, 0);
        return () => {
            document.body.removeAttribute('id', 'index');
        };
    }, []);

    return (
        <>
            <section className="hero">
                <div className="hero-content container">
                    <FadeInOutUp delay={1} y={-40}>
                        <div className="hero-subtitle">Un métier, une passion</div>
                    </FadeInOutUp>
                    <ImplodeExplodeInOut target=".hero-title">
                        <h1>
                            <div className="hero-title">Création de sites web</div>
                        </h1>
                    </ImplodeExplodeInOut>
                    <FadeInOutUp delay={2}>
                        <div className="hero-description">Nous sommes spécialisés dans la réalisation de sites web modernes et intuitifs.</div>
                    </FadeInOutUp>
                    <ScaleInOut as="div" delay={3} yellow>
                        <div className="hero-cta">
                            <LinkButton name="Voir nos prestations" link="/prestations" />
                        </div>
                    </ScaleInOut>
                </div>
                <FadeInOutUp delay={1.8} y={100}>
                    <div className="hero-lottie">
                        <LottieRocket />
                    </div>
                </FadeInOutUp>
            </section>
        </>
    );
};

export default Hero;
