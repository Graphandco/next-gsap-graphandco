import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import PageTitle from '../PageTitle';
import Image from 'next/image';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const BlogArticle = ({ article }) => {
    console.log(article);
    const { title, content, slug, cover, codeLanguage } = article.fields;
    const blogImage = cover.fields.file.url;
    const { width, height } = cover.fields.file.details.image;
    const code = article.fields.code;

    return (
        <section className="blog-article">
            <PageTitle title={title} bodyID={`article-${slug}`} />
            <article className="blog-article-wrapper container">
                <div className="article-content">
                    {documentToReactComponents(content)}
                    {code && (
                        <div className="article-code">
                            <SyntaxHighlighter language={codeLanguage}>{code}</SyntaxHighlighter>
                        </div>
                    )}
                </div>
                <Image src={'https:' + blogImage} width={width} height={height} />
            </article>
        </section>
    );
};

export default BlogArticle;
