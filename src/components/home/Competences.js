import Image from 'next/image';
import BounceComing from '../../animation/BounceComing';
import FadeInOut from '../../animation/FadeInOut';
import LinkButton from '../../ui/LinkButton';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useWindowSize } from '../../hooks/useWindowSize';

const Competences = ({ texts }) => {
    const { title, content } = texts.fields;
    const titleFirstLine = title.split(' ').slice(0, 2).join(' ');
    const titleSecondLine = title.split(' ').slice(2, 5).join(' ');

    const responsive = useWindowSize();
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
            <section className="new-section">
                {responsive !== 'mobile' && responsive !== 'tablet' && (
                    <h2 className="title-lead">
                        <span className="first-line">{titleFirstLine}</span>
                        <span className="second-line">{titleSecondLine}</span>
                        <LinkButton name="Voir nos réalisations" link="/realisations" />
                    </h2>
                )}
                <div className="yellow-block">
                    {responsive !== 'desktop' && <h2 className="responsive-title">{title}</h2>}
                    <div className="yellow-block-content">{documentToReactComponents(content)}</div>
                </div>
            </section>
        </>
    );
};

export default Competences;
