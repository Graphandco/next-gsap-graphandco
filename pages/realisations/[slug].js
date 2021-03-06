import { createClient } from 'contentful';
import Wrapper from '../../src/layout/Wrapper';
import SingleRealisation from '../../src/components/realisations/SingleRealisation';

const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: 'realisations',
    });

    const paths = res.items.map((item) => {
        return {
            params: { slug: item.fields.slug },
        };
    });

    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps = async ({ params }) => {
    const res = await client.getEntries({
        content_type: 'realisations',
        'fields.slug': params.slug,
    });

    if (!res?.items?.[0]) {
        return { notFound: true };
    }

    return {
        props: {
            realisation: res.items[0] || {},
        },
        revalidate: 1,
    };
};

const Realisation = ({ realisation }) => {
    if (realisation) {
        return (
            <Wrapper
                url="https://www.graphandco.com"
                title={`${realisation.fields.title ? realisation.fields.title : ''} | Graph and Co`}
                description={`Présentation du site ${realisation.fields.title ? realisation.fields.title : ''}`}
                twitter="graphandco"
                imageUrl="https://graphandco.com/graphandco-banner.png"
                imageAlt="Graph and Co"
                background="linear-gradient(90deg, rgb(10 39 70), black)"
            >
                <SingleRealisation realisation={realisation} />
            </Wrapper>
        );
    }
    return <div className="not-foud">Not found !!</div>;
};

export default Realisation;
