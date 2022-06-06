import { useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import { FaSmile, FaCode, FaSadCry } from 'react-icons/fa';
import { GiSwordsPower } from 'react-icons/gi';

const Rassurance = () => {
    useEffect(() => {
        const items = document.querySelectorAll('.rassurance-number span');

        gsap.from(items, {
            textContent: 0,
            duration: 4,
            ease: 'power1.in',
            snap: { textContent: 1 },
            stagger: {
                each: 1.0,
                onUpdate: function () {
                    this.targets()[0].innerHTML = numberWithCommas(Math.ceil(this.targets()[0].textContent));
                },
            },
            scrollTrigger: {
                start: 'top bottom-=100',
                trigger: '.rassurance',
                //toggleActions: 'play none none reverse',
            },
        });

        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
    }, []);

    return (
        <section className="rassurance">
            <div className="rassurance-wrapper container">
                <div className="rassurance-item">
                    <FaSmile />
                    <div className="rassurance-number">
                        <span>97</span>%
                    </div>
                    <div className="rassurance-title">Fidélisation client</div>
                </div>
                <div className="rassurance-item">
                    <GiSwordsPower />
                    <div className="rassurance-number">
                        <span>15</span>
                    </div>
                    <div className="rassurance-title">Ans d'expérience</div>
                </div>
                <div className="rassurance-item">
                    <FaCode />
                    <div className="rassurance-number">
                        <span>295123</span>
                    </div>
                    <div className="rassurance-title">Lignes de code</div>
                </div>
                <div className="rassurance-item">
                    <FaSadCry />
                    <div className="rassurance-number">
                        <span>12</span>
                    </div>
                    <div className="rassurance-title">Demandes de réparation d'imprimante</div>
                </div>
            </div>
        </section>
    );
};

export default Rassurance;
