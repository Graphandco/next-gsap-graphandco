import { GetServerSideProps } from 'next';
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';

export const getServerSideprops: GetServerSideProps = async (ctx) => {
    const fields: ISitemapField[] = [];
    return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
