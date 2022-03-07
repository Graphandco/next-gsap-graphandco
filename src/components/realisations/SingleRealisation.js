import PageTitle from '../../ui/PageTitle';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const SingleRealisation = ({ realisation }) => {
    const { title, slug, content } = realisation.fields;
    const image = realisation.fields.featured.fields.file;
    return (
        <>
            <PageTitle title={title} bodyID={slug} />
            <section className="realisation">
                <Image src={'https:' + image.url} width={image.details.image.width} height={image.details.image.height} />
            </section>
            <div>{documentToReactComponents(content)}</div>
        </>
    );
};

export default SingleRealisation;
