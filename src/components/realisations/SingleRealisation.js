import PageTitle from '../../ui/PageTitle';
import Image from 'next/image';

const SingleRealisation = ({ realisation }) => {
    const { title, slug } = realisation.fields;
    const image = realisation.fields.featured.fields.file;
    return (
        <>
            <PageTitle title={title} bodyID={slug} />
            <section className="realisation">
                <Image src={'https:' + image.url} width={image.details.image.width} height={image.details.image.height} />
            </section>
        </>
    );
};

export default SingleRealisation;
