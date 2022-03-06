import FadeInOut from '../../animation/FadeInOut';
import Pagetitle from '../../ui/PageTitle';
import ContactForm from './ContactFormMailJS';

const Contact = () => {
    return (
        <section className="contact">
            <Pagetitle title="Nous contacter" bodyID="contact" />
            <FadeInOut x={-20} delay={1}>
                <ContactForm />
            </FadeInOut>
        </section>
    );
};

export default Contact;
