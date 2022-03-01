import Wrapper from '../src/layout/Wrapper';
import Atouts from '../src/views/home/Atouts';
import Competences from '../src/views/home/Competences';
import Hero from '../src/views/home/Hero';

const IndexPage = () => (
    <Wrapper
        url="https://graphandco.com"
        title="Graph and Co"
        description="Agence spécialisée dans la création de sites web modernes et intuitifs"
        twitter="graphandco"
        imageUrl="https://graphandco.com/graphandco-banner.png"
        imageAlt="Logo Graph and Co"
        background="linear-gradient(90deg, rgb(3 35 59), rgb(12, 16, 18))"
    >
        <Hero />
        <Competences />
        <Atouts />
    </Wrapper>
);

export default IndexPage;
