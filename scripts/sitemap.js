const { Readable } = require('stream');
const { SitemapStream, streamToPromise } = require('sitemap');
const { createClient } = require('contentful');
const globby = require('globby');
const path = require('path');
const fs = require('fs');

if (!process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY) {
    throw new Error();
}

// Initialize Contentful SDK
const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
});

const getAllPosts = async () => client.getEntries({ content_type: 'blog' }).then((posts) => posts.items);

const getAllRealisations = async () => client.getEntries({ content_type: 'realisations' }).then((realisations) => realisations.items);

(async function () {
    /*
    baseStaticPages string[] ['about.js', 'contact.js']

    Include all JS files in pages/ root directory.
    Exlcude index.js, underscored files, dynamic page templates, API folder.
  */
    const baseStaticPages = await globby(['**.js', '!_*.js', '!404.js', '!index.js', '!blog/[slug].js', '!realisations/[slug].js', '!api'], {
        cwd: path.resolve(__dirname, '../pages'),
    });

    // staticPages string[] ['about', 'contact']
    const staticPages = baseStaticPages.map((page) => page.split('.')[0]);

    const posts = await getAllPosts();
    const postSlugs = posts.map((post) => `posts/${post.fields.slug}`);

    const realisations = await getAllRealisations();
    const realisationSlugs = realisations.map((realisation) => `realisations/${realisation.fields.slug}`);

    const sitemapStream = new SitemapStream({
        hostname: process.env.HOST_DOMAIN, // https://pauldavidpatterson.com
    });

    const links = [...postSlugs, ...realisationSlugs, ...staticPages, '/'];
    const linksStream = Readable.from(links).pipe(sitemapStream);

    const xml = await streamToPromise(linksStream);

    const publicFolderPath = path.resolve(__dirname, '../public/sitemap.xml');

    fs.writeFileSync(publicFolderPath, xml);

    console.log('Generated and saved sitemap: /public/sitemap.xml');
})();
