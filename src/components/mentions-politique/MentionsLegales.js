import FadeInOut from '../../animation/FadeInOut';
import Pagetitle from '../PageTitle';

const MentionsLegales = () => {
    return (
        <>
            <section className="mentions-legales">
                <Pagetitle title="Mentions légales" bodyID="mentions-legales" />
                <div className="mentions-wrapper container">
                    <FadeInOut x={-20} delay={1.5}>
                        <div className="mention">
                            <h2>Ce site web est développé et édité par :</h2>
                            <p>Représentant légal : Mr Régis Daum</p>
                            <p>Directeur de la publication : Mr Régis Daum</p>
                            <p>Adresse : 1, rue de la Lucelle, 68127 Sainte-Croix-en-Plaine</p>
                            <p>
                                Mail :{' '}
                                <a href="mailto:contact@graphandco.com" title="Nous contacter">
                                    contact@graphandco.com
                                </a>
                            </p>
                            <p>
                                Téléphone :{' '}
                                <a href="tel:0661619998" title="Nous appeler">
                                    06 61 61 99 98
                                </a>
                            </p>
                            <p>SIRET : 803049154 00021</p>
                            <br />
                            <p>
                                <strong>Création logotype :</strong>
                            </p>
                            <p>SF-Elements Studio ©</p>
                            <p>
                                <a href="mailto:contact@sf-elements.com">contact@sf-elements.com</a>
                            </p>
                            <p>
                                <a href="tel:07 79 72 87 51">07 79 72 87 51</a>
                            </p>
                        </div>
                    </FadeInOut>
                    <FadeInOut x={20} delay={2}>
                        <div className="mention">
                            <h2>Ce site web est hébergé par :</h2>
                            <p>1&1 , dont le siège social est : </p>
                            <p>14 Place de la Gare, 57200 Sarreguemines</p>
                            <p>Téléphone : 03 39 70 80 89</p>
                        </div>
                    </FadeInOut>
                </div>
            </section>
        </>
    );
};

export default MentionsLegales;
