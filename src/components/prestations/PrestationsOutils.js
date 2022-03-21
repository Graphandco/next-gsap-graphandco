import Image from 'next/image';

const PrestationsOutils = () => {
    const outils = [
        'html',
        'css',
        'javascript',
        'php',
        'wordpress',
        'woocommerce',
        'elementor',
        'prestashop',
        'react',
        'next.js',
        'strapi',
        'photoshop',
        'xd',
        'illustrator',
    ];

    return (
        <section className="prestations-tools">
            <div className="prestations-tools-wrapper container">
                <h3>Voici les outils et langages que nous utilisons (entre autres !)</h3>
                <div className="prestations-tools-list">
                    {outils.map((outil) => (
                        <div className="tool-item" key={outil}>
                            <Image width={40} height={40} src={`/tools/${outil}.png`} alt={outil} />
                            <span className="tool-item-name">{outil}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PrestationsOutils;
