import FadeInOut from "../../animation/FadeInOut"
import Pagetitle from "../../ui/PageTitle"
import ContactForm from "./Contactform"

const Contact = () => {
    return (
        <>
            <section className="contact">
                <Pagetitle title="Nous contacter" />
                <FadeInOut x={-20} delay={1.8}>
                    <ContactForm />
                </FadeInOut>
            </section>
        </>
    )
}

export default Contact
