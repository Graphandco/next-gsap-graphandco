import { createClient } from 'contentful';
import Wrapper from '../../src/layout/Wrapper';
import BlogArticle from '../../src/components/blog/BlogArticle';

const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: 'blog',
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
        content_type: 'blog',
        'fields.slug': params.slug,
    });

    if (!res?.items?.[0]) {
        return { notFound: true };
    }

    return {
        props: {
            blog: res.items[0] || {},
        },
        revalidate: 1,
    };
};

const Blog = ({ blog }) => {
    console.log(blog);
    if (blog) {
        return (
            <Wrapper
                url="https://www.graphandco.com"
                title={`${blog.fields.title ? blog.fields.title : ''} | Graph and Co`}
                description={`${blog.fields.title ? blog.fields.title : ''} | Graph and Co`}
                twitter="graphandco"
                imageUrl="https://graphandco.com/graphandco-banner.png"
                imageAlt="Graph and Co"
                background="linear-gradient(90deg, hsl(205deg 44% 21%), rgb(12, 16, 18))"
            >
                <BlogArticle article={blog} />
            </Wrapper>
        );
    }
    return <div className="not-found">Not found !!</div>;
};

export default Blog;
