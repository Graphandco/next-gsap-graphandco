import Image from 'next/image';
import BounceComing from '../../animation/BounceComing';
import FadeInOut from '../../animation/FadeInOut';
import LinkButton from '../../ui/LinkButton';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useWindowSize } from '../../hooks/useWindowSize';
import { gsap } from 'gsap/dist/gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Competences = ({ texts }) => {
    const { title, content } = texts.fields;
    const titleFirstLine = title.split(' ').slice(0, 2).join(' ');
    const titleSecondLine = title.split(' ').slice(2, 5).join(' ');

    const responsive = useWindowSize();

    useEffect(() => {
        gsap.from(titleFirstLineRef.current, {
            x: -700,
            duration: 1,
            scrollTrigger: {
                trigger: titleRef.current,
                start: 'top bottom-=150',
            },
        });
        gsap.from(titleSecondLineRef.current, {
            x: -700,
            duration: 1,
            delay: 0.3,
            scrollTrigger: {
                trigger: titleRef.current,
                start: 'top bottom-=180',
            },
        });

        // gsap.to(btnRef.current, {
        //     x: -700,
        //     duration: 1,
        //     delay: 0.3,
        //     scrollTrigger: {
        //         trigger: btnRef.current,
        //         start: 'top bottom-=180',
        //     },
        // });

        gsap.from(btnRef.current, {
            scale: 0.1,
            opacity: 0,
            duration: 1,
            delay: 0.3,
            ease: 'elastic.out',
            scrollTrigger: {
                trigger: btnRef.current,
                start: 'top bottom-=180',
            },
        });

        ScrollTrigger.batch('.yellow-block-content p', {
            once: true,
            interval: 0.1,
            onEnter: (elements) => {
                gsap.to(elements, {
                    opacity: 1,
                    stagger: 0.5,
                    duration: 1.5,
                    ease: 'Expo.easeOut',
                });
            },
            start: 'top bottom-=150',
        });
    }, []);

    const titleFirstLineRef = useRef(null);
    const titleSecondLineRef = useRef(null);
    const titleRef = useRef(null);
    const btnRef = useRef(null);
    const textRef = useRef(null);

    return (
        <>
            {/* <section className="competences">
                <div className="video-wrapper">
                    <video src="/img/computer-video.mp4" autoPlay loop muted></video>
                </div>
                <div className="competences-wrapper container">
                    <div className="competences-inner">
                        <div className="competences-text">
                            {content.map((p, index) => (
                                <p key={index} dangerouslySetInnerHTML={{ __html: p }}></p>
                            ))}
                            <div className="competences-cta">
                                <LinkButton name="Voir nos réalisations" link="/realisations" />
                            </div>
                        </div>
                        <div className="competences-image">
                            <FadeInOut y={-20} delay={1.8} className="prestations__lead__image">
                                <Image width={500} height={650} src="/img/home-prestations.svg" />
                                <BounceComing target=".competences h2">
                                    <h2>
                                        Nos compétences<br></br> à votre service
                                    </h2>
                                </BounceComing>
                            </FadeInOut>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="competences">
                {responsive !== 'mobile' && responsive !== 'tablet' && (
                    <div className="title-lead">
                        <h2 ref={titleRef}>
                            <div className="first-line" ref={titleFirstLineRef}>
                                {titleFirstLine}
                            </div>
                            <div className="second-line" ref={titleSecondLineRef}>
                                {titleSecondLine}
                            </div>
                        </h2>
                        <div ref={btnRef} className="competences-cta">
                            <LinkButton name="Voir nos réalisations" link="/realisations" />
                        </div>
                    </div>
                )}
                <div className="yellow-block">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill="#1E394D"
                            d="M61.5,-16.9C71,9.3,64,43.9,46,55.1C27.9,66.3,-1.2,54,-26.4,35.8C-51.5,17.6,-72.8,-6.5,-67.7,-26.5C-62.7,-46.5,-31.3,-62.5,-2.7,-61.7C26,-60.8,52,-43.1,61.5,-16.9Z"
                            transform="translate(100 100)"
                        />
                    </svg>
                    {responsive !== 'desktop' && <h2 className="responsive-title">{title}</h2>}
                    <div ref={textRef} className="yellow-block-content">
                        {documentToReactComponents(content)}
                        {responsive !== 'desktop' && (
                            <div ref={btnRef} className="competences-cta">
                                <LinkButton dark name="Voir nos réalisations" link="/realisations" />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Competences;
