import Wrapper from '../src/layout/Wrapper';
import Contact from '../src/components/contact/Contact';

const ContactPage = () => (
    <Wrapper
        url="https://graphandco.com"
        title="Contact | Graph and Co"
        description="Page pour prendre contact avec Graph and co"
        twitter="graphandco"
        imageUrl="https://graphandco.com/graphandco-banner.png"
        imageAlt="Logo Graph and Co"
        background="linear-gradient(90deg, rgb(37 52 45), rgb(12, 16, 18))"
    >
        <Contact />
    </Wrapper>
);

export default ContactPage;
