import FadeInOut from "../animation/FadeInOut"
import Pagetitle from "../ui/PageTitle"

const MentionsLegales = () => {
    return (
        <>
            <section className="mentions-legales">
                <Pagetitle title="Mentions légales" />
                <FadeInOut x={-20} delay={1.8}>
                    Mentions légales
                </FadeInOut>
            </section>
        </>
    )
}

export default MentionsLegales
