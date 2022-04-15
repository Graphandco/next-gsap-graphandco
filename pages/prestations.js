import Wrapper from '../src/layout/Wrapper';
import Prestations from '../src/components/prestations/Prestations';

const PrestationsPage = () => (
    <Wrapper
        url="https://graphandco.com"
        title="Prestations | Graph and Co"
        description="Les prestations proposées par graph and Co"
        twitter="graphandco"
        imageUrl="https://graphandco.com/graphandco-banner.png"
        imageAlt="Logo Graph and Co"
        // background="linear-gradient(90deg, hsl(205deg 44% 21%), rgb(12, 16, 18))"
        background="linear-gradient(90deg, rgb(30 42 77), rgb(12, 16, 18))"
    >
        <Prestations />
    </Wrapper>
);

export default PrestationsPage;
