import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useWindowSize } from '../../hooks/useWindowSize';
import { gsap } from 'gsap/dist/gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import LinkButton from '../LinkButton';
import LottieComputer from '../../animation/lottie/LottieComputer';
gsap.registerPlugin(ScrollTrigger);

const Competences = ({ texts, pourquoiUnSite }) => {
    const pourquoiContent = pourquoiUnSite.fields.content;
    const pourquoiTitle = pourquoiUnSite.fields.title;

    const { title, content } = texts.fields;
    const titleFirstLine = title.split(' ').slice(0, 2).join(' ');
    const titleSecondLine = title.split(' ').slice(2, 5).join(' ');

    const titleFirstLineRef = useRef(null);
    const titleSecondLineRef = useRef(null);
    const titleRef = useRef(null);
    const btnRef = useRef(null);
    const h3Ref = useRef(null);
    const textRef = useRef(null);
    const imgRef = useRef(null);

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

        gsap.from(h3Ref.current, {
            scale: 0.1,
            opacity: 0,
            duration: 1,
            delay: 0.3,
            ease: 'elastic.out',
            scrollTrigger: {
                trigger: h3Ref.current,
                start: 'top bottom-=180',
            },
        });

        gsap.from(imgRef.current, {
            opacity: 0,
            x: 50,
            duration: 1,
            delay: 0.3,
            ease: 'elastic.out',
            scrollTrigger: {
                trigger: imgRef.current,
                start: 'top bottom-=230',
            },
        });

        ScrollTrigger.batch('.competences-wrapper p', {
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

    return (
        <>
            <section className="competences">
                <div ref={textRef} className="competences-wrapper container">
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
                    <div className="competences-content">{documentToReactComponents(content)}</div>

                    <div className="competences-subcontent">
                        <h3 ref={h3Ref}>{pourquoiTitle}</h3>
                        {documentToReactComponents(pourquoiContent)}
                    </div>
                    <div className="competences-lottie" ref={imgRef}>
                        <LottieComputer />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Competences;
