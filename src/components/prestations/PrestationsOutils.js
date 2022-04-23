import { useRef, useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import Image from 'next/image';
import { FaCode } from 'react-icons/fa';

const PrestationsOutils = () => {
    const descRef = useRef(null);

    const outils = [
        'html',
        'css',
        'javascript',
        'php',
        'wordpress',
        'woocommerce',
        'elementor',
        'prestashop',
        'react',
        'next.js',
        'strapi',
        'photoshop',
        'xd',
        'illustrator',
    ];

    useEffect(() => {
        gsap.to(descRef.current, {
            x: 0,
            duration: 1,
            delay: 0.3,
            ease: 'expo.out',
            scrollTrigger: {
                trigger: descRef.current,
                start: 'top bottom-=180',
            },
        });
    });

    return (
        <section className="prestations-tools">
            <div className="prestations-tools-description" ref={descRef}>
                <FaCode />
                <h3>Quelques outils et langages que nous utilisons pour la création de nos sites !</h3>
            </div>
            <div className="prestations-tools-wrapper container">
                <div className="prestations-tools-list">
                    {outils.map((outil) => (
                        <div className="tool-item" key={outil}>
                            <Image width={20} height={20} src={`/tools/${outil}.png`} alt={outil} />
                            <span className="tool-item-name">{outil}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PrestationsOutils;
