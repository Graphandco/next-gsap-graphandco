import MentionsLegales from '../src/components/mentions-politique/MentionsLegales';
import Wrapper from '../src/layout/Wrapper';

const MentionslegalesPage = () => (
    <Wrapper
        url="https://graphandco.com"
        title="Mentions légales | Graph and Co"
        description="Mentions légales du site graphandco.com"
        twitter="graphandco"
        imageUrl="https://graphandco.com/graphandco-banner.png"
        imageAlt="Logo Graph and Co"
        background="linear-gradient(90deg, hsl(205deg 44% 21%), rgb(12, 16, 18))"
    >
        <MentionsLegales />
    </Wrapper>
);

export default MentionslegalesPage;
