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
            params: { slug: item.fields?.slug },
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

    return {
        props: {
            realisation: res.items[0],
        },
        revalidate: 1,
    };
};

const Realisation = (realisation) => {
    // console.log(realisation);
    return (
        <Wrapper
            url="https://tweenpages.vercel.app/two"
            title={`${realisation.realisation.fields.title} | Graph and Co`}
            description={`Présentation de la réalisation du site ${realisation.realisation.fields.title}`}
            twitter="johnpolacek"
            imageUrl="https://tweenpages.vercel.app/project-logo.png"
            imageAlt="TweenPages Logo"
            background="linear-gradient(90deg, hsl(205deg 44% 21%), rgb(12, 16, 18))"
        >
            <SingleRealisation realisation={realisation.realisation} />
        </Wrapper>
    );
};

export default Realisation;
