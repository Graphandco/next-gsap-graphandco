import { useState } from 'react';
import PageTitle from '../PageTitle';
import BlogFilter from './BlogFilter';
import BlogTile from './BlogTile';
import { motion, AnimatePresence } from 'framer-motion';

const BlogList = ({ blogArticles }) => {
    const [filtered, setFiltered] = useState([]);
    const [activeCat, setActiveCat] = useState('tous');

    // console.log(blogArticles);
    return (
        <section className="blog">
            <PageTitle title="Blog" bodyID="blog" />

            <BlogFilter blogArticles={blogArticles} setFiltered={setFiltered} activeCat={activeCat} setActiveCat={setActiveCat} />

            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout className="blog-wrapper container">
                <AnimatePresence>
                    {filtered.map((article) => (
                        <BlogTile article={article} key={article.fields.slug} />
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};

export default BlogList;
