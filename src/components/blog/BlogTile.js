import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const BlogTile = ({ article }) => {
    const { title, slug, description, cover } = article.fields;
    const blogImage = cover.fields.file.url;
    // const { width, height } = cover.fields.file.details.image;
    return (
        <motion.article layout className="blog-article">
            <div className="article-cover">
                <Image src={'https:' + blogImage} layout="fill" objectFit="cover" />
            </div>
            <h2 className="article-title">{title}</h2>
            <div className="article-description">{description}</div>
            <div className="article-link"></div>
            <Link href={`blog/${slug}`}>
                <a>Voir la suite</a>
            </Link>
        </motion.article>
    );
};

export default BlogTile;
