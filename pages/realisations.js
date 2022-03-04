import Wrapper from '../src/layout/Wrapper';
import Realisations from '../src/components/realisations/Realisations';
const RealisationsPage = () => {
    return (
        <Wrapper
            url="https://tweenpages.vercel.app/three"
            title="Réalisations | Graph and Co"
            description="Demo of TweenPages with a complex transition to page number three"
            twitter="johnpolacek"
            imageUrl="https://tweenpages.vercel.app/project-logo.png"
            imageAlt="TweenPages Logo"
            background="linear-gradient(90deg,#052233,black)"
        >
            <Realisations />
        </Wrapper>
    );
};

export default RealisationsPage;
