import PageTitle from '../../ui/PageTitle';
import Image from 'next/image';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import LinkButton from '../../ui/LinkButton';
import FadeInOut from '../../animation/FadeInOut';
import ScaleInOut from '../../animation/ScaleInOut';
import { FaLongArrowAltLeft } from 'react-icons/fa';

const SingleRealisation = ({ realisation }) => {
    const { title, slug, content, link, logo } = realisation.fields;
    const image = realisation.fields.featured.fields.file;
    const siteLogo = realisation.fields.logo.fields.file;
    return (
        <>
            <PageTitle title={title} bodyID={slug} />
            <section className="realisation">
                <div className="realisation__wrapper container">
                    <FadeInOut delay={1.2} x={-30}>
                        <div className="realisation__content">
                            <div className="realisation__description">
                                <FadeInOut delay={3} x={30}>
                                    <Link href="/realisations">
                                        <a className="realisation__back">
                                            <FaLongArrowAltLeft />
                                            Retour aux réalisations
                                        </a>
                                    </Link>
                                </FadeInOut>

                                {logo && (
                                    <FadeInOut delay={1.8} y={-30}>
                                        <div className="realisation__logo">
                                            <Image src={'https:' + siteLogo.url} width={siteLogo.details.image.width} height={siteLogo.details.image.height} />
                                        </div>
                                    </FadeInOut>
                                )}
                                {documentToReactComponents(content)}
                            </div>

                            <ScaleInOut as="div" delay={3}>
                                <LinkButton name="Voir le site" link={link} newTab />
                            </ScaleInOut>
                        </div>
                    </FadeInOut>
                    <div className="realisation__featured">
                        <FadeInOut delay={1} x={30}>
                            <Image src={'https:' + image.url} width={image.details.image.width} height={image.details.image.height} />
                        </FadeInOut>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SingleRealisation;
