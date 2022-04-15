import { useEffect } from 'react';

const BlogFilter = ({ blogArticles, setFiltered, activeCat, setActiveCat }) => {
    useEffect(() => {
        if (activeCat === 'tous') {
            setFiltered(blogArticles);
            return;
        }
        const filtered = blogArticles.filter((article) => article.fields.category.includes(activeCat));
        setFiltered(filtered);
        console.log(activeCat);
    }, [activeCat]);

    const filteredCategories = [...new Set(blogArticles.map((cat) => cat.fields.category))];
    filteredCategories.unshift('tous');

    return (
        <div className="filter-wrapper container">
            {filteredCategories.map((cat) => (
                <button key={cat} className={activeCat === cat ? 'active' : ''} onClick={() => setActiveCat(cat)}>
                    {cat.replace(/_/g, ' ')}
                </button>
            ))}
        </div>
    );
};

export default BlogFilter;
