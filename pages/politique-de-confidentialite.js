import Wrapper from '../src/layout/Wrapper';
import PolitiqueConfidentialite from '../src/components/mentions-politique/PolitiqueConfidentialite';

const PolitiqueConfidentialitePage = () => (
    <Wrapper
        url="https://graphandco.com"
        title="Politique de confidentialité | Graph and Co"
        description="Politique de confidentialité du site graphandco.com"
        twitter="graphandco"
        imageUrl="https://graphandco.com/graphandco-banner.png"
        imageAlt="Logo Graph and Co"
        background="linear-gradient(90deg, hsl(205deg 44% 21%), rgb(12, 16, 18))"
    >
        <PolitiqueConfidentialite />
    </Wrapper>
);

export default PolitiqueConfidentialitePage;
