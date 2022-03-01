import Wrapper from '../src/layout/Wrapper';
import Contact from '../src/views/Contact/Contact';

const ContactPage = () => (
    <Wrapper
        url="https://tweenpages.vercel.app/two"
        title="Contact | Graph and Co"
        description="Demo of TweenPages with a complex transition to page number two"
        twitter="johnpolacek"
        imageUrl="https://tweenpages.vercel.app/project-logo.png"
        imageAlt="TweenPages Logo"
        background="linear-gradient(90deg, hsl(205deg 44% 21%), rgb(12, 16, 18))"
    >
        <Contact />
    </Wrapper>
);

export default ContactPage;
