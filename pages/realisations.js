import Wrapper from '../src/layout/Wrapper';
import Realisations from '../src/components/realisations/Realisations';

import { createClient } from 'contentful';

export const getStaticProps = async () => {
    const client = createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
    });

    const res = await client.getEntries({
        content_type: 'realisations',
    });

    return {
        props: {
            realisations: res.items,
        },
        revalidate: 1,
    };
};

const RealisationsPage = (realisations) => {
    return (
        <Wrapper
            url="https://tweenpages.vercel.app/three"
            title="Réalisations | Graph and Co"
            description="Sies réalisés par Graph and Co"
            twitter="johnpolacek"
            imageUrl="https://tweenpages.vercel.app/project-logo.png"
            imageAlt="TweenPages Logo"
            background="linear-gradient(90deg,#052233,black)"
        >
            <Realisations realisations={realisations.realisations} />
        </Wrapper>
    );
};

export default RealisationsPage;
