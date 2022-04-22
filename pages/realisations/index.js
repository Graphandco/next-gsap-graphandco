import Wrapper from '../../src/layout/Wrapper';
import Realisations from '../../src/components/realisations/Realisations';

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

const RealisationsPage = ({ realisations }) => {
    return (
        <Wrapper
            url="https://graphandco.com"
            title="Réalisations | Graph and Co"
            description="Les sites réalisés par Graph and Co"
            twitter="graphandco"
            imageUrl="https://graphandco.com/graphandco-banner.png"
            imageAlt="Logo Graph and Co"
            background="linear-gradient(90deg, rgb(32 68 98), black)"
            // background="linear-gradient(90deg,#052233,black)"
        >
            <Realisations realisations={realisations} />
        </Wrapper>
    );
};

export default RealisationsPage;
