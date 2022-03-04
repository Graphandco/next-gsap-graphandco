import Wrapper from '../src/layout/Wrapper';
import Prestations from '../src/components/prestations/Prestations';

const PrestationsPage = () => (
    <Wrapper
        url="https://tweenpages.vercel.app/two"
        title="Prestations | Graph and Co"
        description="Demo of TweenPages with a complex transition to page number two"
        twitter="graphandco"
        imageUrl="https://tweenpages.vercel.app/project-logo.png"
        imageAlt="TweenPages Logo"
        background="linear-gradient(90deg, hsl(205deg 44% 21%), rgb(12, 16, 18))"
    >
        <Prestations />
    </Wrapper>
);

export default PrestationsPage;
