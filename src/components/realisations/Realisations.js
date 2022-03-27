import { useWindowSize } from '../../hooks/useWindowSize';
import PageTitle from '../PageTitle';
import GridItem from './GridItem';

const Realisations = ({ realisations }) => {
    const responsive = useWindowSize();

    //TRI DES RÉALISATIONs PAR POSITION
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
            <PageTitle title="Nos réalisations" bodyID="realisations" />
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
        </>
    );
};

export default Realisations;
