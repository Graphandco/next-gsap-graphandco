import Wrapper from '../src/layout/Wrapper';
import Atouts from '../src/components/home/Atouts';
import Competences from '../src/components/home/Competences';
import Hero from '../src/components/home/Hero';
import { createClient } from 'contentful';
import Rassurance from '../src/components/home/Rassurance';

export const getStaticProps = async () => {
    const client = createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
    });

    const res = await client.getEntries({
        content_type: 'blocsDeTexte',
    });

    return {
        props: {
            blocsDeTexte: res.items,
        },
        revalidate: 1,
    };
};

const IndexPage = ({ blocsDeTexte }) => {
    const homeCompetences = blocsDeTexte.find((bloc) => bloc.fields.slug === 'nos-competences-a-votre-service');
    const pourquoiUnSite = blocsDeTexte.find((bloc) => bloc.fields.slug === 'pourquoi-un-site-web');
    return (
        <Wrapper
            url="https://graphandco.com"
            title="Graph and Co"
            description="Agence spécialisée dans la création de sites web modernes et intuitifs"
            twitter="graphandco"
            imageUrl="https://graphandco.com/graphandco-banner.png"
            imageAlt="Logo Graph and Co"
            background="linear-gradient(90deg, rgb(3 35 59), rgb(12, 16, 18))"
        >
            <Hero />
            <Competences texts={homeCompetences} pourquoiUnSite={pourquoiUnSite} />
            <Atouts />
            <Rassurance />
        </Wrapper>
    );
};

export default IndexPage;
