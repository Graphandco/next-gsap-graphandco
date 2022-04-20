import Image from 'next/image';
import FadeInOut from '../../animation/FadeInOut';
import { GiMuscleUp } from 'react-icons/gi';
import { IoIosRocket } from 'react-icons/io';
import PrestationsPack from './PrestationsPack';
import PrestationsDescription from './PrestationsDescription';
import PrestationsOutils from './PrestationsOutils';
import Pagetitle from '../PageTitle';

const Prestations = () => {
    const packs = [
        {
            id: 1,
            title: 'Pack Starter',
            details: ['Vous gérez votre nom de domaine et votre hébergement', 'Votre site est livré clé en main'],
        },
        {
            id: 2,
            title: 'Pack Medium',
            details: ['Gestion de votre nom de domaine et hébergement', 'Maintenance permanente de votre site', 'Modifications graphiques et techniques'],
        },
        {
            id: 3,
            title: 'Pack commerce',
            details: ['Pack Medium avec en plus :', 'Vente en ligne avec panier et tunnel de commande', 'Paiement en ligne et livraison / click and collect'],
        },
        {
            id: 4,
            title: 'Pack sur-mesure',
            details: [
                'Votre site sur mesure :',
                "Virtual DOM → un site rapide comme l'éclair !",
                'Applications mobiles, interfaces utilisateurs, bases de données (backend)...',
                "Et bien d'autres... !",
            ],
        },
    ];
    return (
        <>
            <section className="prestations">
                <Pagetitle title="Nos prestations" bodyID="prestations" />
                {/* <FadeIn
                        className="prestations__title"
                        duration={0.5}
                        y={1200}
                        delay={0.5}
                        >
                        <h1>
                            <FlyInOut x={-500} delay={0.6}>
                                <span>Découvrez</span>
                            </FlyInOut>
                            <FlyInOut x={-500} delay={0.7}>
                                <span>Nos</span>
                            </FlyInOut>
                            <FlyInOut x={-500} delay={0.8}>
                            <span>Offres</span>
                            </FlyInOut>
                            </h1>
                        </FadeIn> */}
                <div className="prestations__lead container">
                    <FadeInOut y={-20} delay={1.8} className="prestations__lead__image">
                        <Image width={300} height={190} src="/img/prestations-lead.svg" />
                    </FadeInOut>
                    <FadeInOut y={-20} delay={1.8} className="prestations__lead__content">
                        Nous mettons à votre disposition le site qui vous correspond le mieux. Nous adaptons nos prestations{' '}
                        <strong>en fonction de vos besoins</strong>. Choisissez votre pack, tout est personnalisable afin de convenir à vos attentes, qu'il
                        s'agisse d'un site vitrine classique ou d'un site avec des fonctionnalités plus poussées, nous avons forcément le site taillé pour vous
                        !
                    </FadeInOut>
                </div>
                <FadeInOut delay={2}>
                    <div className="prestations__hero container">
                        <div className="prestations__hero__row">
                            <FadeInOut x={-20} delay={2.15}>
                                <GiMuscleUp />
                            </FadeInOut>
                            <FadeInOut y={5} delay={2.25}>
                                Vous êtes novice en informatique ? Aucun problème, nous vous montrons à quel point éditer votre site est un vrai jeu d'enfant !
                            </FadeInOut>
                        </div>
                        <div className="prestations__hero__row">
                            <FadeInOut x={-20} delay={2.5}>
                                <IoIosRocket />
                            </FadeInOut>
                            <FadeInOut y={5} delay={2.75}>
                                Vous êtes un utilisateur aguerri ? Vous serez ravi du niveau de personnalisation que le site vous propose.
                            </FadeInOut>
                        </div>
                    </div>
                </FadeInOut>
                <div className="prestations__content">
                    {packs.map((pack) => (
                        <PrestationsPack key={pack.id} title={pack.title} details={pack.details} />
                    ))}
                </div>
            </section>
            <PrestationsDescription />
            <PrestationsOutils />
        </>
    );
};

export default Prestations;
