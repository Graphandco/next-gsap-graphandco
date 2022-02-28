import FadeInOut from "../animation/FadeInOut"
import Pagetitle from "../ui/PageTitle"

const Politiqueconfidentialite = () => {
    return (
        <>
            <section className="politique-confidentialite">
                <Pagetitle title="Politique de confidentialité" />
                <FadeInOut x={-20} delay={1.8}>
                    Politique de confidentialité
                </FadeInOut>
            </section>
        </>
    )
}

export default Politiqueconfidentialite
