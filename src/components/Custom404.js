import ScaleInOut from '../animation/ScaleInOut';
import LinkButton from './LinkButton';
const Custom404 = () => {
    return (
        <section className="page-404">
            <ScaleInOut as="div" delay={0.5} yellow>
                <div className="page-404-wrapper">
                    <div className="oups">Oups !</div>
                    <h1 className="title-404">Erreur 404</h1>
                    <div className="desc">La page que vous chercher semble introuvable.</div>
                    <LinkButton name="Revenir à l'accueil" link="/" />
                </div>
            </ScaleInOut>
        </section>
    );
};

export default Custom404;
