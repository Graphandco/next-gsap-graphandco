import Image from 'next/image';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import FadeInOut from '../../animation/FadeInOut';
import ScaleInOut from '../../animation/ScaleInOut';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import LinkButton from '../LinkButton';
import PageTitle from '../PageTitle';

const SingleRealisation = ({ realisation }) => {
    const { title, slug, content, link } = realisation.fields;
    const image = realisation.fields.featured.fields.file;
    let siteLogo = '';
    if (realisation.fields.logo) {
        siteLogo = realisation.fields.logo.fields.file;
    }

    return realisation.fields ? (
        <>
            <PageTitle title={title} bodyID={slug} />
            <section className="realisation">
                <div className="realisation__wrapper container">
                    <div className="realisation__content">
                        <div className="realisation__description">
                            <FadeInOut delay={1} x={-30}>
                                <Link href="/realisations">
                                    <a className="realisation__back">
                                        <FaLongArrowAltLeft />
                                        Retour aux réalisations
                                    </a>
                                </Link>
                            </FadeInOut>
                            {siteLogo && (
                                <FadeInOut delay={1.4} x={-30}>
                                    <div className="realisation__logo">
                                        <Image src={'https:' + siteLogo.url} width={siteLogo.details.image.width} height={siteLogo.details.image.height} />
                                    </div>
                                </FadeInOut>
                            )}
                            <FadeInOut delay={1.8} x={-30}>
                                {documentToReactComponents(content)}
                            </FadeInOut>
                        </div>

                        <ScaleInOut as="div" delay={3}>
                            <LinkButton name="Voir le site" link={link} newTab />
                        </ScaleInOut>
                    </div>
                    <div className="realisation__featured">
                        <FadeInOut delay={2} x={30}>
                            <Image src={'https:' + image.url} width={image.details.image.width} height={image.details.image.height} quality={100} />
                        </FadeInOut>
                    </div>
                </div>
            </section>
        </>
    ) : (
        <div>Loading</div>
    );
};

export default SingleRealisation;
