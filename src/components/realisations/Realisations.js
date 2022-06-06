import FadeInOut from '../../animation/FadeInOut';
import { useWindowSize } from '../../hooks/useWindowSize';
import PageTitle from '../PageTitle';
import GridItem from './GridItem';
import LinkButton from '../LinkButton';
// import { FaPeopleArrows } from 'react-icons/fa';

const Realisations = ({ realisations }) => {
    const responsive = useWindowSize();

    //TRI DES RÉALISATIONS PAR POSITION
    const nestedSort =
        (prop1, prop2 = null, direction = 'asc') =>
        (e1, e2) => {
            const a = prop2 ? e1[prop1][prop2] : e1[prop1],
                b = prop2 ? e2[prop1][prop2] : e2[prop1],
                sortOrder = direction === 'asc' ? 1 : -1;
            return a < b ? -sortOrder : a > b ? sortOrder : 0;
        };
    realisations.sort(nestedSort('fields', 'order', 'desc'));

    return (
        <>
            <section className="realisations">
                <PageTitle title="Nos réalisations" bodyID="realisations" />
                <FadeInOut delay="1">
                    <div className="realisations-description container">
                        <p>
                            Nous vous présentons les projets réalisés pour les clients qui nous ont fait confiance pour le développement de leur site internet.
                            Qu'il s'agisse d'une refonte ou d'une première présence web, nous avons à coeur de leur livrer{' '}
                            <strong>un site qui correspond à leur besoin</strong>, à leur identité, ainsi qu'à leur budget. Nous travaillons également en
                            collaboration avec des référenceurs, graphistes et photographes pour donner vie à un projet dans sa globalité. N'hésitez pas à
                            consulter également les prototypes - ou "mockups"- de sites, qui sont des inspirations sur différents thèmes.
                        </p>
                        <div className="realisations-description-cta">
                            {/* <FaPeopleArrows /> */}
                            <span>Envie d’échanger sur votre projet ?</span>
                            <LinkButton name="Contactez-nous !" link="/contact" />
                        </div>
                    </div>
                </FadeInOut>
                <div className="realisations-grid">
                    {realisations?.map((realisation) => (
                        <GridItem
                            key={realisation.fields.slug}
                            title={realisation.fields.title}
                            slug={realisation.fields.slug}
                            imgSrc={'https:' + realisation.fields.featured.fields.file.url}
                            width={realisation.fields.featured.fields.file.details.image.width}
                            height={realisation.fields.featured.fields.file.details.image.height}
                            coverSrc={'https:' + realisation.fields.cover.fields.file.url}
                            coverWidth={realisation.fields.cover.fields.file.details.image.width}
                            coverHeight={realisation.fields.cover.fields.file.details.image.height}
                            description={realisation.fields.description}
                            url={realisation.fields.link}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Realisations;
