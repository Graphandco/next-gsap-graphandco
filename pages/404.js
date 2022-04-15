import Custom404 from '../src/components/Custom404';
import Wrapper from '../src/layout/Wrapper';

const Page404 = () => (
    <Wrapper
        url="https://graphandco.com"
        title="Erreur 404 | Graph and Co"
        description="Page d'erreur 404"
        twitter="graphandco"
        imageUrl="https://graphandco.com/graphandco-banner.png"
        imageAlt="Logo Graph and Co"
        background="linear-gradient(90deg, hsl(205deg 44% 21%), rgb(30, 16, 18))"
    >
        <Custom404 />
    </Wrapper>
);

export default Page404;
