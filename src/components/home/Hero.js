import { useEffect, useRef } from 'react';
import ImplodeExplodeInOut from '../../animation/ImplodeExplodeInOut';
import FadeInOutUp from '../../animation/FadeInOutUp';
import ScaleInOut from '../../animation/ScaleInOut';
import LottieRocket from '../../animation/lottie/LottieRocket';
import LinkButton from '../LinkButton';
import gsap from 'gsap/dist/gsap';
import Button from '../Button';
import Link from 'next/link';

const Hero = () => {
    useEffect(() => {
        document.body.setAttribute('id', 'index');
        window.scrollTo(0, 0);
        return () => {
            document.body.removeAttribute('id', 'index');
        };
    }, []);

    useEffect(() => {
        gsap.to(contentRef.current, {
            y: 100,
            opacity: 0,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'bottom bottom-=10',
                scrub: 2,
            },
        });
    }, []);

    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const rocketRef = useRef(null);

    return (
        <>
            <section className="hero container" ref={sectionRef}>
                <div className="hero-content" ref={contentRef}>
                    <FadeInOutUp delay={1} y={-40}>
                        <div className="hero-subtitle">Un métier, une passion</div>
                    </FadeInOutUp>
                    <ImplodeExplodeInOut target=".hero-title">
                        <h1>
                            <div className="hero-title">Création de sites web</div>
                        </h1>
                    </ImplodeExplodeInOut>
                    <FadeInOutUp delay={2}>
                        <div className="hero-description">
                            &#8618; Nous sommes spécialisés dans la réalisation de sites web. Moderne et intuitif, votre site sera un puissant levier pour
                            accroitre la vitalité de votre entreprise.
                        </div>
                    </FadeInOutUp>
                    {/* <ScaleInOut as="div" delay={3} yellow>
                        <div className="hero-cta">
                            <LinkButton name="Voir nos prestations" link="/prestations" />
                        </div>
                    </ScaleInOut> */}
                    <div className="hero-cta">
                        <Button>
                            <Link href="/prestations">Voir nos prestations</Link>
                        </Button>
                    </div>
                </div>
                <FadeInOutUp delay={1.8} y={100}>
                    <div className="hero-lottie" ref={rocketRef}>
                        <LottieRocket />
                    </div>
                </FadeInOutUp>
            </section>
        </>
    );
};

export default Hero;
