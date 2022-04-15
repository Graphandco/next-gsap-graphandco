import Wrapper from '../../src/layout/Wrapper';
import BlogList from '../../src/components/blog/BlogList';

import { createClient } from 'contentful';

export const getStaticProps = async () => {
    const client = createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
    });

    const res = await client.getEntries({
        content_type: 'blog',
    });

    return {
        props: {
            blogArticles: res.items,
        },
        revalidate: 1,
    };
};

const BlogPage = ({ blogArticles }) => {
    return (
        <Wrapper
            url="https://graphandco.com"
            title="Graph and Co"
            description="Le blog de Graph and Co"
            twitter="graphandco"
            imageUrl="https://graphandco.com/graphandco-banner.png"
            imageAlt="Logo Graph and Co"
            background="linear-gradient(90deg, rgb(93 91 87), black)"
        >
            <BlogList blogArticles={blogArticles} />
        </Wrapper>
    );
};

export default BlogPage;
